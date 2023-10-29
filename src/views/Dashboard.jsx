import React from "react";
import PageComponent from "../components/layouts/pageComponent";
import { useStateContext } from "../ContextProvider";
import { Link } from "react-router-dom";
import {
  PaperAirplaneIcon,
  BookmarkSquareIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";
import Navbar from "../components/Navbar";
const Dashboard = () => {
  const { user } = useStateContext();
  return (
    <>
      <div className="mx-5 ">
        <Navbar />
        <div className="dashboard rounded p-6 text-white">
          <div className="flex justify-between">
            <div>
              <p>Balance</p>
              <h3 className="font-bold">210,00</h3>
            </div>
            <div>
              <div className="flex">
                <div className="bg-red-700 p-4 rounded-full"></div>
                <div className="bg-yellow-300 p-4 rounded-full -ml-3"></div>
              </div>
              <span className="text-sm"> MasterCard</span>
            </div>
          </div>
          <p>**** **** **** 05 51</p>
          <div className="flex justify-between">
            <div>
              <p>Card Holder</p>
              <h6>Arison Helda</h6>
            </div>
            <div>
              <p>Expires</p>
              <h6>2020/06/18</h6>
            </div>
          </div>
        </div>

        <div className="flex justify-evenly my-4 py-3 rounded bg-gray-200">
          <div>
            <Link
              to={"/personal/information/basic"}
              className="font-semibold leading-6 text-fcmb hover:text-indigo-500"
            >
              <div className=" rounded bg-fcmbLight  p-4">
                <CurrencyDollarIcon className="w-6 h-6" />
              </div>
              <span className="text-justify pl-2">Loan</span>
            </Link>
          </div>
          <div>
            <Link
              to={"/loan"}
              className="font-semibold leading-6 text-fcmb hover:text-indigo-500"
            >
              <div className=" rounded bg-fcmbLight  p-4">
                <BookmarkSquareIcon className="w-6 h-6" />
              </div>
              <span className="text-justify">Request</span>
            </Link>
          </div>
          <div>
            <Link className="font-semibold leading-6 text-fcmb hover:text-indigo-500">
              <div className=" rounded bg-fcmbLight  p-4">
                <PaperAirplaneIcon className="w-6 h-6" />
              </div>
              <span className="text-justify pl-2">Send</span>
            </Link>
          </div>

          <div>
            <Link className="font-semibold leading-6 text-fcmb hover:text-indigo-500">
              <div className=" rounded bg-fcmbLight  p-4">
                <BookmarkSquareIcon className="w-6 h-6" />
              </div>
              <span className="text-justify">Recieve</span>
            </Link>
          </div>
        </div>
      </div>

      <div></div>
    </>
  );
};

export default Dashboard;
