import { useState, useEffect } from "react";
let htmltext = `<body>
  <div class="text">
    Code An Image
  </div>
</body>
<style>
   body {
      font-family: Arial;
   }
   .text {
      font-weight: 800;
      font-size: 60px;
      color: #1D8F89;
  }
<style>
`;

export const setHtmlText = (value: string) => {
  htmltext = value;
};

export const useHtmlText = () => {
  const [content, setContent] = useState(htmltext);

  useEffect(() => {
    const interval = setInterval(() => {
      setContent(htmltext);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return content;
};
