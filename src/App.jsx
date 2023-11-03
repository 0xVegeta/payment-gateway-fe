import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContextProvider from "./context/ContextProvider";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import DemoPage from "./pages/DemoPage";
import PaymentDemoPage from "./pages/PaymentDemoPage";
import DashboardPage from "./pages/DashboardPage";

function App () {
	return (
		<>
			<Router>
				<ContextProvider>
					<Routes>
						<Route path="/signup" element={<SignUpPage />} />
						<Route path="/signin" element={<SignInPage />} />
						<Route path="/demo" element={<DemoPage />} />
						<Route path="/" element={<DashboardPage />} />
						<Route
							path="/paymentDemo"
							element={<PaymentDemoPage />}
						/>
					</Routes>
				</ContextProvider>
			</Router>
		</>
	);
}

export default App;
