
import { Inter } from "next/font/google";
import data from "../../../data/data";
const inter = Inter({ subsets: ["latin"] });
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ComingSoonContent from "../ComingSoonContent/ComingSoonContent";

export default function StandardComingSoon() {
  const {
    sitename,
    sitetagline,
    description,
    copyrightText,
    sitelogo,
    socialIconsHeading,
    title,
  } = data;


  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-5 lg:p-12">
        <Header />
        <ComingSoonContent />
        <Footer />
      </main>
    </>
  );
}
