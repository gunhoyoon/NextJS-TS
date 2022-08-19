import "../styles/globals.css";
import type { AppProps } from "next/app";
import Top from "../src/components/Top/Top";
import Footer from "../src/components/Footer/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Top />
      <Component {...pageProps} />
      {/*  */}
      <Footer />
    </>
  );
}

export default MyApp;

//react
// index render 함수내장
// //
// root 로 앱을감쌈
// appjs 실행 //

// next 에선 app이 짱짱맨임

// pageProps는 페이지가 바뀌기 전에는 index 이후에 바뀐다면 바뀐페이지
//그래서 앱에서 그려줌
