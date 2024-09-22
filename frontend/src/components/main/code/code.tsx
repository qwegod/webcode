import CodeMirror from "@uiw/react-codemirror";
import imagePaths from "../../../constants/iconPaths";
import { autocompletion } from "@codemirror/autocomplete";
import { quietlight } from "@uiw/codemirror-theme-quietlight";
import { css } from "@codemirror/lang-css";
import { html } from "@codemirror/lang-html";
import { useCallback } from "react";
import { setHtmlText, useHtmlText } from "../code/htmlText";

function Code() {
  const onChange = useCallback(async (val: string) => {
    setHtmlText(val);
  }, []);

  return (
    <div>
      <div className="flex justify-between w-[34vw] pb-5">
        <div className="flex justify-around shadow-[0_5px_5px_0px_rgba(0,0,0,0.2)] w-[301px] text-center self-center py-2 bg-white rounded-3xl">
          <span className="text-[#E2FF2F] text-opacity-50 text-[16px] font-semibold">
            Javascript
          </span>
          <span>·</span>
          <span className="text-[#E2FF2F] text-opacity-50 text-[16px] font-semibold">
            EC2023
          </span>
          <span>·</span>
          <span className="text-[#00ABD0] text-opacity-50 text-[16px] font-semibold">
            CSS
          </span>
        </div>
        <div className="shadow-[0_5px_5px_0px_rgba(0,0,0,0.2)] w-[122px] flex justify-around py-2 bg-white rounded-3xl">
          <img src={imagePaths.copy} alt="icon" />
          <img src={imagePaths.clear} alt="icon" />
        </div>
      </div>
      <CodeMirror
        height="75vh"
        width="33vw"
        value={useHtmlText()}
        className="mr-10 shadow-[0_5px_5px_0px_rgba(0,0,0,0.2)] border-[9px] border-[#F5F5F5] rounded-xl"
        extensions={[html(), css(), autocompletion()]}
        theme={quietlight}
        onChange={onChange}
      />
    </div>
  );
}

export default Code;
