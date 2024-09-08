import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {  RouterProvider } from 'react-router-dom'
import route from './Route/Route'
import AuthProvider from './AuthProvider/AuthProvider'
import { Toaster } from 'react-hot-toast'
  import { ToastContainer } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
import {
  
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={route}></RouterProvider>
      </AuthProvider>
    </QueryClientProvider>
    <ToastContainer />
    <Toaster></Toaster>
  </React.StrictMode>
);
