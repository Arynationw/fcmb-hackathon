import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
function PersonalInformationBasic() {
  const navigate = useNavigate();
  // const url = `http://api.positionstack.com/v1/forward
  //   ? access_key = ${import.meta.env.VITE_POSITIONSTACK_KEY}`;
  // const fetchStates = async () => {
  //   const res = await fetch(url);
  //   console.log(import.meta.env.VITE_POSITIONSTACK_KEY);
  //   console.log(res);
  //   const data = await res.json();
  //   console.log(data);
  // };
  // useEffect(() => {
  //   fetchStates();
  // }, []);

  return (
    <div className="mx-4 pb-4">
      <h1 className="text-center text-fcmb text-2xl font-bold">
        Personal Information
      </h1>
      <p className="text-center">Please fill in the following information</p>
      <div className="flex justify-between py-4">
        <div className="rounded-full border-2 border-fcmb p-6">1</div>
        <div className="rounded-full border-2  p-6">2</div>
        <div className="rounded-full border-2  p-6">3</div>
        <div className="rounded-full border-2  p-6">4</div>
      </div>
      <div>
        <div>
          <label>Full Name :</label>
          <br />
          <input
            type="text"
            className="w-full rounded my-1"
            placeholder="Please enter your full name"
          />
        </div>
        <div>
          <label htmlFor="">Date of birth :</label>
          <br />
          <input type="date" className="w-full rounded my-1" />
        </div>
        <label htmlFor="">Gender</label>
        <div className="flex justify-evenly">
          <div>
            <input type="radio" className="p-3" name="male" value="male" />
            <label htmlFor="" className="px-3">
              Male
            </label>
          </div>
          <div>
            <input type="radio" className="p-3 " name="female" value="female" />
            <label htmlFor="" className="p-3">
              Female
            </label>
          </div>
        </div>
        <div>
          <label>Email :</label>
          <br />
          <input
            type="email"
            className="w-full rounded my-1"
            placeholder="Please enter your full name"
          />
        </div>
        <div>
          <label>Full Address</label>
          <br />
          <input
            type="text"
            className="w-full rounded my-1"
            placeholder="Please enter full address"
          />
        </div>
        <button
          type="submit"
          onClick={() => navigate("/personal/information/personal")}
          className="bg-fcmb rounded py-3 my-4 w-full text-white font-bold"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PersonalInformationBasic;
