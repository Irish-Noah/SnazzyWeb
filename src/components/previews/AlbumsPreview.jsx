import { useNavigate } from "react-router-dom";
import styles from "./Preview.module.css";

export default function AlbumsPreview() {
  const navigate = useNavigate();

  return (
    <section
      className={styles.preview}
      onClick={() => navigate("/SnazzyWeb/albums")}
    >
      <h2>Album Tracker 2025</h2>
      <p>
        A daily album listening challenge with dynamic color themes pulled
        directly from the album art.
      </p>

      <p><em>Click to explore →</em></p>
    </section>
  );
}
