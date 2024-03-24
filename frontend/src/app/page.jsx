import Navbar from "@/components/Navbar/Navbar";
import FileForm from "@/components/FileForm/FileForm";
import HeroSection from "@/components/HeroSection/HeroSection";
import WavyBackground from "@/components/WavyBackground/WavyBackground";

const Home = () => {
  return (
    <div className="bg-black w-full">
      {/* <div className="flex item-center"> */}
      <div className="w-full flex flex-col items-center justify-center py-8 bg-black-100">
        <Navbar />
      </div>
      <div className="bg-black-100 text-white">
        Home page Home page Home page Home page Home pageHome page
      </div>
      <FileForm />
      {/* <HeroSection /> */}
      <WavyBackground />
    </div>
  );
};

export default Home;
