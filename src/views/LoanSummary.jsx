import React from "react";
import { CreditCardIcon } from "@heroicons/react/24/outline";
function LoanSummary() {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date = new Date();
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  const formatedDate = day + " " + months[monthIndex] + " " + year;
  return (
    <div className="m-4">
      <p className="text-2xl text-center text-fcmb font-bold pb-2">
        Loan Summary
      </p>
      <p className="pb-4">
        The calculated amount is approximate.the exact terms of the loan are
        determines individually
      </p>
      <div className="shadow-lg">
        <div className="m-4">
          <div className="bg-fcmbfaint flex p-4">
            <div className="bg-fcmb rounded m-1 p-3">
              <CreditCardIcon className="text-white h-14 w-14" />
            </div>
            <div className="ml-1">
              <h1 className="bold text-2xl">Fcmb</h1>
              <p>Credit</p>
              <p>4532 **** **** 3786</p>
            </div>
          </div>
          <div>
            <div className="flex justify-between p-1">
              <p>Amount</p>
              <p className="font-bold">$20,000</p>
            </div>
            <div className="flex justify-between p-1">
              <p>Interest rate/month</p>
              <p className="font-bold">1.4%</p>
            </div>
            <div className="flex justify-between p-1">
              <p>Period</p>
              <p className="font-bold">6 months</p>
            </div>
            <div className="flex justify-between p-1">
              <p>Agreement date</p>
              <p className="font-bold">{formatedDate}</p>
            </div>
            <div className="flex justify-between p-1">
              <p>Monthly Payment</p>
              <p className="font-bold">$3,360</p>
            </div>
            <div className="border-t-2 border-fcmb mt-2"></div>
            <div className="flex justify-between p-1 mt-2">
              <p>Total</p>
              <p className="font-bold text-2xl">$28,000</p>
            </div>
          </div>
        </div>
      </div>
      <button
        type="submit"
        onClick={() => navigate("/personal/information/document")}
        className="bg-fcmb rounded py-3 my-4 w-full text-white font-bold "
      >
        Submit
      </button>
    </div>
  );
}

export default LoanSummary;
