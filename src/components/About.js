import aboutImg from '../img/about.jpeg'
import Title from './Title'

const About = () => {
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="us" />
      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            Backroads Travel Agency is all about crafting customized, raw
            adventures that take you off the beaten path and into the heart of
            natural beauty. We are passionate about creating unique and
            authentic experiences that allow you to truly immerse yourself in
            your destination. Our team of expert travel planners work closely
            with you to design a trip that matches your interests, preferences,
            and travel style, ensuring that every moment of your journey is
            tailored to your needs.
          </p>
          <p>
            We offer a wide range of adventure travel experiences that allow you
            to explore new places, cultures, and ways of life. From hiking
            through remote mountain ranges and camping under starry skies to
            kayaking through wild rivers and discovering hidden cultural gems,
            we have something for everyone. Our adventures are designed to
            challenge you, inspire you, and connect you with the world around
            you. Whether you're an experienced adventurer or a first-time
            traveler, we have the expertise and knowledge to create a journey
            that's perfect for you.
          </p>
          <a href="#" className="btn" rel="noreferrer">
            read more
          </a>
        </article>
      </div>
    </section>
  )
}
export default About
