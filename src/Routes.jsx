import { Navigate, createBrowserRouter } from "react-router-dom";
import {
  Login,
  Dashboard,
  Registration,
  Survey,
  PersonalInformationBasic,
  PersonalInformationPersonal,
  PersonalInformationContact,
  PersonalInformationDocument,
  Loan,
  GetMoneyNow,
  LoanSummary,
  LoanHistory,
} from "./views";
import AuthLayout from "./components/layouts/AuthLayout";
import GuestLayout from "./components/layouts/GuestLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to={"/dashboard"} />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/survey",
        element: <Survey />,
      },
      {
        path: "/personal/information/basic",
        element: <PersonalInformationBasic />,
      },
      {
        path: "/personal/information/personal",
        element: <PersonalInformationPersonal />,
      },
      {
        path: "/personal/information/contact",
        element: <PersonalInformationContact />,
      },
      {
        path: "/personal/information/document",
        element: <PersonalInformationDocument />,
      },
      {
        path: "/loan",
        element: <Loan />,
      },
      {
        path: "/get/money/now",
        element: <GetMoneyNow />,
      },
      {
        path: "/loan/summary",
        element: <LoanSummary />,
      },
      {
        path: "/loan/history",
        element: <LoanHistory />,
      },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Registration />,
      },
    ],
  },
]);
