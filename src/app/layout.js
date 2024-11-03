import "./globals.css";
import SmoothScrolling from "./components/SmoothScrolling";
import Footer from "./components/Footer/Index";
import Header from "./components/Header/Index";
import { Montserrat } from "next/font/google";

export const metadata = {
  title: "Festival: Trilogia",
  description: "Seni cetak yang bergerak",
};

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SmoothScrolling>
        <body className={montserrat.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </SmoothScrolling>
    </html>
  );
}
