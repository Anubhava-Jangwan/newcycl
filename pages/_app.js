import "@/styles/globals.css";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-5EY14HT9CB"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-5EY14HT9CB');
        `}
      </Script>

      <Script src="https://apis.google.com/js/api.js"></Script>
      <Script>{`gapi.load('client', {'apiKey': 'AIzaSyAMOnbYTCn3u3MpDPvshY0wtFUJsg_8r0k', 'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4']});`}</Script>

      <div
        data-tf-sidetab="OMfYjXTE"
        data-tf-opacity="100"
        data-tf-iframe-props="title=Contact Form (copy)"
        data-tf-transitive-search-params
        data-tf-button-color="#5433FF"
        data-tf-button-text="Reach out!"
        data-tf-medium="snippet"
      ></div>
      <Script src="//embed.typeform.com/next/embed.js"></Script>

      <Component {...pageProps} />
    </>
  );
}
