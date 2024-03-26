import React from 'react';

const Info = ({ imageUrl, title, description }) => {
  const infoStyle = {
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff',
    margin: '10px',
    width: '300px', // Increase the width
    height: '400px' // Increase the height
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
  };

  const contentStyle = {
    padding: '20px',
    
  };

  const titleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const descriptionStyle = {
    fontSize: '14px',
    color: '#666666',
  };

  return (
    <div style={infoStyle}>
      <img src={imageUrl} alt="Info" style={imageStyle} />
      <div style={contentStyle}>
        <h2 style={titleStyle}>{title}</h2>
        <p style={descriptionStyle}>{description}</p>
      </div>
    </div>
  );
};

export default Info;
