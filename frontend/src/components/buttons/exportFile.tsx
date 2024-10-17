import axios from "axios";
import { ExportProps } from "../../types/exportFileProps";
import { useState } from "react";

function ExportFileButton({
  value,
  htmlContent,
  bodyContent,
  cssContent,
}: ExportProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const handleClick = async () => {
    setIsAnimating(true);
    try {
      switch (value) {
        case "html":
          {
            const url = window.URL.createObjectURL(
              new Blob([htmlContent as BlobPart])
            );

            const a = document.createElement("a");
            a.href = url;
            a.download = "index.html";
            document.body.appendChild(a);
            a.click();
            a.remove();
          }
          break;
        case "body": {
          const url = window.URL.createObjectURL(
            new Blob([bodyContent as BlobPart])
          );

          const a = document.createElement("a");
          a.href = url;
          a.download = "body.txt";
          document.body.appendChild(a);
          a.click();
          a.remove();
          break;
        }

        case "css": {
          const url = window.URL.createObjectURL(
            new Blob([cssContent as BlobPart])
          );

          const a = document.createElement("a");
          a.href = url;
          a.download = "style.css";
          document.body.appendChild(a);
          a.click();
          a.remove();
          break;
        }
        case "image":
          {
            const response = await axios.post(
              "http://localhost:4000/export/image",
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
          }
          break;
        default:
          break;
      }
    } catch (error) {
      console.error("Error exporting file:", error);
    } finally {
      setIsAnimating(false);
    }
  };

  return (
    <button onClick={handleClick}>
      <img
        className={`${
          isAnimating && "animate-bounce 1s infinite"
        } hover:opacity-100 ease-linear transition-opacity duration-300 w-6 h-6 opacity-70`}
        alt="export"
        src="/icons/export.png"
      />
    </button>
  );
}

export default ExportFileButton;
