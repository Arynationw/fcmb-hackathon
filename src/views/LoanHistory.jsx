import { ClockIcon } from "@heroicons/react/24/outline";
import React from "react";

function LoanHistory() {
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
      <div className="bg-fcmbfaint flex p-2 justify-center ">
        <ClockIcon className="h-7 w-7 mx-5 self-center" />
        <p>Payment due today</p>
      </div>
      <p className="text-sm text-center text-red-600">
        Request repayment from a peer
      </p>
      <div className="m-6 shadow-lg p-5 border-t-[1px] border-gray-300">
        <p>You have to pay</p>
        <h1 className="font-bold text-2xl">₦30,000</h1>
        <div className="my-3 flex justify-between">
          <div className="">
            <p>Due Date</p>
            <h1 className="font-bold text-md">{formatedDate}</h1>
          </div>
          <div>
            <p>Repay</p>
            <h1 className="font-bold text-md text-red-600">Today</h1>
          </div>
        </div>
        <button
          type="submit"
          onClick={() => navigate("/personal/information/document")}
          className="bg-fcmb rounded py-3 my-4 w-full text-white font-bold "
        >
          Repay Now
        </button>
      </div>

      <div className="m-6 shadow-lg p-5 border-[1px] border-gray-300">
        <div className="flex justify-between">
          <h1 className="font-bold">Loan ID 564678</h1>
          <p className="text-sm font-bold">Disbursed</p>
        </div>
        <div className="border-t-[1px] mt-2 border-gray-300" />
        <div className="flex justify-between mt-2">
          <p className="text-sm">Loan Amount</p>
          <p>₦12,000</p>
        </div>
        <div className="flex justify-between mt-2">
          <p className="text-sm">Loan Duration</p>
          <p>7 Days</p>
        </div>
        <div className="flex justify-between mt-2">
          <p className="text-sm">Disbursed on</p>
          <p>22 Oct 2023</p>
        </div>
      </div>
      <div className="m-6 shadow-lg p-5 border-[1px] border-gray-300">
        <div className="flex justify-between">
          <h1 className="font-bold">Loan ID 564679</h1>
          <p className="text-sm font-bold text-green-700">Closed</p>
        </div>
        <div className="border-t-[1px] mt-2 border-gray-300" />
        <div className="flex justify-between mt-2">
          <p className="text-sm">Loan Amount</p>
          <p>₦12,000</p>
        </div>
        <div className="flex justify-between mt-2">
          <p className="text-sm">Loan Duration</p>
          <p>7 Days</p>
        </div>
        <div className="flex justify-between mt-2">
          <p className="text-sm">Disbursed on</p>
          <p>22 Oct 2023</p>
        </div>
      </div>
      <div className="m-6 shadow-lg p-5 border-[1px] border-gray-300">
        <div className="flex justify-between">
          <h1 className="font-bold">Loan ID 564689</h1>
          <p className="text-sm font-bold text-red-600">Overdue</p>
        </div>
        <div className="border-t-[1px] mt-2 border-gray-300" />
        <div className="flex justify-between mt-2">
          <p className="text-sm">Loan Amount</p>
          <p>₦12,000</p>
        </div>
        <div className="flex justify-between mt-2">
          <p className="text-sm">Loan Duration</p>
          <p>7 Days</p>
        </div>
        <div className="flex justify-between mt-2">
          <p className="text-sm">Disbursed on</p>
          <p>{formatedDate}</p>
        </div>
      </div>
    </div>
  );
}

export default LoanHistory;
