import React from "react";
import { CreditCardIcon } from "@heroicons/react/24/outline";
function LoanSummary() {
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
        <div className="textfaint">
          <div>
            <CreditCardIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoanSummary;
