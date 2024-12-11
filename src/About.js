import React from 'react';

function About() {
  return (
    <div style={styles.container}>
      <h1>About Us</h1>
      <img src="https://via.placeholder.com/300/09b1d7/ffffff" alt="About" style={styles.image} />
      <p>This is the About page where we describe more about our website.</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
  image: {
    width: '300px',
    height: 'auto',
  },
};

export default About;
