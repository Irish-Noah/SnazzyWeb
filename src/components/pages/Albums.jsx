import React, { useEffect, useRef, useState } from 'react';
import ColorThief from 'colorthief';
import styles from './Albums.module.css';
import albums from '/src/assets/albums.json'

function isDark(rgbArray) {
  // Luminance formula
  const [r, g, b] = rgbArray;
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
  return luminance < 150;
}

function Albums() {
  const [bgColor, setBgColor] = useState('#ffffff');
  const [activeAlbumIndex, setActiveAlbumIndex] = useState(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            const index = imageRefs.current.indexOf(img); 
            setActiveAlbumIndex(index); 
            const colorThief = new ColorThief();

            if (img.complete) {
              const color = colorThief.getColor(img);
              const isBgDark = isDark(color);
              document.documentElement.style.setProperty('--textColor', isBgDark ? '#f1f1f1' : '#111');
              setBgColor(`rgb(${color.join(',')})`);
            } else {
              img.addEventListener('load', () => {
                const color = colorThief.getColor(img);
                setBgColor(`rgb(${color.join(',')})`);
              });
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    imageRefs.current.forEach((img) => {
      if (img) observer.observe(img);
    });

    return () => {
      imageRefs.current.forEach((img) => {
        if (img) observer.unobserve(img);
      });
    };
  }, []);

  return (
    <div className={styles.backgroundWrapper} style={{ backgroundColor: bgColor }}>
      <div className={styles.page}>
      <p className={styles.description}>
        Last year I was in a massive music funk. Spotify seemed to be shuffling the same songs I've been listening to for years and I wanted to expand my horizons. 
        I decided that every day in 2025 that I would listen to a new album! These are the albums I have listened to so far. 
        Spotify might shuffle the same 15 songs, but at least they're new songs to me :)
      </p>

      <ul className={styles.albumList}>
        {albums.map((album, i) => (
          <li key={i} className={styles.albumItem}>
            <img
              ref={(el) => (imageRefs.current[i] = el)}
              crossOrigin="anonymous"
              src={album.cover}
              alt={`${album.title} cover`}
              className={`${styles.albumCover} ${i === activeAlbumIndex ? styles.activeAlbum : ''}`}
            />
            <div className={styles.albumDetails}>
              <div className={styles.albumTextBlock}>
                <div className={styles.albumTitle}>
                  <strong>{album.title}</strong> by {album.artist} ({album.year})
                </div>
                <p className={styles.favoriteSong}>
                  Favorite song: {album.song}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default Albums;
