import React from 'react';
import './P_exhibition.css';

// 1. This one line finds EVERY .jpg in your current folder
const images = import.meta.glob('./*.jpg', { eager: true });

const P_exhibition = () => {
  // 2. We turn that "glob" into a list we can use
  const exhibitions = [
    { id: 1, name: 'when i get home', img: images['./WIGH.jpg'].default },
    { id: 2, name: 'mandela', img: images['./WIGH.jpg'].default },
    { id: 3, name: 'andrea', img: images['./WIGH.jpg'].default },
    { id: 4, name: 'brooklyn', img: images['./WIGH.jpg'].default },
    { id: 5, name: 'pootie', img: images['./WIGH.jpg'].default },
    { id: 6, name: 'josie', img: images['./WIGH.jpg'].default },
  ];

  return (
    <section className="previous-section">
      <h2 className="previous-title">PREVIOUS EXHIBITIONS</h2>
      <div className="exhib-grid">
        {exhibitions.map((exhib) => (
          <div key={exhib.id} className="exhib-card">
            <div className="exhib-img-wrapper">
              <img src={exhib.img} alt={exhib.name} className="exhib-img" />
              <div className="exhib-label">{exhib.name}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default P_exhibition;
