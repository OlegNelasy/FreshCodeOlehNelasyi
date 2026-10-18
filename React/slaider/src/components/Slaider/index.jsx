import { useState, useRef, useEffect } from "react";
import style from "./Slaider.module.scss";

export default function Slaider({ data, delay }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { title, imageUrl, description } = data[currentIndex];

  const thumbnailRefs = useRef([]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1,
    );
  };

  useEffect(() => {
    const timerId = setInterval(nextSlide, delay);

    return () => clearInterval(timerId);
  }, [currentIndex]);

  useEffect(() => {
    if (thumbnailRefs.current[currentIndex]) {
      thumbnailRefs.current[currentIndex].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [currentIndex]);

  return (
    <section className={style.slaiderContainer}>
      <figure className={style.figure}>
        <img className={style.image} src={imageUrl} alt={title} />
        <figcaption className={style.caption}>
          <h2 className={style.title}>{title}</h2>
          <p className={style.description}>{description}</p>
        </figcaption>
      </figure>

      <div className={style.controls}>
        <button className={style.navButton} onClick={prevSlide}>
          {"<"}
        </button>

        <div className={style.thumbnailStrip}>
          {data.map((planet, index) => (
            <img
              key={planet.id}
              ref={(el) => (thumbnailRefs.current[index] = el)}
              src={planet.imageUrl}
              alt={planet.title}
              className={`${style.thumbnail} ${index === currentIndex ? style.activeThumbnail : ""}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        <button className={style.navButton} onClick={nextSlide}>
          {">"}
        </button>
      </div>
    </section>
  );
}
