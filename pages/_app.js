import "@/styles/globals.css";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-5EY14HT9CB"
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-5EY14HT9CB');
        `}
      </Script>

      <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r125/three.min.js"></Script>

      <Script src="https://cdn.jsdelivr.net/npm/@finsweet/3dglobes@1/OrbitControls.min.js"></Script>

      <Script src="https://cdn.jsdelivr.net/npm/@finsweet/3dglobes@1/FsGlobe.min.js"></Script>

      <Component {...pageProps} />
    </>
  );
}
