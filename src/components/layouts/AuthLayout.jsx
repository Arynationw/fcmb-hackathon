import React from "react";
import { NavLink, Outlet, Navigate, useNavigate } from "react-router-dom";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Cookies from "universal-cookie";
import { useEffect } from "react";
import { useStateContext } from "../../ContextProvider";
import AxiosClient from "../../AxiosClient";
const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", to: "/dashboard" },
  { name: "Survey", to: "/survey" },
];
const userNavigation = [{ name: "Your Profile", href: "#" }];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AuthLayout() {
  const cookies = new Cookies();
  const authuser = cookies.get(import.meta.env.VITE_APP_NAME);
  const navigate = useNavigate();
  const { setUser } = useStateContext();
  useEffect(() => {
    if (!authuser) {
      navigate("/login");
    }
  }, []);

  const logout = (ev) => {
    ev.preventDefault();
    AxiosClient.post("/logout").then(async () => {
      await cookies.remove(import.meta.env.VITE_APP_NAME);
      await setUser(null);
      await navigate("/login");
    });
  };

  return (
    <>
      <Outlet />
    </>
  );
}
