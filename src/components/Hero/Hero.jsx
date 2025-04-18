import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>we are TechsLanding</h1>
        <p className={styles.description}>
        TechsLanding is a digital agency that transforms ideas into modern web, mobile, and branding solutions.
        </p>
        <a href="mailto:amineallioua123@email.com" className={styles.contactBtn}>
          Contact Us
        </a>
      </div>
      <div className="imageCont" >
      <img
        src={getImageUrl("hero/1(1).jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
