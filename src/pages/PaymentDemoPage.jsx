import { Link, useNavigate } from "react-router-dom";
import { OrgState } from "../context/ContextProvider";
import PaymentPopup from "../components/PaymentPopup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useEffect, useState } from "react";
import CloseIcon from "../icons/CloseIcon";

function PaymentDemoPage() {
	const navigate = useNavigate();
	const [loading, setLoading] = useState();
	const { organisation, sessionData, amount } = OrgState();
	const txnTraceId = sessionData?.transactionTraceId;
	const [time, setTime] = useState(0);
	const [walletId, setWalletId] = useState("");
	const [pin, setPin] = useState("");
	const [isPopupOpen, setPopupOpen] = useState(false);

	const openPopup = () => {
		setPopupOpen(true);
	};

	const closePopup = () => {
		setPopupOpen(false);
	};
	const clickHandler = async () => {
		setLoading(true);
		try {
			const config = {
				headers: {
					Authorization: `Bearer ${organisation.token}`,
				},
			};

			const { data } = await axios.post(
				`/api/v1/txn/accept-payment/${txnTraceId}`,
				{
					fromWalletCode: walletId,
					totalAmount: Number(sessionData.totalAmount),
					pin: pin,
				},
				config
			);
			console.log(data);
			toast.success("Payment Successful!");
			navigate("/paymentDemo");

			setLoading(false);
		} catch (error) {
			toast.error("Error Occured!");
			console.log(error);
			setLoading(false);
			navigate("/paymentDemo");
		}
	};

	useEffect(() => {
		if (sessionData) setTime(sessionData["session-time"]);
	}, []);

	useEffect(() => {
		const timer = setInterval(() => {
			// Update the time every second
			if (time > 0) {
				setTime(time - 1);
			}
		}, 1000);

		// Cleanup the timer when the component unmounts
		return () => {
			clearInterval(timer);
		};
	}, [time]);
	return (
		<section>
			<div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
				<div className="mx-auto max-w-3xl">
					<header className="text-center flex justify-between">
						<div>Session Ends in: {time} secs</div>
						<h1 className="text-xl font-extrabold text-gray-900 sm:text-3xl uppercase tracking-tight">
							Your Cart
						</h1>
					</header>
					<div className="mt-8">
						<ul className="space-y-4">
							<li className="flex items-center gap-4">
								<img
									src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
									alt=""
									className="h-16 w-16 rounded object-cover"
								/>
								<div>
									<h3 className="text-sm text-gray-900">
										Basic Tee 6-Pack
									</h3>
									<dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
										<div>
											<dt className="inline">Size:</dt>
											<dd className="inline">XXS</dd>
										</div>
										<div>
											<dt className="inline">Color:</dt>
											<dd className="inline">White</dd>
										</div>
									</dl>
								</div>
								<div className="flex flex-1 items-center justify-end gap-2">
									<form>
										<label
											htmlFor="Line1Qty"
											className="sr-only"
										>
											{"{"}" "{"}"}
											Quantity{"{"}" "{"}"}
										</label>
										<input
											type="number"
											min={1}
											defaultValue={1}
											id="Line1Qty"
											className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
										/>
									</form>
									<button className="text-gray-600 transition hover:text-red-600">
										<span className="sr-only">
											Remove item
										</span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="currentColor"
											className="h-4 w-4"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
											/>
										</svg>
									</button>
								</div>
							</li>
							<li className="flex items-center gap-4">
								<img
									src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
									alt=""
									className="h-16 w-16 rounded object-cover"
								/>
								<div>
									<h3 className="text-sm text-gray-900">
										Basic Tee 6-Pack
									</h3>
									<dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
										<div>
											<dt className="inline">Size:</dt>
											<dd className="inline">XXS</dd>
										</div>
										<div>
											<dt className="inline">Color:</dt>
											<dd className="inline">White</dd>
										</div>
									</dl>
								</div>
								<div className="flex flex-1 items-center justify-end gap-2">
									<form>
										<label
											htmlFor="Line2Qty"
											className="sr-only"
										>
											{"{"}" "{"}"}
											Quantity{"{"}" "{"}"}
										</label>
										<input
											type="number"
											min={1}
											defaultValue={1}
											id="Line2Qty"
											className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
										/>
									</form>
									<button className="text-gray-600 transition hover:text-red-600">
										<span className="sr-only">
											Remove item
										</span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="currentColor"
											className="h-4 w-4"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
											/>
										</svg>
									</button>
								</div>
							</li>
							<li className="flex items-center gap-4">
								<img
									src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
									alt=""
									className="h-16 w-16 rounded object-cover"
								/>
								<div>
									<h3 className="text-sm text-gray-900">
										Basic Tee 6-Pack
									</h3>
									<dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
										<div>
											<dt className="inline">Size:</dt>
											<dd className="inline">XXS</dd>
										</div>
										<div>
											<dt className="inline">Color:</dt>
											<dd className="inline">White</dd>
										</div>
									</dl>
								</div>
								<div className="flex flex-1 items-center justify-end gap-2">
									<form>
										<label
											htmlFor="Line3Qty"
											className="sr-only"
										>
											{"{"}" "{"}"}
											Quantity{"{"}" "{"}"}
										</label>
										<input
											type="number"
											min={1}
											defaultValue={1}
											id="Line3Qty"
											className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
										/>
									</form>
									<button className="text-gray-600 transition hover:text-red-600">
										<span className="sr-only">
											Remove item
										</span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="currentColor"
											className="h-4 w-4"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
											/>
										</svg>
									</button>
								</div>
							</li>
						</ul>
						<div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
							<div className="w-screen max-w-lg space-y-4">
								<dl className="space-y-0.5 text-sm text-gray-700">
									<div className="flex justify-between">
										<dt>Subtotal</dt>
										{amount ? (
											<dd>
												₹
												{Math.round(
													parseFloat(amount) * 100
												) / 100}
											</dd>
										) : (
											<dd>...</dd>
										)}
									</div>
									<div className="flex justify-between">
										<dt>Service Fee (2%)</dt>
										<dd>
											₹
											{Math.round(
												parseFloat(
													sessionData?.totalAmount -
														amount
												) * 100
											) / 100}
										</dd>
									</div>
									<div className="flex justify-between !text-base font-medium">
										<dt>Total Amount</dt>₹
										{Math.round(
											parseFloat(
												sessionData?.totalAmount
											) * 100
										) / 100}
									</div>
								</dl>
								<div className="flex justify-end">
									<span className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth="1.5"
											stroke="currentColor"
											className="-ms-1 me-1.5 h-4 w-4"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
											/>
										</svg>
										<p className="whitespace-nowrap text-xs">
											2 Discounts Applied
										</p>
									</span>
								</div>
								<div className="flex  gap-3 justify-end">
									<Link
										to="/demo"
										className="block rounded border-2 text-gray-700 uppercase font-medium border-gray-700 px-5 py-3 text-sm bg-gray-100 transition hover:bg-gray-700 hover:text-white "
									>
										Go Back
									</Link>
									<button
										onClick={openPopup}
										className="bg-[#f25a55] rounded block  font-medium uppercase px-5 py-3 text-center  text-white  hover:bg-[#333333] transition-all duration-300 ease-in"
									>
										Checkout
									</button>
								</div>
								<PaymentPopup
									isOpen={isPopupOpen}
									onClose={closePopup}
								>
									<div className="">
										<div className="flex justify-between gap-12">
											<div className="flex flex-col justify-center">
												<h2 className="text-2xl font-bold  uppercase tracking-tight">
													complete checkout
												</h2>
											</div>
											<div
												className=" text-right hover:bg-gray-100 rounded-full p-1.5"
												onClick={closePopup}
											>
												<div className="flex flex-col justify-center">
													<CloseIcon />
												</div>
											</div>
										</div>
										<form
											noValidate=""
											action=""
											className="space-y-4 mt-8 mb-4"
										>
											<div className="">
												<div>
													<label
														htmlFor="walletId"
														className="block mb-1 text-sm text-blue-600 "
													>
														Enter Wallet ID
													</label>
													<input
														type="text"
														name="walletId"
														id="wallletId"
														value={walletId}
														onChange={(e) =>
															setWalletId(
																e.target.value
															)
														}
														placeholder="Enter your wallet id..."
														className="w-full px-3 py-2 border border-blue-600 text-[#f25a55] focus:ring-[#f25a55] focus:border-[#f25a55] transition-all duration-100 ease-in-out rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
													/>
												</div>
											</div>
											<div className="">
												<div>
													<label
														htmlFor="pin"
														className="block mb-1 text-sm text-blue-600 "
													>
														Enter your pin
													</label>
													<input
														type="text"
														name="pin"
														id="pin"
														value={pin}
														onChange={(e) =>
															setPin(
																Number(e.target.value)
															)
														}
														placeholder="Enter your pin..."
														className="w-full px-3 py-2 border border-blue-600 text-[#f25a55] focus:ring-[#f25a55] focus:border-[#f25a55] transition-all duration-100 ease-in-out rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
													/>
												</div>
											</div>
											<div className="">
												<div>
													<button
														type="button"
														className={`w-full px-8 py-3 font-bold rounded-md text-white uppercase bg-[#f25a55] hover:bg-orange-600 transition-all duration-300 ease-in-out ${
															loading
																? `cursor-progress hover:bg-orange-300 bg-orange-300`
																: ``
														} `}
														onClick={clickHandler}
													>
														{loading
															? "Processing..."
															: "Checkout"}
													</button>
												</div>
											</div>
										</form>
									</div>
								</PaymentPopup>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ToastContainer />
		</section>
	);
}
export default PaymentDemoPage;
