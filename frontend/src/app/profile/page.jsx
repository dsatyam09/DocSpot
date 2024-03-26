
import ProfileNavbar from "@/components/Navbar/ProfileNavbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import Info from "@/components/InfoCard/Info";
import ProfileInfo from "@/components/ProfileInfo/ProfileInfo";
import ProfileData from "@/components/ProfileInfo/ProfileData";

const profile =() => {
    const gridContainerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 2fr)',
        gap: '20px',
        width: '100vw', // 100% of viewport width
        height: '100vh', // 100% of viewport height
        backgroundColor: 'darkgrey',
        padding: '30px',
        placeItems: 'start', // Center the child elements both horizontally and vertically
      };

    return (
        <div className="flex">
      <div className="flex-7 p-20 ">
        <Sidebar />
      </div>
      <div className="flex-1 p-20 py-10">
        <ProfileNavbar />
        <ProfileInfo></ProfileInfo>
        <ProfileData></ProfileData>
      </div>
    </div>
    )

}

export default profile;