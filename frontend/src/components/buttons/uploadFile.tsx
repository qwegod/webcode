import { setDocument } from "../main/code/htmlText";

function UploadFileButton() {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const fileContent = e.target?.result as string;
        setDocument(fileContent);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="relative">
      <input
        type="file"
        id="fileInput"
        onChange={handleFileChange}
        className="absolute opacity-0 w-0 h-0"
      />
      <label
        htmlFor="fileInput"
        className="transition-opacity delay-50 ease-linear hover:opacity-100 shadow-[0_5px_5px_0px_rgba(0,0,0,0.2)] opacity-70 rounded-xl w-28 h-12 bg-[#629584] text-[#E2F1E7] text-[26px] font-medium flex items-center justify-center cursor-pointer"
      >
        Import
      </label>
    </div>
  );
}

export default UploadFileButton;
