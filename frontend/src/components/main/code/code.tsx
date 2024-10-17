import CodeMirror from "@uiw/react-codemirror";
import { autocompletion } from "@codemirror/autocomplete";
import { quietlight } from "@uiw/codemirror-theme-quietlight";
import { css } from "@codemirror/lang-css";
import { html } from "@codemirror/lang-html";
import { useCallback } from "react";
import {
  setCssContent,
  setHtmlContent,
  useCssContent,
  useHtmlContent,
} from "../code/htmlText";

function Code({ type }: { type: string }) {
  const htmlContent = useHtmlContent();
  const cssContent = useCssContent();

  const onChange = useCallback(async (val: string) => {
    type === "HTML" ? setHtmlContent(val) : setCssContent(val);
  }, []);

  return (
    <div className="flex justify-between">
      <CodeMirror
        height="100vh"
        value={`${type === "HTML" ? htmlContent : cssContent}`}
        className="mr-10 shadow-[0_5px_5px_0px_rgba(0,0,0,0.2)] border-[9px] border-[#F5F5F5] rounded-xl"
        extensions={[html(), css(), autocompletion()]}
        theme={quietlight}
        onChange={onChange}
      />
    </div>
  );
}

export default Code;
