import { useEffect } from "react";

function extractText(children) {
  if (typeof children === "string") {
    return children;
  }

  if (Array.isArray(children)) {
    return children.map(extractText).join("");
  }

  return children?.props?.children ? extractText(children.props.children) : "";
}

export default function Head({ children }) {
  useEffect(() => {
    const entries = Array.isArray(children) ? children : [children];
    const title = entries.find((child) => child?.type === "title");

    if (title) {
      document.title = extractText(title.props.children);
    }
  }, [children]);

  return null;
}
