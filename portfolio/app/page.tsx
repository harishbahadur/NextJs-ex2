// List 1 - app/page.tsx

import Image from "next/image";
import Header from "./-components/Header/page";
import About from "./-components/about/page";
import Profile from "./-components/profile/page";
import Work from "./-components/work/page";
import Skill from "./-components/skill/page";
import Strengths from "./-components/strengths/page";
import styles from "./page.module.css";

// Dummy components for Profile, Skills, Strengths, and Work

export default function HomePage() {
  return (
    <main className={styles.container}>
      {/* メインビジュアル */}
      <section className={styles.hero}>
        <Image
          src="/images/portfolio.jpg"
          alt="portfolio jpg"
          width={1200}
          height={600}
          className={styles.heroImage}
        />
      </section>
      <main className={styles.mainContent}>
        <section id="about">
          <About />
        </section>
        <section id="profile">
          <Profile />
        </section>
        <section id="strengths">
          <Strengths />
        </section>
        <section id="skills">
          <Skill />
        </section>
        <section id="work">
          <Work />
        </section>
      </main>
    </main>
  );
}
