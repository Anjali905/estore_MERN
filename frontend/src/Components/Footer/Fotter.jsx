import React from "react";
import styles from "./footer.module.scss";
const Fotter = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerLogo}>
        <img src="./Assets/logo_big.png" alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className={styles.footerLinks}>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className={styles.socialIcons}>
        <div className={styles.footerIconsContainer}>
          <img src="./Assets/instagram_icon.png" />
        </div>
        <div className={styles.footerIconsContainer}>
          <img src="./Assets/pintester_icon.png" />
        </div>
        <div className={styles.footerIconsContainer}>
          <img src="./Assets/whatsapp_icon.png" />
        </div>
      </div>
      <div className={styles.copyRight}>
      <hr />
      <p>Copyright @2023 - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Fotter;
