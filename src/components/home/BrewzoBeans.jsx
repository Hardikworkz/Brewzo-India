import beanBackground from '../../assets/brewzoo/images/bean-bg.jpeg';
import { brewzoBeans, brewzoBeansSection } from './brewzoHomeData';
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
        <p className="brewzo-beans__label">{brewzoBeansSection.label}</p>
        <h2 className="brewzo-beans__heading">{brewzoBeansSection.heading}</h2>
        <p className="brewzo-beans__description">{brewzoBeansSection.description}</p>

        <div className="brewzo-beans__cards">
          {brewzoBeans.map((bean) => (
            <article className="brewzo-beans__card" key={bean.title}>
              <div className="brewzo-beans__card-image-wrapper">
                <img
                  className="brewzo-beans__card-image"
                  src={bean.image}
                  alt={bean.alt}
                />
              </div>
              <div className="brewzo-beans__card-content">
                <div className="brewzo-beans__card-header">
                  <h3>{bean.title}</h3>
                  <span className="brewzo-beans__card-price">{bean.price}</span>
                </div>
                <p className="brewzo-beans__card-label">{bean.label}</p>
                <p className="brewzo-beans__card-copy">{bean.copy}</p>
                <span className="brewzo-beans__card-button">Buy Now</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
