import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import UseAxios from "../Hook/UseAxios";
import Container from "../Components/UI/Container";
import Loader from "../Components/UI/Loader";
import { toast } from "react-toastify";
import UserInfo from "../Hook/userInfo";
import Modal from "../Components/UI/Modal";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Key); 

const PaymentForm = ({ selectedItem, onClose, queryClient }) => {
  const stripe = useStripe();
  const elements = useElements();
  const Axios = UseAxios();

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      toast.error("Stripe is not loaded yet!");
      return;
    }

    const cardElement = elements.getElement(CardElement);

    try {
      const { data } = await Axios.post("/create-payment-intent", {
        price: parseFloat(selectedItem?.productPrice) * 100,
      });

      const { clientSecret } = data;

      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            email: selectedItem.userEmail,
          },
        },
      });

      if (paymentResult.error) {
        toast.error(paymentResult.error.message);
      } else if (paymentResult.paymentIntent.status === "succeeded") {
        toast.success("Payment successful!");

        // Update the payment status on the server
        await Axios.patch(`/cart/update-payment/${selectedItem._id}`, {
          paymentStatus: "paid",
        });

        onClose();
        queryClient.invalidateQueries(["cartItems"]);
      }
    } catch (error) {
      toast.error("Payment failed. Please try again.");
    }
  };

  return (
    <form onSubmit={handlePaymentSubmit}>
      <CardElement className="border p-4 rounded mb-4" />
      <button
        type="submit"
        className="btn btn-success mt-4"
        disabled={!stripe}
      >
        Pay ${selectedItem?.productPrice}
      </button>
    </form>
  );
};

const CartPage = () => {
  const Axios = UseAxios();
  const [email] = UserInfo();
  const queryClient = useQueryClient();

  const [selectedItem, setSelectedItem] = useState(null);
  const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);

  const getCartItems = async () => {
    const response = await Axios.get(`/cart-item?email=${email}`);
    return response?.data;
  };

  const { data: carts, isLoading } = useQuery({
    queryKey: ["cartItems"],
    queryFn: getCartItems,
  });

  const removeMutation = useMutation({
    mutationFn: async (id) => {
      const res = await Axios.delete(`/cart/remove/${id}`);
      return res.data;
    },
    onSuccess: () => {
      toast("Item removed from cart.");
      queryClient.invalidateQueries(["cartItems", email]);
    },
    onError: () => {
      toast.error("Failed to remove item.");
    },
  });

  const handlePayNowClick = (item) => {
    setSelectedItem(item);
    setPaymentModalOpen(true);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <Container>
        <div className="overflow-x-auto min-h-screen mt-10">
          <table className="table">
            <thead>
              <tr>
                <th>No</th>
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Remove</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {carts?.map((item, index) => (
                <tr className="bg-base-200" key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <img
                      src={item.productImage}
                      alt={item.productName}
                      className="w-20 h-20 object-cover"
                    />
                  </td>
                  <td>{item.productName}</td>
                  <td>${item.productPrice}</td>
                  <td>
                    <button
                      onClick={() => removeMutation.mutate(item._id)}
                      className="btn btn-secondary"
                    >
                      Remove
                    </button>
                  </td>
                  <td>
                    {item.paymentStatus === "paid" ? (
                      <button className="btn btn-success" disabled>
                        Paid
                      </button>
                    ) : (
                      <button
                        onClick={() => handlePayNowClick(item)}
                        className="btn btn-primary"
                      >
                        Pay Now
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>

      {isPaymentModalOpen && (
        <Modal
          title="Stripe Payment"
          onClose={() => setPaymentModalOpen(false)}
        >
          <Elements stripe={stripePromise}>
            <PaymentForm
              selectedItem={selectedItem}
              onClose={() => setPaymentModalOpen(false)}
              queryClient={queryClient}
            />
          </Elements>
        </Modal>
      )}
    </div>
  );
};

export default CartPage;

