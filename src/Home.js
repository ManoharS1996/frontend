import React from 'react';

function Home() {
  return (
    <div style={styles.container}>
      <h1>Welcome to the Home Page</h1>
      <img src="https://via.placeholder.com/300" alt="Home" style={styles.image} />
      <p>This is the homepage where you can see a welcome message and an image.</p>
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

export default Home;
