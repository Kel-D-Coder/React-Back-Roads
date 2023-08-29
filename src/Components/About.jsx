import Title from "./Title";
import aboutImg from '../images/about.jpeg'

export const About = () => {
    return (
      <section class="section" id="about">
        <div class="section-title">
          <Title title='About' subtitle='Us'/>
        </div>

        <div class="section-center about-center">
          <div class="about-img">
            <img
              src={aboutImg}
              class="about-photo"
              alt="awesome beach"
            />
          </div>
          <article class="about-info">
            <h3>explore the difference</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur quisquam harum nam cumque temporibus explicabo dolorum
              sapiente odio unde dolor?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur quisquam harum nam cumque temporibus explicabo dolorum
              sapiente odio unde dolor?
            </p>
            <a href="#btn" class="btn">
              read more
            </a>
          </article>
        </div>
      </section>
    );
}