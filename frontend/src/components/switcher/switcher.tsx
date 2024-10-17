import { SwitcherProps } from "../../types/SwitcherProps";

function Switcher({ firstImage, secondeImage }: SwitcherProps) {
  return (
    <label className=" relative flex items-center w-32 h-12  rounded-full shadow-[0_5px_5px_0px_rgba(0,0,0,0.2)]">
      <input type="checkbox" className="hidden peer" />
      <span className="absolute inset-0 cursor-pointer bg-[#629584] rounded-full" />
      <div className="w-screen z-10 flex justify-between px-6">
        <img src={firstImage} className="w-[32px] h-[20px]" alt="icon" />
        <img src={secondeImage} className="w-[32px] h-[20px]" alt="icon" />
      </div>
      <span className="absolute shadow-lg m-3 w-14 h-9 bg-[#E2F1E7] bg-opacity-20 rounded-full transition duration-300 transform peer-checked:translate-x-[48px]" />
    </label>
  );
}

export default Switcher;
