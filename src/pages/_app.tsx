import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NavigationBar from "@/components/navbar";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavigationBar />
      <Component {...pageProps} />
    </>
  );
}
