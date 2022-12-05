import React from "react";
import arrowBack from "../../../data/icon/arrowBack.svg";
import menu from "../../../data/icon/menu.svg";
import styles from "./headMenu.module.sass";

const HeadMenu = () => {
  return (
    <div className={styles.header}>
      <span>
        <img src={menu} alt="" />
      </span>
      <span>
        <img src={arrowBack} alt="" />
      </span>
      <span>Просмотр</span>
      <span>Управление</span>
    </div>
  );
};

export default HeadMenu;
