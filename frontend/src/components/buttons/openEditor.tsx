import { createRoot } from "react-dom/client";
import Code from "../main/code/code";

function OpenEditor({ type }: { type: string }) {
  return (
    <button
      className="transition-opacity delay-50 ease-linear hover:opacity-100 shadow-[0_5px_5px_0px_rgba(0,0,0,0.2)] opacity-70 rounded-xl w-24 h-12 bg-[#629584] text-[#E2F1E7] text-[26px] font-medium"
      onClick={() => {
        const newWindow = window.open("", "", "width=800, height=400");

        if (newWindow) {
          const container = newWindow.document.createElement("div");
          newWindow.document.body.appendChild(container);

          const root = createRoot(container);
          root.render(<Code type={type} />);
        }
      }}
    >
      {type}
    </button>
  );
}

export default OpenEditor;
