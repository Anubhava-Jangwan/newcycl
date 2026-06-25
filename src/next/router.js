export function useRouter() {
  return {
    asPath: window.location.pathname + window.location.search,
    isFallback: false,
    pathname: window.location.pathname,
    query: {},
    push: (href) => {
      window.location.href = href;
    },
  };
}
