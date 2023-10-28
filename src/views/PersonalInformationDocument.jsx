import React from "react";
import {
  UserCircleIcon,
  BookOpenIcon,
  IdentificationIcon,
  ShieldCheckIcon,
  FolderMinusIcon,
  ClipboardIcon,
} from "@heroicons/react/24/solid";
function PersonalInformationDocument() {
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
          <div className="rounded-full  bg-fcmb text-white  p-6">3</div>
          <div className="rounded-full border-2 border-fcmb p-6">4</div>
        </div>
        <div>
          <p className="text-fcmbLIght font-bold text-center py-3">
            Please upload any document from list of the following
          </p>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-fcmbfaint rounded">
            <UserCircleIcon className="h-12 w-12 text-fcmb mx-auto" />
            <p className="text-center">Customer pictures</p>
            <p className="text-center">0/1 images</p>
          </div>
          <div className="bg-fcmbfaint rounded">
            <IdentificationIcon className="h-12 w-12 text-fcmb mx-auto" />
            <p className="text-center">ID Card</p>
            <p className="text-center">1/1 images</p>
          </div>
          <div className="bg-fcmbfaint rounded">
            <BookOpenIcon className="h-12 w-12 text-fcmb mx-auto" />
            <p className="text-center">ID Card</p>
            <p className="text-center">0/2 images</p>
          </div>
          <div className="bg-fcmbfaint rounded">
            <ShieldCheckIcon className="h-12 w-12 text-fcmb mx-auto" />
            <p className="text-center">ID Card</p>
            <p className="text-center">0/4 images</p>
          </div>
          <div className="bg-fcmbfaint rounded">
            <ClipboardIcon className="h-12 w-12 text-fcmb mx-auto" />
            <p className="text-center">Labour Contract</p>
            <p className="text-center">2/2 images</p>
          </div>
          <div className="bg-fcmbfaint rounded">
            <FolderMinusIcon className="h-12 w-12 text-fcmb mx-auto" />
            <p className="text-center">Driver's license</p>
            <p className="text-center">1/2 images</p>
          </div>
        </div>
        <button
          type="submit"
          onClick={() => navigate("/personal/information/document")}
          className="bg-fcmb rounded py-3 my-4 w-full text-white font-bold "
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default PersonalInformationDocument;
