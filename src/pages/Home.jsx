import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>
            Hi, I am John,
            <br />
            Creative Technologist
          </h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <Link to="/work" className="btn">
            Check my work
          </Link>
        </div>
        <div className="hero-image">
          <img src="/home1.png" alt="John Doe" />
        </div>
      </section>

      <section className="recent-posts">
        <div className="section-header">
          <h2>Recent posts</h2>
          <Link to="/blog">View all</Link>
        </div>
        <div className="post-grid">
          <div className="post-card">
            <h3>Making a design system from scratch</h3>
            <p className="post-meta">12 Feb 2020 | Design, Pattern</p>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <div className="post-card">
            <h3>Creating pixel perfect icons in Figma</h3>
            <p className="post-meta">12 Feb 2020 | Figma, Icon Design</p>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
      </section>

      <section className="featured-works">
        <h2>Featured works</h2>
        <div className="work-list">
          <div className="work-item">
            <img src="/home2.png" alt="Designing Dashboards" />
            <div className="work-info">
              <h3>Designing Dashboards</h3>
              <p className="work-meta">
                <span className="year">2020</span>Dashboard
              </p>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
          <div className="work-item">
            <img src="/home3.png" alt="Vibrant Portraits of 2020" />
            <div className="work-info">
              <h3>Vibrant Portraits of 2020</h3>
              <p className="work-meta">
                <span className="year">2018</span>Illustration
              </p>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
          <div className="work-item">
            <img src="/home4.png" alt="36 Days of Malayalam type" />
            <div className="work-info">
              <h3>36 Days of Malayalam type</h3>
              <p className="work-meta">
                <span className="year">2018</span>Typography
              </p>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
