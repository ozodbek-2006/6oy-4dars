function Work() {
  const works = [
    {
      title: "Designing Dashboards",
      year: "2024",
      category: "Dashboard",
      image: "/home2.png",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      title: "Vibrant Portraits of 2024",
      year: "2024",
      category: "Illustration",
      image: "/home3.png",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      title: "36 Days of Malayalam type",
      year: "2024",
      category: "Typography",
      image: "/work4.png",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ];

  return (
    <main className="work">
      <h1>Work</h1>
      {works.map((work, index) => (
        <div key={index} className="work-item">
          <img src={work.image} alt={work.title} />
          <div className="work-content">
            <h2>{work.title}</h2>
            <p className="work-meta">
              <span className="year">{work.year}</span>
              <span className="category">{work.category}</span>
            </p>
            <p>{work.description}</p>
          </div>
        </div>
      ))}
    </main>
  );
}

export default Work;
