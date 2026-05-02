import ourStoryImage from '../../assets/brewzoo/images/our-story.png';
import './BrewzoStory.css';
import doodleImage from '../../assets/beer.png';

export default function BrewzoStory() {
  return (
    <section className="brewzo-story" aria-label="Our story">
      <div className="brewzo-story__content">
        <div className="brewzo-story__image-panel">
          <img className="brewzo-story__image" src={ourStoryImage} alt="Brewzo cafe story" />
        </div>

        <div className="brewzo-story__panel">
          <div className="story">
          <h2 className="brewzo-story__heading">Our story</h2>

          <p className="brewzo-story__text">
            Brewzo didn&apos;t start as a business plan. It started as a feeling. A
            love for slow mornings, the comfort of a warm cup of coffee, and the
            kind of spaces where time seems to pause for a while. What began as
            small ideas over countless cups slowly turned into something more: a
            place where people could come not just for coffee, but for the moments
            around it. Today, Brewzo is that space. A cozy corner where
            conversations flow, work feels lighter, and every cup and every bite is
            made with the same care it all started with.
          </p>
          </div>
          <div className="story-doodle">
            <img src={doodleImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
