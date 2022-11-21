import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";

import styles from "./Sidebar.module.css";

import igniteCapa from "../assets/ignite-capa.jpg";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={igniteCapa} />
      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/92815712?v=4" />

        <strong>Julio Cezar</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
