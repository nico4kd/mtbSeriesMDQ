// import Comments from "@/components/shared/ui/Comments";
import Footer from "@/components/shared/ui/Footer";
import Header from "@/components/shared/ui/Header";
import Hero from "@/components/shared/ui/Hero";
import News from "@/components/shared/ui/News";
import Points from "@/components/shared/ui/Points";
import Sponsors from "@/components/shared/ui/Sponsors";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Points />
      <News />
      <Sponsors />
      {/* <Comments /> */}
      <Footer />
    </div>
  );
}
