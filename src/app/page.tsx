import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Sponsor from "./components/Sponsor";
import WorkM from "./components/WorkM";
import YourWork from "./components/YourWork";

export default function Home() {
  return (
      <div>
          <Header/>
          <Hero/>
          <WorkM/>
          <YourWork/>
          <Sponsor/>
          <Footer/>
      </div>
  );
}
