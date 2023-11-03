import axios from "axios";
import React, { useEffect, useState } from "react";
import { OrgState } from "../context/ContextProvider";

function Table({ currWallet }) {
	const [allTransactions, setAllTransactions] = useState();
	const { organisation } = OrgState();

	const getAllTransactions = () => {
		const config = {
			headers: {
				Authorization: `Bearer ${organisation.token}`,
			},
		};

		if (currWallet === "All") {
			axios
				.post(
					"/api/v1/txn/transaction",
					{
						allTransactions: true,
					},
					config
				)
				.then((response) => {
					setAllTransactions(response.data.transactions);
				})
				.catch((err) => console.log(err));
		} else {
			axios
				.post(
					"/api/v1/txn/transaction",
					{
						walletCode: currWallet,
					},
					config
				)
				.then((response) => {
					setAllTransactions(response.data.transactions);
				})
				.catch((err) => console.log(err));
		}
	};

	useEffect(() => {
		getAllTransactions();
	}, [organisation, currWallet]);

	return (
		<div className=" mt-4 mb-8 w-5/6 mx-auto  grow h-64 overflow-y-auto">
			<table className="w-full text-sm text-left text-[#50472D] border border-[#AC9D57]  ">
				<thead className="text-xs rounded-sm text-white uppercase border border-[#333333] bg-[#333333] ">
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

				<tbody className=" overflow-y-auto">
					{allTransactions &&
						allTransactions.map((txn, index) => (
							<tr
								className=" border-b border-[#AC9D57]  hover:bg-[#ddd6c16c] "
								key={txn.transactionTraceId}
							>
								<td className="px-6 py-4">{index + 1}</td>
								<th
									scope="row"
									className="px-6 py-4 font-medium text-[#333333] whitespace-nowrap "
								>
									{txn.transactionTraceId}
								</th>
								<td className="px-6 py-4">
									{txn.counterparty ? (
										txn.counterparty
									) : (
										<span className="uppercase text-blue-900">pending</span>
									)}
								</td>
								<td className="px-6 py-4">
									{txn.code ? (
										txn.code
									) : (
										<span className="uppercase text-blue-900">pending</span>
									)}
								</td>
								<td className="px-6 py-4">{txn.totalAmount}</td>
								<td
									className={`px-6 py-4 ${
										txn.type === "debit" ? `text-[#f25a55]` : `text-green-500`
									} uppercase`}
								>
									{txn.type}
								</td>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	);
}

export default Table;
