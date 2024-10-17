import Switcher from "../switcher/switcher";
import imagePaths from "../../constants/iconPaths";
import Button from "../buttons/button";
import Drafts from "./drafts";

function Header() {
  return (
    <div className="mb-10 shadow-[0_5px_5px_0px_rgba(0,0,0,0.2)] py-10 flex items-center justify-between max-[1200px]:justify-around h-[50px] w-full bg-[#387478] bg-opacity-50 rounded-3xl p-4">
      <div className="flex space-x-5">
        <Switcher
          firstImage={imagePaths.css}
          secondeImage={imagePaths.tailwind}
        />
        <Drafts />
        {/* <img src={imagePaths.logo} alt="logo" /> */}
      </div>
      {/* <div className="max-[950px]:hidden text-[60px] text-[#667574] font-extrabold">
        Any Code
      </div> */}
      <div className="max-[650px]:hidden flex space-x-5">
        <Button text={"Log In"} />
        <Button text={"Sign in"} />
      </div>
    </div>
  );
}

export default Header;
