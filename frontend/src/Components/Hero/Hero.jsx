import React from "react";
import styles from "./hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroLeft}>
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className={styles.handIcon}>
            <p>new</p>
            <img src="/Assets/hand_icon.png" alt="" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className={styles.latestHero}>
          <div>Latest Collections</div>
        </div>
      </div>
      <div className={styles.heroRight}>
        <img src="/Assets/hero_image.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
