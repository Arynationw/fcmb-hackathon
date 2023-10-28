import { ArrowRightIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Loan = () => {
  const [vol, setVol] = useState(1000);
  const navigate = useNavigate();
  return (
    <div className="m-4">
      <p className="text-2xl text-center text-fcmb font-bold pb-2">
        Loan Calculator
      </p>
      <h1 className="text-fcmb pb-1 font-bold ">Choose loan Value</h1>
      <p className="pb-4">
        The calculated amount is approximate.the exact terms of the loan are
        determines individually
      </p>

      <label htmlFor="">Period</label>
      <select id="cars" name="cars" className="w-full rounded">
        <option value="volvo">6 months</option>
        <option value="saab">12 months</option>
        <option value="fiat">18 months</option>
        <option value="audi">2 years</option>
      </select>

      <input
        type="range"
        id="vol"
        name="vol"
        min="1000"
        max="50000"
        onChange={(e) => setVol(e.currentTarget.value)}
        className="w-full mt-4 "
      />
      <div className="flex justify-between">
        <h1>${vol}</h1>
        <h1> $50,000</h1>
      </div>

      <div className="border-dashed border-fcmb border-2 bg-fcmbfaint mt-3 mb-5 rounded">
        <div className="p-3">
          <p className="text-center">Monthly payment</p>
          <h1 className="text-center">$ 3,360</h1>
          <p className="text-center">interest 1.4%</p>
        </div>
      </div>

      <p>Loan offers</p>
      <div className="grid grid-cols-2 gap-4">
        <div className="shadow-lg my-4 flex justify-between p-4">
          <div>
            <h1>$30,000</h1>
            <p>Interest</p>
            1.1%/month
          </div>
          <div className=" bg-fcmbfaint rounded-[50%] w-[40px] h-[40px]">
            <ArrowRightIcon className="" />
          </div>
        </div>
        <div className="shadow-lg my-4 flex justify-between p-4">
          <div>
            <h1>$12,000</h1>
            <p>Interest</p>
            1.5%/month
          </div>
          <div className=" bg-fcmbfaint rounded-[50%] w-[40px] h-[40px]">
            <ArrowRightIcon className="" />
          </div>
        </div>
      </div>
      <button
        type="submit"
        onClick={() => navigate("/get/money/now")}
        className="bg-fcmb rounded py-3 my-4 w-full text-white font-bold "
      >
        Get money now
      </button>
    </div>
  );
};

export default Loan;
