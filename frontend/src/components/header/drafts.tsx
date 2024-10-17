import { useState } from "react";

function Drafts() {
  const [isModal, setModal] = useState(false);
  const [startPos, setStartPos] = useState(true);
  return (
    <div
      onClick={(e) => {
        setStartPos(false);
        isModal ? setModal(false) : setModal(true);
      }}
      className="bg-[#629584] relative cursor-pointer w-[150px] h-[40px] font-medium text-[20px] text-[#E2F1E7] rounded-xl self-center flex items-center justify-center"
    >
      Drafts
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={`${
          startPos
            ? "opacity-0"
            : isModal
            ? "animate-modalDown 0.3s ease-in-out"
            : "animate-modalUp 0.3s ease-in-out opacity-0"
        } absolute bottom-[-110px] w-[150px] h-[100px] cursor-pointer  font-medium text-[20px] text-[#656565] z-10 rounded-xl bg-[#629584] flex items-center justify-center `}
      ></div>
    </div>
  );
}

export default Drafts;
