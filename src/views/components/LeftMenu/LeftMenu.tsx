import React from "react";
import styles from "./leftMenu.module.sass";

const LeftMenu = () => {
  return (
    <div className={styles.left_menu}>
      <div className={styles.left_menu_category}>
        <div className={styles.left_menu_category_name}>
          Название проекта <p>Аббревиатура</p>
        </div>
        <div className={styles.left_menu_category_contents}>
          <h3>По проекту</h3>
          <h3>Объекты</h3>
          <h3>РД</h3>
          <h3>МТО</h3>
          <h3>СМР</h3>
        </div>
      </div>
    </div>
  );
};

export default LeftMenu;
