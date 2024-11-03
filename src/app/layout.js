import "./globals.css";
import SmoothScrolling from "./components/SmoothScrolling";
import Footer from "./components/Footer/Index";
import Header from "./components/Header/Index";

export const metadata = {
  title: "Festival: Trilogia",
  description: "Seni cetak yang bergerak",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SmoothScrolling>
        <body className={`antialiased`}>
          <Header />
          {children}
          <Footer />
        </body>
      </SmoothScrolling>
    </html>
  );
}
