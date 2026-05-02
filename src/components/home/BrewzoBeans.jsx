import beanBackground from '../../assets/brewzoo/images/bean-bg.jpeg';
import { brewzoBeans } from './brewzoHomeData';
import './BrewzoBeans.css';

export default function BrewzoBeans() {
  return (
    <section
      className="brewzo-beans"
      id="beans"
      aria-label="In house beans"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(26, 16, 15, 0.26) 0%, rgba(26, 16, 15, 0.4) 44%, rgba(26, 16, 15, 0.2) 100%), url(${beanBackground})`
      }}
    >
      <div className="brewzo-beans__overlay" />

      <div className="brewzo-beans__content">
        <p className="brewzo-beans__label">IN HOUSE BEANS</p>
        <h2 className="brewzo-beans__heading">Where Great Coffee Begins</h2>
        <p className="brewzo-beans__description">
          Our beans begin with careful sourcing and end in a cup worth slowing down
          for. Freshly roasted in-house, handpicked for quality, and crafted with
          intention, each blend brings together purity, aroma, and the kind of
          flavor you remember.
        </p>

        <div className="brewzo-beans__cards">
          {brewzoBeans.map((bean) => (
            <article className="brewzo-beans__card" key={bean.title}>
              <img
                className="brewzo-beans__card-image"
                src={bean.image}
                alt={bean.alt}
              />
              <div className="brewzo-beans__card-body">
                <h3>{bean.title}</h3>
                <p className="brewzo-beans__card-label">{bean.label}</p>
                <p className="brewzo-beans__card-copy">{bean.copy}</p>
                <span className="brewzo-beans__card-button">Quick View</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
