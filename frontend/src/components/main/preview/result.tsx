import UploadFileButton from "../../buttons/uploadFile";
import ExportFileButton from "../../buttons/exportFile";
import {
  useCssContent,
  useDocumentText,
  useHtmlContent,
} from "../code/htmlText";
import Render from "./render";
import OpenEditor from "../../buttons/openEditor";
import { useState } from "react";

function Result() {
  const documentContent = useDocumentText();
  const bodyContent = useHtmlContent();
  const cssContent = useCssContent();
  const [selectedType, setSelectType] = useState("html");
  return (
    <div className="flex flex-col h-full w-full justify-between self-center rounded-3xl p-4">
      <Render />
      <div className="flex justify-between max-[1020px]:hidden">
        <div className="w-[235px] h-[76px] flex justify-around items-center bg-[#B6B6B6] bg-opacity-20 rounded-3xl">
          {/* <div className="flex flex-col text-center">
            <span className="font-bold text-[18px] opacity-50">W</span>
            <input
              className="text-center w-14 rounded-3xl bg-white border-[2px] border-black border-opacity-20"
              type="text"
            />
          </div>
          <div className="flex flex-col text-center">
            <span className="font-bold text-[18px] opacity-50">H</span>
            <input
              className="text-center w-14 rounded-3xl bg-white border-[2px] border-black border-opacity-20"
              type="text"
            />
          </div> */}
          <OpenEditor type={"HTML"} />
          <OpenEditor type={"CSS"} />
        </div>

        <div className="w-[320px] h-[76px] flex justify-around items-center  bg-[#B6B6B6] bg-opacity-20 rounded-3xl">
          <UploadFileButton />

          <select
            value={selectedType}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              setSelectType(e.target.value);
            }}
            className={`transition-opacity delay-50 ease-linear hover:opacity-100 shadow-[0_5px_5px_0px_rgba(0,0,0,0.2)] opacity-70 rounded-xl w-28 h-12 bg-[#629584] text-[#E2F1E7] text-[20px] text-center font-medium
      }`}
          >
            <option value={"html"}>HTML</option>
            <option value={"body"}>Body</option>
            <option value={"css"}>CSS</option>
            <option value={"image"}>Image</option>
          </select>
          <ExportFileButton
            value={selectedType}
            htmlContent={documentContent}
            bodyContent={bodyContent}
            cssContent={cssContent}
          />
        </div>
      </div>
    </div>
  );
}

export default Result;
