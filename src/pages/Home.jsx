import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
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
          <button>Download Resume</button>
        </div>
        <img src="/home1.png" alt="John's profile" className="hero-image" />
      </section>

      <section className="recent-posts">
        <div className="section-header">
          <h2>Recent posts</h2>
          <Link to="/blog">View all</Link>
        </div>
        <div className="posts-grid">
          <div className="post">
            <h3>Making a design system from scratch</h3>
            <p className="post-meta">12 Feb 2024 | Design, Pattern</p>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <div className="post">
            <h3>Creating pixel perfect icons in Figma</h3>
            <p className="post-meta">12 Feb 2024 | Figma, Icon Design</p>
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
        <div className="works-list">
          <div className="work-item">
            <img src="/home2.png" alt="Designing Dashboards" />
            <div className="work-content">
              <h3>Designing Dashboards</h3>
              <p className="work-meta">
                <span className="year">2024</span>Dashboard
              </p>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
          <div className="work-item">
            <img src="/home3.png" alt="Vibrant Portraits of 2024" />
            <div className="work-content">
              <h3>Vibrant Portraits of 2024</h3>
              <p className="work-meta">
                <span className="year">2024</span>Illustration
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
            <div className="work-content">
              <h3>36 Days of Malayalam type</h3>
              <p className="work-meta">
                <span className="year">2024</span>Typography
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
    </main>
  );
}

export default Home;
