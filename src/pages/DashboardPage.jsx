import { useNavigate } from "react-router-dom";
import Table from "../components/Table";
import { OrgState } from "../context/ContextProvider";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import WalletIcon from "../icons/WalletIcon";
import SignOutIcon from "../icons/SignOutIcon";
import Navbar from "../components/Navbar";
import OrganisationIcon from "../icons/OrganisationIcon";

function DashboardPage() {
	const { organisation, setOrganisation } = OrgState();
	const [loading, setLoading] = useState(false);
	const [currWallet, setCurrWallet] = useState("All");
	const [org, setOrg] = useState("");
	useEffect(() => {
		if (organisation) setOrg(organisation);
	}, [organisation]);
	const navigate = useNavigate();

	useEffect(() => {
		const org = JSON.parse(localStorage.getItem("orgInfo"));
		if (org) navigate("/");
		else navigate("/signin");
	}, [navigate]);

	const signOutHandler = () => {
		localStorage.removeItem("orgInfo");
		navigate("/signin");
	};

	const addWalletHandler = async () => {
		setLoading(true);
		try {
			const config = {
				headers: {
					Authorization: `Bearer ${organisation.token}`,
				},
			};

			const { data } = await axios.post(
				`${import.meta.env.VITE_URL}/api/v1/wallets`,
				{},
				config
			);

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

	return (
		<div className="h-screen flex  w-screen  ">
			<div className="w-1/5 bg-[#DDD6C1] px-8 pt-12 pb-5 flex flex-col ">
				<div className="tracking-tight uppercase font-['Oswald'] text-5xl text-center text-[#333333] font-black">
					<h1 className="  leading-10  ">Payment</h1>
					<h1>Gateway</h1>
				</div>
				<div className="flex flex-col p-4  mt-5 bg-[#EEE8D5] rounded-md">
					<div className=" uppercase text-sm  text-center leading-8 font-bold mb-2 text-[#f25a55] tracking-tight flex gap-1 justify-center align-middle ">
						<OrganisationIcon />

						<div>Organisation Details</div>
					</div>
					<div className="flex gap-1 ">
						<div className="uppercase text-xs font-medium text-[#B99010]  ">
							Organisation Name:{" "}
						</div>
						<div className="max-w-full">
							<div className="text-[#AC9D57]  text-xs p-0 border-none bg-transparent ">
								{org.merchant}
							</div>
						</div>
					</div>

					<div className="flex gap-1 ">
						<div className="uppercase text-xs font-medium text-[#B99010]  ">
							Category:{" "}
						</div>
						<div className="max-w-full">
							<div className="text-[#AC9D57]  text-xs p-0 border-none bg-transparent ">
								{org.category}
							</div>
						</div>
					</div>
					<div className="flex gap-1 ">
						<div className="uppercase text-xs font-medium text-[#B99010]  ">
							Email:{" "}
						</div>
						<div className="max-w-full">
							<div className="text-[#AC9D57]  text-xs p-0 border-none bg-transparent ">
								{org.email}
							</div>
						</div>
					</div>
					<div className="flex gap-1 ">
						<div className="uppercase text-xs font-medium text-[#B99010]  ">
							Organisation ID:{" "}
						</div>
						<div className="max-w-full">
							<div className="text-[#AC9D57]  text-xs p-0 border-none bg-transparent ">
								{org.userCode}
							</div>
						</div>
					</div>
					<div className="flex gap-1 ">
						<div className="uppercase text-xs font-medium text-[#B99010]  ">
							Balance:{" "}
						</div>
						<div className="max-w-full">
							<div className="text-[#AC9D57]  text-xs p-0 border-none bg-transparent ">
								{org.balance}
							</div>
						</div>
					</div>
				</div>
				<div className="mt-4 bg-[#FDF6E3] ]  rounded-sm h-48 overflow-y-auto text-[#70674D] text-sm">
					<div
						className={
							currWallet === "All"
								? `flex items-center flex-shrink-0 px-5 py-2 space-x-2  border-l-[#f25a55] rounded-sm bg-[#f25a5525] font-bold border-l-8 text-[#f25a55] cursor-pointer transition-all duration-200 ease-in-out `
								: `flex items-center flex-shrink-0 px-5 py-2 space-x-2 border-b border-l-8 border-l-[#FDF6E3] hover:border-[#ddd6c16c] border-[#DDD6C1] rounded-sm hover:bg-[#ddd6c16c] cursor-pointer transition-all duration-200 ease-in-out`
						}
						onClick={() => setCurrWallet("All")}
					>
						<WalletIcon />
						<div>All Wallets</div>
					</div>
					{organisation?.walletCode?.map((wallet) => (
						<div
							className={
								currWallet === wallet
									? `flex items-center flex-shrink-0 px-5 py-2 space-x-2  border-l-[#f25a55] rounded-sm bg-[#f25a5525] font-bold border-l-8 text-[#f25a55] cursor-pointer transition-all duration-200 ease-in-out `
									: `flex items-center flex-shrink-0 px-5 py-2 space-x-2 border-b border-l-8 border-l-[#FDF6E3] hover:border-[#ddd6c16c] border-[#DDD6C1] rounded-sm hover:bg-[#ddd6c16c] cursor-pointer transition-all duration-200 ease-in-out`
							}
							key={wallet}
							onClick={() => setCurrWallet(wallet)}
						>
							<WalletIcon />
							<div>{wallet}</div>
						</div>
					))}
				</div>
				<button
					onClick={addWalletHandler}
					className="uppercase font-bold text-white mt-2 rounded-md py-2 text-center bg-[#f25a55] hover:bg-[#333333] transition-all duration-300 ease-in"
				>
					+ Add Wallet
				</button>
				<div className="grow flex flex-col justify-end">
					<button
						className=" flex justify-center gap-3 px-5 py-2   rounded-md hover:bg-[#b98f1043] border border-[#B99010] text-[#B99010] font-bold   cursor-pointer transition-all duration-200 ease-in-out text-center"
						onClick={signOutHandler}
					>
						<SignOutIcon />
						<div>Sign Out</div>
					</button>
				</div>
			</div>
			<div className="w-4/5 bg-[#FDF6E3] mx-auto flex flex-col align-middle text-center justify-center h-screen p-4">
				<Navbar />
				{organisation ? (
					<Table currWallet={currWallet} />
				) : (
					"Loading..."
				)}
			</div>
			<ToastContainer />
		</div>
	);
}
export default DashboardPage;