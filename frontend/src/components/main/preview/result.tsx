import { useHtmlText } from "../code/htmlText";
import UploadFileButton from "../../buttons/uploadFile";
import { useRef } from "react";
import ExportFileButton from "../../buttons/exportFile";

function Result() {
  const htmlContent = useHtmlText();
  const elementRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="flex flex-col h-full w-full justify-between self-centerrounded-3x">
      <div id="content" ref={elementRef}>
        <iframe
          title="preview"
          style={{ width: "100%", height: "100%" }}
          srcDoc={htmlContent}
        />
      </div>
      <div className="flex justify-between p-4 max-[1200px]:hidden">
        <div className="w-[235px] h-[76px] flex justify-around items-center bg-[#B6B6B6] bg-opacity-20 rounded-3xl">
          <span className="font-normal text-[16px] opacity-50">W</span>
          <input
            className="text-center w-14 rounded-3xl bg-white border-[2px] border-black border-opacity-20"
            type="text"
          />
          <span className="font-normal text-[16px] opacity-50">H</span>
          <input
            className="text-center w-14 rounded-3xl bg-white border-[2px] border-black border-opacity-20"
            type="text"
          />
        </div>
        <div className="w-[278px] h-[76px] flex justify-around items-center  bg-[#B6B6B6] bg-opacity-20 rounded-3xl">
          <UploadFileButton />
          <ExportFileButton text={"Export"} htmlContent={htmlContent} />
        </div>
      </div>
    </div>
  );
}

export default Result;
