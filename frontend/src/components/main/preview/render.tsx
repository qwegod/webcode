import { useRef } from "react";
import { useDocumentText } from "../code/htmlText";

function Render() {
  const frameRef = useRef<HTMLIFrameElement | null>(null);
  const htmlContent = useDocumentText();
  const elementRef = useRef<HTMLDivElement>(null);

  return (
    <div
      id="content"
      ref={elementRef}
      className="shadow-[0_5px_5px_0px_rgba(0,0,0,0.2)] bg-white bg-opacity-50 rounded-3xl"
    >
      <iframe
        ref={frameRef}
        title="preview"
        className="w-full h-[50vh]"
        srcDoc={htmlContent}
      />
    </div>
  );
}

export default Render;
