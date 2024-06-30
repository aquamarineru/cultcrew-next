import "@/styles/globals.scss";
import '@/styles/reset.scss';
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

function MyApp({ Component, pageProps }) {
  return (
    <div 
    id="__next">
       <Header /> 
      <Component {...pageProps} />
       <Footer /> 
    </div>
  );
}

export default MyApp;
