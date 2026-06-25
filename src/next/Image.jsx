function resolveSource(src) {
  if (typeof src === "string") {
    return src;
  }

  return src?.src || src;
}

export default function Image({ src, alt = "", width, height, ...props }) {
  return (
    <img
      src={resolveSource(src)}
      alt={alt}
      width={typeof width === "number" ? width : undefined}
      height={typeof height === "number" ? height : undefined}
      {...props}
    />
  );
}
