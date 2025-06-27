import styles from "./page.module.css";
export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>My Portfolio</h1>
      <nav>
        <ul className={styles.navList}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#profile">Profile</a>
          </li>
          <li>
            <a href="#strengths">Strengths</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
