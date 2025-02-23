import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PaymentMethods = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/tracking-status");
    }, 3000);
  }, [navigate]);

  return (
    <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md shadow-md">
      <p className="font-semibold">Payment successful! Redirecting to tracking page...</p>
      <div className="mt-2">
        <p className="font-semibold">Choose Payment Method:</p>
        <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 w-full">
          Cash on Delivery
        </button>
        <button className="mt-2 bg-purple-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-purple-600 w-full">
          UPI Payment
        </button>
        <button className="mt-2 bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600 w-full">
          Credit/Debit Card
        </button>
      </div>
    </div>
  );
};

export default PaymentMethods;
