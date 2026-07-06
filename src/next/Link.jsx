export default function Link({ href, as, children, ...props }) {
  return (
    <a href={as || href} {...props}>
      {children}
    </a>
  );
}
