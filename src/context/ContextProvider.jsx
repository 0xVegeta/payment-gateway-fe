import { useContext } from "react";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Context = createContext();

const ContextProvider = ({ children }) => {
	const [organisation, setOrganisation] = useState();
	const [sessionData, setSessionData] = useState();
	const [amount, setAmount] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		const orgInfo = JSON.parse(localStorage.getItem("orgInfo"));
		setOrganisation(orgInfo);

		const session = JSON.parse(localStorage.getItem("session"));
		setSessionData(session);

		if (!orgInfo) {
			navigate("/signin");
		}
	}, [navigate]);
	return (
		<Context.Provider
			value={{
				organisation,
				sessionData,
				setOrganisation,
				setSessionData,
				amount,
				setAmount,
			}}
		>
			{children}
		</Context.Provider>
	);
};

export const OrgState = () => {
	return useContext(Context);
};
export default ContextProvider;
