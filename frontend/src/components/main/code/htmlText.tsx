import { useState, useEffect } from "react";

let htmlContent = `<body>
  <div class="text">
    Abc..
  </div>
</body>`;

let cssContent = `<style>
   body {
      padding: 2rem;
      margin: 0;

   }
   .text {
      font-weight: 800;
      font-size: 60px;
  }
</style>`;

let document = htmlContent.concat(cssContent);

export const setHtmlContent = (value: string) => {
  htmlContent = value;
};

export const setCssContent = (value: string) => {
  cssContent = value;
};

export const setDocument = (value: string) => {
  document = value;
};

export const useHtmlContent = () => {
  const [content, setContent] = useState(htmlContent);

  useEffect(() => {
    const interval = setInterval(() => {
      setContent(htmlContent);
    }, 100);

    return () => clearInterval(interval);
  }, []);
  useDocumentText();
  return content;
};

export const useCssContent = () => {
  const [content, setContent] = useState(cssContent);

  useEffect(() => {
    const interval = setInterval(() => {
      setContent(cssContent);
    }, 100);

    return () => clearInterval(interval);
  }, []);
  useDocumentText();
  return content;
};

export const useDocumentText = () => {
  const [content, setContent] = useState(document);

  useEffect(() => {
    const interval = setInterval(() => {
      setContent(htmlContent.concat(cssContent));
    }, 100);

    return () => clearInterval(interval);
  }, []);
  return content;
};
