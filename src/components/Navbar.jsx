import { Link } from "react-router-dom";
import RightArrowIcon from "../icons/RightArrowIcon";

function Navbar() {
	return (
		<div className="px-8 py-4  bg-white text-left flex justify-between ">
			<div className="text-5xl font-black font-['Oswald'] tracking-tighter uppercase text-[#333333]">
				Dashboard
			</div>
			<Link
				to="/demo"
				className="uppercase font-bold text-white flex  justify-center rounded-md py-2 gap-1.5 text-center bg-[#f25a55] hover:bg-[#333333] transition-all duration-300 ease-in w-36 "
			>
				<div className="flex flex-col justify-center">
					<div>Try it Out</div>
				</div>
				<div className="flex flex-col justify-center">
					<RightArrowIcon />
				</div>
			</Link>
		</div>
	);
}
export default Navbar;
