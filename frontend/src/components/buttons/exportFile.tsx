import axios from "axios";
import { ExportProps } from "../../types/exportFileProps";
import { useState } from "react";

function ExportFileButton({ text, htmlContent }: ExportProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const handleClick = async () => {
    setIsAnimating(true);
    try {
      const response = await axios.post(
        "http://localhost:4000/export",
        htmlContent,
        {
          responseType: "blob",
          headers: {
            "Content-Type": "text/plain",
          },
        }
      );

      const url = window.URL.createObjectURL(
        new Blob([response.data as BlobPart])
      );

      const a = document.createElement("a");
      a.href = url;
      a.download = "image.png";
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (error) {
      console.error("Error exporting file:", error);
    } finally {
      setIsAnimating(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`transition-opacity delay-50 ease-linear hover:opacity-100 shadow-[0_5px_5px_0px_rgba(0,0,0,0.2)] opacity-70 rounded-[28px] w-28 h-12 bg-gradient-to-r from-[#35FEF2] to-[#88E367] text-black text-[26px] font-medium ${
        isAnimating ? "animate-bounce" : ""
      }`}
    >
      {text}
    </button>
  );
}

export default ExportFileButton;
