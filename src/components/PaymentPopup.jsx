const PaymentPopup = ({ isOpen, onClose, children }) => {
	return (
		<div
			className={`fixed inset-0 flex items-center justify-center  ${
				isOpen ? "block" : "hidden"
			}`}
		>
			<div className="fixed inset-0 bg-black opacity-50"></div>
			<div className="z-10 p-8 mx-2 my-4 bg-white rounded-md shadow-lg">
				{children}
			</div>
		</div>
	);
};

export default PaymentPopup;
