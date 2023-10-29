import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContextProvider from "./context/ContextProvider";
import DashboardPage from "./pages/DashboardPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <>
      <Router>
        <ContextProvider>
          <Routes>
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/" element={<DashboardPage />} />
          </Routes>
        </ContextProvider>
      </Router>
    </>
  );
}

export default App;
