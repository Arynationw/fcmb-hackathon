import { XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useNavigate } from "react-router-dom";

function GetMoneyNow() {
  const navigate = useNavigate();
  return (
    <div className="m-4">
      <p className="text-2xl text-center text-fcmb font-bold pb-2">
        Loan Request
      </p>

      <p className="pb-4">
        Repayment will be automatically collected from the debit card linked to
        your account
      </p>

      <label htmlFor="">Purpose of loan</label>
      <br />
      <input
        type="text"
        className="rounded h-8 my-3 border-2 border-fcmb w-full"
      />

      <label for="cars">Bank Account Information</label>
      <br />
      <select
        id="cars"
        name="cars"
        className="my-3 w-full border-2 border-fcmb rounded"
      >
        <option value="none">Choose a Bank</option>
        <option value="saab">First city momentum Bank</option>
        <option value="fiat">Access Bank</option>
        <option value="audi">Fidelity Bank</option>
      </select>
      <input
        type="text"
        placeholder="please enter your Bank account"
        className="rounded h-10 my-3 border-2 border-fcmb w-full"
      />

      <p>Recents</p>

      <div className="bg-fcmbfaint rounded my-2 p-2 flex justify-between ">
        <input type="radio" className="w-8 h-8 mt-2" />
        <div className="flex">
          <img
            src="https://www.fcmb.com/themes/fcmb/logo.png"
            alt="fcmb logo"
            className="h-11 w-11 rounded mr-3"
          />
          <div className="">
            <p>Fcmb</p>
            <p>6453 **** **** 4355</p>
          </div>
        </div>

        <XMarkIcon className="h-6 w-6" />
      </div>

      <div className="bg-fcmbfaint rounded my-2 p-2 flex justify-between ">
        <input type="radio" className="w-8 h-8 mt-2" />
        <div className="flex">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAllBMVEX///8YMnZvuEwnPn54vFc1S4f29/qAwF92u1T6+vzr9eaBwWKircjL5b7o6vGZzH9UZplCVo5kdaL1+vLm8t9/jbOLxm4uRIJOYZbX680eNnnw+O35/Pdeb5602qE4TYja3umr1ZaRyHXB4LLEy9y3v9Sm049zgqyRnL3N0+GczoS83qvS6cewuNCVn8DK0N/f79edqcZDar+MAAAEUklEQVR4nO2c6VYaQRBGOwMoQUlkhwFkMRGNqPj+Lxc1Ybp6GGCWXqo83/3r0twztTaiUgAAAAAAAAAAAAAAAAAAAAAAAAAAaTqNbGrF+FaQ2qJ7bVek8EuwxlcR6dj1CCfy64uIzJNX0JMtsty/gMllX7LIIHkBw6huxSSMyOhif347iqJ6S6zI8/742dW7SDScCRUZJ8c/RZ/cChV53J/eq/8TiaoHVwgRnemr/x7RSqJII8n0/t4jalbOkgAiv5PD14lItJUn0k3ObmuP6rHlXaT2Y3/07JKIrMWJ6Ol9RTyiujSRm+TkPvWImsJEdGDRTP9AmIgOrLtIsogOrGlTsggJrJ+RZJFk6DVaiDwR3QqTYVGkiJ6x1J8DD0Eisb43OQwsSSIPyZnTw8ASJKK3wsOKJUmEVN50K5QlopeQfroVihLR260aZnoIERl/Tw68zfaoLOLFY6QTZHLEQ4QI6SCZlVeMyIs+LrPyShHRI9b+YlGmSEePWEcTRIIISfTjCSJAhCR6ekuXJULeu12d8uAuQjp61uwuRoQUrF32iCVDZKwL1vTytAdrkYYuWKcTnblIbamPOZ3ovEXiV31K9i4lQyTWq5TanvfgK0IayJGdUIaIvjM5X7A4i5BGODuy24oQ2ZATjq8g/EVIQ1f3+TxYisz1VcPRuwYJIjd6MMnTQNiKUI88DYSrCPWY5GkgTEXIwHt2cucsYnicWtGZi9C46hfy4CUyJx6tXIMJTxHaP4p6cBLpVvFgJELnq+IefETI3F7Gg40IuXEv5cFEJH4mv7Jg3eUkUiP7ecE+yEpk9Eh+YUkPDiIdcg9XaE5kJkLHEtUu6xFehLbBAnsUOxHaPvLvtexEjHKV+56Bn0iDlqtZznsfhiJjWq6m+e7hOIpsaJr3y4wlLERi4yOqk5JtMLyI0c2rlN3AIjc0PXK8H8VVZEDTo7e24BFExOwe/SsbHiFEjKqrtqWnq9AiRlhVmkqCiphh1avWzQOKmNXKUnr4F4mNWbfC8hFYZGE0wVmlYTekyIaugqpVcUgMJjIystxuWPkU6RpZbjms/InUno0f6lsOK28i5uM49de7rEVG5uOY2muCfkVSj2NbeYXKpPKHjs8+DrNYOchyPyJm71CTqpt5IJGO0crVzMYmGEAkfjEGdrWzOCL6FJkvjW90+ThciizMJFcTl4/DnUj8YEZVz1WxsicSZ0aV2TrU1lmxsieyyKhVqf+qNs34rDM/kW5ao/ZmRpV6sj2wuxF5SyXHwOyAaudg0HUi8uNUyVU9tzXXpgiNrfFr6mt3bgZENyKPxzqHmniKKksiavOpMbpO5XjLR62yKnLxXoFrD6kcn916qVVWRdRyNEg1QNV23wEdiKhUUKnd2reGJRETz8nhSsRf53Aq4j3HHYl4bIBORay9+xRaRPXa9+vyD6VZL8fVB0OrIgAAAAAAAAAAAAAAAAAAAAAAAAD4EvwFUsp1aO69BGEAAAAASUVORK5CYII="
            alt="fcmb logo"
            className="h-11 w-11 rounded mr-3"
          />
          <div className="">
            <p>Fidelity</p>
            <p>3893 **** **** 7368</p>
          </div>
        </div>

        <XMarkIcon className="h-6 w-6" />
      </div>
      <button
        type="submit"
        onClick={() => navigate("/loan/summary")}
        className="bg-fcmb rounded py-3 my-4 w-full text-white font-bold "
      >
        Next
      </button>
    </div>
  );
}

export default GetMoneyNow;
