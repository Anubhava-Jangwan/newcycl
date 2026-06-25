import { lazy, Suspense } from "react";

export default function dynamic(importer) {
  const Component = lazy(importer);

  return function DynamicComponent(props) {
    return (
      <Suspense fallback={null}>
        <Component {...props} />
      </Suspense>
    );
  };
}
