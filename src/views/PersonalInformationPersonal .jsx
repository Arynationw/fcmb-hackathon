import React from "react";
import { useNavigate } from "react-router-dom";
function PersonalInformationPersonal() {
  const navigate = useNavigate();
  return (
    <div className="mx-4 pt-8">
      <h1 className="text-center text-fcmb text-2xl font-bold">
        personal Information
      </h1>
      <p className="text-center">Please fill in the following information</p>
      <div className="flex justify-between py-4">
        <div className="rounded-full bg-fcmb text-white p-6">1</div>
        <div className="rounded-full border-2 border-fcmb p-6">2</div>
        <div className="rounded-full border-2  p-6">3</div>
        <div className="rounded-full border-2  p-6">4</div>
      </div>
      <div>
        <div className="sm:py-4">
          <label for="cars">Education</label>
          <br />
          <select id="cars" name="cars" className="w-full rounded">
            <option value="none">Please select your highest degree</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div className="sm:py-4">
          <label for="cars">Job Status</label>
          <br />
          <select id="cars" name="cars" className="w-full rounded">
            <option value="none">Please select your highest degree</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div className="sm:py-4">
          <label for="cars">Salary</label>
          <br />
          <select id="cars" name="cars" className="w-full rounded">
            <option value="none">Please select your salary range</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div className="sm:py-4">
          <label for="cars">Marital Status</label>
          <br />
          <select id="cars" name="cars" className="w-full rounded">
            <option value="none">Please select your marital status</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <button
          type="submit"
          onClick={() => navigate("/personal/information/contact")}
          className="bg-fcmb rounded py-3 my-4 w-full text-white font-bold "
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PersonalInformationPersonal;
