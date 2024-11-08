import { ButtonProps } from "../../types/buttonProps";

function Button({ text, func }: ButtonProps) {
  return (
    <button
      onClick={func}
      className="transition-opacity delay-50 ease-linear hover:opacity-100 shadow-[0_5px_5px_0px_rgba(0,0,0,0.2)] opacity-70 rounded-xl w-28 h-12 bg-[#629584] text-[#E2F1E7] text-[26px] font-medium"
    >
      {text}
    </button>
  );
}

export default Button;
