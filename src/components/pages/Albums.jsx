import { useEffect, useState } from 'react';
import styles from './Albums.module.css';

function Albums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch('albums.json')
      .then(res => res.json())
      .then(data => setAlbums(data));
  }, []);

  
  return (
    <div className={styles.page}>
      <h1>Albums I’ve Listened to in 2025</h1>
      <p className={styles.description}>I used to be in a music rut. Listening to the same music on repeat on Spotify. I finally got tired of it sssssssssssssssssssssssssssssssssssssssssssssssss</p>
      <ul>
        {albums.map((album, i) => (
          <li key={i} className={styles.albumItem}>
            <img
              src={album.cover}
              alt={`${album.title} cover`}
              className={styles.albumCover}
            />
            <div className={styles.albumDetails}>
              <div className={styles.albumTextBlock}>
                <div className={styles.albumTitle}>
                  <strong>{album.title}</strong> by {album.artist} ({album.year})
                </div>
                <p
                    className={`${styles.favoriteSong} ${
                      i % 2 === 1 ? styles.rightAligned : ''
                    }`}
                  >
                    Favorite song: {album.song}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Albums;
