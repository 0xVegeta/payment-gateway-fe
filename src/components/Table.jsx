import React from "react";

function Table({ allWalletTransactions }) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4 w-4/6 mx-auto bg-[#eee] ">
      <table className="w-full text-sm text-left text-[#f25a55] ">
        <thead className="text-xs text-white uppercase bg-[#000000] ">
          <tr className="p-2">
            <th scope="col" className="px-6 py-3">
              Sl. No.
            </th>
            <th scope="col" className="px-6 py-3">
              Transaction ID
            </th>
            <th scope="col" className="px-6 py-3">
              Payee Org ID
            </th>
            <th scope="col" className="px-6 py-3">
              Payee Wallet ID
            </th>
            <th scope="col" className="px-6 py-3">
              Amount
            </th>
            <th scope="col" className="px-6 py-3">
              Type
            </th>
          </tr>
        </thead>
        <tbody>
          {/* {allWalletTransactions &&
            allWalletTransactions.map((txn) => (
              <tr className="bg-[#eee] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-[#31325a1e] ">
                <td className="px-6 py-4">1</td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                 {txn.TransactionTraceId}
                </th>
                <td className="px-6 py-4">{txn.counterParty}</td>
                <td className="px-6 py-4">{txn.code}</td>
                <td className="px-6 py-4">{txn.totalAmount}</td>
                <td className="px-6 py-4">{txn.type}</td>
              </tr>
            ))} */}
          <tr className="bg-[#eee] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-[#31325a1e] ">
            <td className="px-6 py-4">1</td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              AND764
            </th>
            <td className="px-6 py-4">FDG345</td>
            <td className="px-6 py-4">JDF485</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">Credit</td>
          </tr>
          <tr className="bg-[#eee] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-[#31325a1e]">
            <td className="px-6 py-4">2</td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              AND764
            </th>
            <td className="px-6 py-4">FDG345</td>
            <td className="px-6 py-4">JDF485</td>
            <td className="px-6 py-4">$1999</td>
            <td className="px-6 py-4">Credit</td>
          </tr>
          <tr className="bg-[#eee] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-[#31325a1e]">
            <td className="px-6 py-4">3</td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              AND764
            </th>
            <td className="px-6 py-4">FDG345</td>
            <td className="px-6 py-4">JDF485</td>
            <td className="px-6 py-4">$1999</td>
            <td className="px-6 py-4">Credit</td>
          </tr>
          <tr className="bg-[#eee] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-[#31325a1e]">
            <td className="px-6 py-4">4</td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              AND764
            </th>
            <td className="px-6 py-4">FDG345</td>
            <td className="px-6 py-4">JDF485</td>
            <td className="px-6 py-4">$1999</td>
            <td className="px-6 py-4">Credit</td>
          </tr>
          <tr className="bg-[#eee] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-[#31325a1e]">
            <td className="px-6 py-4">5</td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              AND764
            </th>
            <td className="px-6 py-4">FDG345</td>
            <td className="px-6 py-4">JDF485</td>
            <td className="px-6 py-4">$1999</td>
            <td className="px-6 py-4">Credit</td>
          </tr>
          <tr className="bg-[#eee] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-[#31325a1e]">
            <td className="px-6 py-4">6</td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              AND764
            </th>
            <td className="px-6 py-4">FDG345</td>
            <td className="px-6 py-4">JDF485</td>
            <td className="px-6 py-4">$1999</td>
            <td className="px-6 py-4">Credit</td>
          </tr>
          <tr className="bg-[#eee] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-[#31325a1e]">
            <td className="px-6 py-4">7</td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              AND764
            </th>
            <td className="px-6 py-4">FDG345</td>
            <td className="px-6 py-4">JDF485</td>
            <td className="px-6 py-4">$1999</td>
            <td className="px-6 py-4">Credit</td>
          </tr>
          <tr className="bg-[#eee] dark:bg-gray-800 hover:bg-[#31325a1e]">
            <td className="px-6 py-4">8</td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              AND764
            </th>
            <td className="px-6 py-4">FDG345</td>
            <td className="px-6 py-4">JDF485</td>
            <td className="px-6 py-4">$99</td>
            <td className="px-6 py-4">Credit</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
