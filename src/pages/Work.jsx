export default function Work() {
  const works = [
    {
      id: 1,
      title: "Designing Dashboards",
      year: "2020",
      category: "Dashboard",
      image: "/home2.png",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: 2,
      title: "Vibrant Portraits of 2020",
      year: "2018",
      category: "Illustration",
      image: "/home3.png",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: 3,
      title: "36 Days of Malayalam type",
      year: "2018",
      category: "Typography",
      image: "/home4.png",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: 4,
      title: "Components",
      year: "2018",
      category: "Components, Design",
      image: "/work4.png",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ];

  return (
    <div className="work">
      <h1>Work</h1>
      <div className="work-list">
        {works.map((work) => (
          <div key={work.id} className="work-item">
            <img src={work.image} alt={work.title} />
            <div className="work-info">
              <h2>{work.title}</h2>
              <p className="work-meta">
                <span className="year">{work.year}</span>
                <span className="category">{work.category}</span>
              </p>
              <p>{work.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
