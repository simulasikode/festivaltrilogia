import "./globals.css";
import Footer from "./components/Footer/Index";
import Header from "./components/Header/Index";
import { Montserrat } from "next/font/google";
import SmoothScrolling from "./components/SmoothScrolling";

export const metadata = {
  title: "Festival: Trilogia",
  description: "Seni cetak yang bergerak",
};

const montserrat = Montserrat({ subsets: ["latin"], display: "swap" });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <SmoothScrolling>
          {" "}
          <Header />
          {children}
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
