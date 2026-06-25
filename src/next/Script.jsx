import { useEffect } from "react";

export default function Script({ children, id, src }) {
  useEffect(() => {
    const script = document.createElement("script");

    if (id) {
      script.id = id;
    }

    if (src) {
      script.src = src;
      script.async = true;
    } else {
      script.textContent = children;
    }

    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, [children, id, src]);

  return null;
}
