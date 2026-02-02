import AlbumsPreview from "../previews/AlbumsPreview";

import styles from "./Home.module.css";

export default function Home() {
  return (
    <main className={styles.home}>
      {/* Hero section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}>
          <h1>Hey, I’m Noah</h1>
          <p>Welcome to my personal site — scroll down for projects and trackers!</p>
        </div>
      </section>

      {/* Previews */}
      <section className={styles.previews}>
        
        <AlbumsPreview />
        
      </section>
    </main>
  );
}