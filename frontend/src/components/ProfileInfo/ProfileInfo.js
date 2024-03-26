import React from "react";

const ProfileInfo = () => {
  const profileContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  };

  const profileImageStyle = {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    marginBottom: "10px",
  };

  const buttonStyle = {
    backgroundColor: "#3498db",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  };

   
  return (
    <div style={profileContainerStyle}>
      {/* Profile Image */}
      <img
        src="https://media.licdn.com/dms/image/C4D03AQEo4bsvzTnLiQ/profile-displayphoto-shrink_400_400/0/1662101524731?e=1717027200&v=beta&t=QxcjEURrkfkJT5-klYT-KT7cfGJPqqnHaAlCKhcomDI"
        alt="Profile"
        style={profileImageStyle}
      />
      
      {/* Name */}
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "5px" }}>Prasad Jawale</h1>
      
      {/* University */}
      <p style={{ fontSize: "16px", color: "#666", marginBottom: "5px" }}>University: VESIT</p>
      
      {/* Number of Uploads */}
      <p style={{ fontSize: "16px", color: "#666", marginBottom: "5px" }}>Number of Uploads: 10</p>
      
      {/* Followers */}
      <p style={{ fontSize: "16px", color: "#666", marginBottom: "20px" }}>Followers: 100</p>
      
      {/* Edit Button */}
      <button style={buttonStyle}>
        Edit Profile
      </button>
    </div>
  );
};

export default ProfileInfo;
