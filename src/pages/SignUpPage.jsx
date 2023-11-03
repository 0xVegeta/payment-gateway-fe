import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUpPage() {
  const [organisationName, setOrganisationName] = useState("");
  const [category, setCategory] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const org = JSON.parse(localStorage.getItem("orgInfo"));
    if (org) navigate("/");
  }, [navigate]);

  const submitHandler = async () => {
    setLoading(true);
    if (
      !organisationName ||
      !category ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      toast.warn("Please fill all the fields");
      setLoading(false);
      return;
    }

    if (confirmPassword !== password) {
      toast.warn("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/v1/org/register",
        { organization: organisationName, email, password, category },
        config
      );

      toast.success("Registration Successful");
      localStorage.setItem("orgInfo", JSON.stringify(data));
      setLoading(false);
      navigate("/");
    } catch (error) {
      toast.error("Error Occured!");
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen mx-auto w-screen items-center justify-center bg-[#e0dbc3] text-[#f25a55] ">
      <div className="flex flex-col max-w-lg p-6 rounded-md sm:p-10  bg-[#31325a] w-[30rem]">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold uppercase">Sign up</h1>
          <p className="text-sm ">Register your Organisation to proceed</p>
        </div>
        <form noValidate="" action="" className="space-y-12">
          <div className="space-y-4">
            <div>
              <label htmlFor="organisationName" className="block mb-2 text-sm">
                Organisation Name
              </label>
              <input
                type="text"
                name="organisationName"
                id="orgName"
                value={organisationName}
                onChange={(e) => setOrganisationName(e.target.value)}
                placeholder="Leroy Jenkins LLC"
                className="w-full px-3 py-2 border focus:ring-[#f25a55] focus:border-[#f25a55] transition-all duration-100 ease-in-out rounded-md "
              />
            </div>
            <div>
              <label htmlFor="category" className="block mb-2 text-sm">
                Category
              </label>
              <input
                type="text"
                name="category"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Law Firm"
                className="w-full px-3 py-2 border focus:ring-[#f25a55] focus:border-[#f25a55] transition-all duration-100 ease-in-out rounded-md "
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border focus:ring-[#f25a55] focus:border-[#f25a55] transition-all duration-100 ease-in-out rounded-md "
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="*****"
                className="w-full px-3 py-2 border focus:ring-[#f25a55] focus:border-[#f25a55] transition-all duration-100 ease-in-out rounded-md "
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="confPassword" className="text-sm">
                  Confirm Password
                </label>
              </div>
              <input
                type="password"
                name="confPassword"
                id="confPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="*****"
                className="w-full px-3 py-2 border focus:ring-[#f25a55] focus:border-[#f25a55] transition-all duration-100 ease-in-out rounded-md "
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="button"
                className={`w-full px-8 py-3 font-semibold rounded-md text-[#31325a] bg-[#f25a55] hover:bg-orange-600 transition-all duration-300 ease-in-out ${
                  loading
                    ? `cursor-progress hover:bg-orange-300 bg-orange-300`
                    : ``
                } `}
                disabled={loading}
                onClick={submitHandler}
              >
                {loading ? "Processing..." : "Sign up"}
              </button>
            </div>
            <p className="px-6 text-sm text-center ">
              Already have an Account? &nbsp;
              <Link
                to="/signin"
                rel="noopener noreferrer"
                href="#"
                className="hover:underline "
              >
                Sign in
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SignUpPage;
