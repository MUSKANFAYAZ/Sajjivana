import React from 'react';
import styles from '../styles/HeroBanner.module.css';


const HeroBanner = () => {
  return (
    <div className={styles.banner} style={{ backgroundImage: "url('/teddy-banner.jpg')" }}>

      <div className={styles.overlay}>
        <h1>Pick The Best Toy</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.</p>
        <button>READ MORE</button>
      </div>
    </div>
  );
};

export default HeroBanner;
