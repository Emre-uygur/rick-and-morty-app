import React from 'react';
import styles from './Cards.module.scss';

const Cards = ({ results, setSelectedCharacter }) => {
  let display;

  if (results) {
    display = results.map((x) => {
      let { id, name, image, location, status } = x;

      return (
        <div
          key={id}
          className="col-4 mb-4 position-relative"
          onClick={() => setSelectedCharacter(x)} // Tıklama özelliği
          style={{ cursor: "pointer" }}
        >
          <div className={`${styles.cards} shadow-sm`}>
            <img src={image} alt={name} className={`${styles.img} img-fluid`} />
            {(() => {
              if (status === "Dead") {
                return (
                  <div className={`${styles.badge} position-absolute badge bg-danger`}>
                    {status}
                  </div>
                );
              } else if (status === "Alive") {
                return (
                  <div className={`${styles.badge} position-absolute badge bg-success`}>
                    {status}
                  </div>
                );
              } else {
                return (
                  <div className={`${styles.badge} position-absolute badge bg-secondary`}>
                    {status}
                  </div>
                );
              }
            })()}
            <div style={{ padding: "10px" }} className="content">
              <div className="fs-4 fw-bold mb-2">{name}</div>
              <div>
                <div className="fs-6 text-muted">Last location</div>
                <div className="fs-5">{location.name}</div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  } else {
    display = "No Characters Found";
  }

  return <div className="row">{display}</div>;
};


export default Cards;
