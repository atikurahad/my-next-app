import "@/styles/globals.css";
import Footer from "./components/Footer";
import Navbar from "./Navbar";

export default function App({ Component, pageProps }) {
  return (
    <>
    <header>
      <Navbar />
    </header>
      <Component {...pageProps} />

      <footer>
        <Footer />
      </footer>
    </>
  );
}
