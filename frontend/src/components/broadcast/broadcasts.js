import React from "react";
import styles from "./broadcast.module.css";
import Carousel from "./Carousel/Carousel";
import { Link } from "react-router-dom";
const Broadcasts = () => {
  return (
    <div>
      <div>
        <Carousel head="Recent Broadcasts" />
      </div>
      <div>
        <Carousel head="Previous Broadcasts" />
      </div>
      <Link to="/all-broadcasts">
        <div className={styles.submitbtn}>
          <button className={styles.myb}>All Broadcasts</button>
        </div>
      </Link>
    </div>
  );
};

export default Broadcasts;
