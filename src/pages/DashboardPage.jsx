import React, { useEffect, useState } from "react";
import Table from "../components/Table";
import { OrgState } from "../context/ContextProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function DashboardPage() {
  const { organisation, setOrganisation } = OrgState();
  const [loading, setLoading] = useState(false);
  const [allWalletTransactions, setAllWalletTransactions] = useState();

  useEffect(() => {
    console.log(organisation);
  }, [organisation]);

  const addWalletHandler = async () => {
    setLoading(true);
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${organisation.token}`,
        },
      };

      const { data } = await axios.post("/api/v1/wallets", {}, config);

      toast.success("Wallet added Successfully");

      let newOrg = { ...organisation };
      newOrg.walletCode.push(data.newWallet.code);

      setOrganisation(newOrg);
      localStorage.setItem("orgInfo", JSON.stringify(newOrg));
      setLoading(false);
    } catch (error) {
      toast.error("Error Occured!");
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    if (organisation) setAllWalletTransactions(getAllTransactions());
  }, [organisation]);
  const getAllTransactions = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${organisation.token}`,
        },
      };

      const { data } = await axios.post(
        "/api/v1/txn/transaction",
        {
          allTransations: true,
          // walletCode:
        },
        config
      );
      return data;
      console.log(data);
    } catch (error) {
      toast.error("Error Occured!");
      console.log(error);
      return null;
    }
  };
  return (
    <div className="flex flex-col bg-[#e0dbc3] text-[#f25a55] h-screen">
      <div className="m-6 py-8 px-12 bg-[#31325a] text-white flex flex-col gap-1 leading-6 rounded-md">
        <div className="mx-auto uppercase text-3xl font-extrabold mb-2 text-[#f25a55] tracking-tight">
          Organisation Details
        </div>
        <div className="text-md font-medium">
          <span className="uppercase tracking-wide">
            Organisation Name: &nbsp;{" "}
          </span>
          <span className="font-thin">{organisation?.merchant}</span>
        </div>
        <div className="text-md font-medium">
          <span className="uppercase tracking-wide">Category: &nbsp; </span>
          <span className="font-thin">{organisation?.category}</span>
        </div>
        <div className="text-md font-medium">
          <span className="uppercase tracking-wide">Email: &nbsp; </span>
          <span className="font-thin">{organisation?.email}</span>
        </div>
        <div className="text-md font-medium">
          <span className="uppercase tracking-wide">
            Organisation ID: &nbsp;{" "}
          </span>
          <span className="font-thin">{organisation?.userCode}</span>
        </div>
        <div className="text-md font-medium">
          <span className="uppercase tracking-wide">Balance: &nbsp; </span>
          <span className="font-thin">{organisation?.balance}</span>
        </div>
      </div>
      <div className="m-6 mt-0 py-8 px-12 bg-[#31325a] text-white flex flex-col gap-1 leading-8 rounded-md h-4/6  ">
        <div className="flex justify-around ">
          <div className="flex items-left mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap justify-start w-full ">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg dark:border-gray-400 dark:text-gray-50"
            >
              <span>All Wallets</span>
            </a>
            {organisation?.walletCode.map((wallet) => (
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b"
                key={wallet}
              >
                <span>{wallet}</span>
              </a>
            ))}
          </div>
          <button
            className="bg-[#f25a55] rounded-md w-36 font-semibold uppercase "
            onClick={addWalletHandler}
          >
            Add Wallet
          </button>
        </div>
        {organisation ? <Table allWalletTransactions /> : "Loading..."}
      </div>
      <ToastContainer />
    </div>
  );
}

export default DashboardPage;
