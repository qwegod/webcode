import Code from "./code/code";
import Preview from "./preview/preview";

function Main() {
  return (
    <div className="max-[800px]:flex-col mb-10 p-12 flex items-center shadow-[0_5px_5px_0px_rgba(0,0,0,0.2)] h-[90vh] bg-white bg-opacity-50 rounded-3xl">
      <Code />
      <Preview />
    </div>
  );
}

export default Main;
