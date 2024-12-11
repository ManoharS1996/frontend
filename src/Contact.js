import React from 'react';

function Contact() {
  return (
    <div style={styles.container}>
      <h1>Contact Us</h1>
      <img src="https://via.placeholder.com/300/eeb62e/ffffff" alt="Contact" style={styles.image} />
      <p>If you need to reach out, feel free to contact us through the following means.</p>
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

export default Contact;
