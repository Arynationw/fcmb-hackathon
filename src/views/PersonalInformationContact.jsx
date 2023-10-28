import React from "react";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
function PersonalInformationContact() {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  const navigate = useNavigate();
  return (
    <>
      <div className="mx-4 pt-8">
        <h1 className="text-center text-fcmb text-2xl font-bold">
          personal Information
        </h1>
        <p className="text-center">Please fill in the following information</p>
        <div className="flex justify-between py-4">
          <div className="rounded-full bg-fcmb text-white p-6">1</div>
          <div className="rounded-full  bg-fcmb text-white  p-6">2</div>
          <div className="rounded-full border-2 border-fcmb p-6">3</div>
          <div className="rounded-full border-2  p-6">4</div>
        </div>
        <div>
          <div className="sm:py-4">
            <p>Contact 1</p>
            <label for="cars">Relationship</label>
            <br />
            <select id="cars" name="cars" className="w-full rounded">
              <option value="none">
                Please select the relationship with you
              </option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </select>

            <div className="flex justify-between border-[1px] rounded py-1 mt-2 border-black">
              <span className="pl-3">Click + to add Contact info</span>
              <span
                className="pr-3 font-bold text-lg cursor-pointer"
                onClick={() => setOpen(!open)}
              >
                +
              </span>
            </div>
          </div>

          <div className="sm:py-4">
            <p>Contact 2</p>
            <label for="cars">Relationship</label>
            <br />
            <select id="cars" name="cars" className="w-full rounded">
              <option value="none">
                Please select the relationship with you
              </option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </select>

            <div className="flex justify-between border-[1px] rounded py-1 mt-2 border-black">
              <span className="pl-3">Click + to add Contact info</span>
              <span
                className="pr-3 font-bold text-lg cursor-pointer"
                onClick={() => setOpen(!open)}
              >
                +
              </span>
            </div>
          </div>

          <button
            type="submit"
            onClick={() => navigate("/personal/information/document")}
            className="bg-fcmb rounded py-3 my-4 w-full text-white font-bold "
          >
            Next
          </button>
        </div>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 "
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <ExclamationTriangleIcon
                          className="h-6 w-6 text-red-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold leading-6 text-gray-900"
                        >
                          Add Contact
                        </Dialog.Title>
                        <div className="mt-2">
                          <form>
                            <div className="space-y-12">
                              <div className="border-b border-gray-900/10 pb-12">
                                <h2 className="text-base font-semibold leading-7 text-gray-900">
                                  Personal Information
                                </h2>
                                <p className="mt-1 text-sm leading-6 text-gray-600">
                                  Use a permanent address where they can receive
                                  mail.
                                </p>

                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                  <div className="sm:col-span-3">
                                    <label
                                      htmlFor="first-name"
                                      className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                      First name
                                    </label>
                                    <div className="mt-2">
                                      <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                      />
                                    </div>
                                  </div>

                                  <div className="sm:col-span-3">
                                    <label
                                      htmlFor="last-name"
                                      className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                      Last name
                                    </label>
                                    <div className="mt-2">
                                      <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                      />
                                    </div>
                                  </div>

                                  <div className="sm:col-span-4">
                                    <label
                                      htmlFor="email"
                                      className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                      Email address
                                    </label>
                                    <div className="mt-2">
                                      <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                      />
                                    </div>
                                  </div>

                                  <div className="sm:col-span-3">
                                    <label
                                      htmlFor="country"
                                      className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                      Country
                                    </label>
                                    <div className="mt-2">
                                      <select
                                        id="country"
                                        name="country"
                                        autoComplete="country-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                      >
                                        <option>United States</option>
                                        <option>Canada</option>
                                        <option>Mexico</option>
                                      </select>
                                    </div>
                                  </div>

                                  <div className="col-span-full">
                                    <label
                                      htmlFor="street-address"
                                      className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                      Street address
                                    </label>
                                    <div className="mt-2">
                                      <input
                                        type="text"
                                        name="street-address"
                                        id="street-address"
                                        autoComplete="street-address"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                      />
                                    </div>
                                  </div>

                                  <div className="sm:col-span-2 sm:col-start-1">
                                    <label
                                      htmlFor="city"
                                      className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                      City
                                    </label>
                                    <div className="mt-2">
                                      <input
                                        type="text"
                                        name="city"
                                        id="city"
                                        autoComplete="address-level2"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                      />
                                    </div>
                                  </div>

                                  <div className="sm:col-span-2">
                                    <label
                                      htmlFor="region"
                                      className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                      State / Province
                                    </label>
                                    <div className="mt-2">
                                      <input
                                        type="text"
                                        name="region"
                                        id="region"
                                        autoComplete="address-level1"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                      />
                                    </div>
                                  </div>

                                  <div className="sm:col-span-2">
                                    <label
                                      htmlFor="postal-code"
                                      className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                      ZIP / Postal code
                                    </label>
                                    <div className="mt-2">
                                      <input
                                        type="text"
                                        name="postal-code"
                                        id="postal-code"
                                        autoComplete="postal-code"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
                      onClick={() => setOpen(false)}
                    >
                      Add
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

export default PersonalInformationContact;
