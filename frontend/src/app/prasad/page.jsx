const { default: FileForm } = require("@/components/FileForm/FileForm")
const { default: HeroSection } = require("@/components/HeroSection/HeroSection")
import Navbar from '@/components/Navbar/Navbar';
import backgroundImage from './wallpaper.jpg';
import Info from '@/components/InfoCard/Info';

const homepage  = () =>
{
    const centeredStyles = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        opacity: 0.8,
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        justifyContent: 'center',
        
        alignItems: 'center',
        height: '100vh', // 100% of viewport height
      };

      const gridContainerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '20px',
        width: '100vw', // 100% of viewport width
        height: '100vh', // 100% of viewport height
        backgroundColor: 'lightblue',
        placeItems: 'center', // Center the child elements both horizontally and vertically
      };

      const componentStyle = {
        display: 'flex',
        flexDirection: 'row', // Arrange components horizontally
        width: '100vw', // 100% of viewport width
        height: '100vh', // 100% of viewport height
        overflowX: 'auto', // Enable horizontal scrolling if necessary
      };
    
    return(
        <div style={{ 
        backgroundImage: `url("https://res.cloudinary.com/duws62b88/image/upload/v1711448615/wallpaper_uebw3o.jpg")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh' }}>

            <div style={componentStyle}>
            <div style={centeredStyles}>
            <Navbar/>
            </div>
            </div>

            <div style={componentStyle}>
            <div style={gridContainerStyle}>
                    <Info
                    imageUrl="https://res.cloudinary.com/duws62b88/image/upload/v1685725700/cld-sample-2.jpg"
                    title="Upload PDF"
                    description="This is a description for the card."
                    />
                    <Info
                    imageUrl="https://res.cloudinary.com/duws62b88/image/upload/v1685725700/cld-sample-2.jpg"
                    title="Chat with GEMINI "
                    description="This is a description for the card."
                    />
                    <Info
                    imageUrl="https://res.cloudinary.com/duws62b88/image/upload/v1685725700/cld-sample-2.jpg"
                    title="Translate Notes"
                    description="This is a description for the card."
                    />
                    <Info
                    imageUrl="https://res.cloudinary.com/duws62b88/image/upload/v1685725700/cld-sample-2.jpg"
                    title="Collaborate"
                    description="This is a description for the card."
                    />
            </div>
            </div>

           
           
     </div>
    
    )
}

export default homepage