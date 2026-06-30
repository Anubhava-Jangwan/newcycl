function resolveSource(src) {
  if (typeof src === "string") {
    return src;
  }

  return src?.src || src;
}

export default function Image({
  src,
  alt = "",
  width,
  height,
  priority = false,
  loading,
  decoding = "async",
  ...props
}) {
  return (
    <img
      src={resolveSource(src)}
      alt={alt}
      width={typeof width === "number" ? width : undefined}
      height={typeof height === "number" ? height : undefined}
      loading={loading || (priority ? "eager" : "lazy")}
      decoding={decoding}
      fetchPriority={priority ? "high" : undefined}
      {...props}
    />
  );
}
