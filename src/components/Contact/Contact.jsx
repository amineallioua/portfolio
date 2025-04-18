import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:amineallioua123@email.com">Email</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/authwall?trk=gf&trkInfo=AQGeCavgFqU5YgAAAZZISiWIO9ur8vvkxFDt_yq1kyEW9vEo_ZXEZnIXlO7W4c_sqI-f7BlhU5F0F8vOakR1x0HDU8XJPnWIGQW8JRgcyOHlVfMRZ25pPZB4uIB4oRLRDkO0H-E=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Famineall%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app">linkedin</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/amineallioua">Github</a>
        </li>
      </ul>
    </footer>
  );
};
