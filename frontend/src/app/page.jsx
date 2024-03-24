import Navbar from "@/components/Navbar/Navbar";
import FileForm from "@/components/FileForm/FileForm";
import HeroSection from "@/components/HeroSection/HeroSection";
import WavyBackground from "@/components/WavyBackground/WavyBackground";

const Home = () => {
  return (
    <div className="bg-black w-full">
      
      <div className="w-full flex flex-col items-center justify-center py-8 bg-black-100">
        <Navbar />
      </div>

      <div>
      <div className="w-full flex flex-col items-center justify-center py-8 bg-black-100">
      <FileForm />
      </div>

      
       {/* <HeroSection />  */}
       <WavyBackground />
</div>

    </div>
  );
};

export default Home;
