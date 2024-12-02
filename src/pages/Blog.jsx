export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "UI Interactions of the week",
      date: "12 Feb 2019",
      tags: ["Express", "Handlebars"],
      excerpt:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: 2,
      title: "UI Interactions of the week",
      date: "12 Feb 2019",
      tags: ["Express", "Handlebars"],
      excerpt:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: 3,
      title: "UI Interactions of the week",
      date: "12 Feb 2019",
      tags: ["Express", "Handlebars"],
      excerpt:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: 4,
      title: "UI Interactions of the week",
      date: "12 Feb 2019",
      tags: ["Express", "Handlebars"],
      excerpt:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ];

  return (
    <div className="blog">
      <h1>Blog</h1>
      <div className="blog-posts">
        {posts.map((post) => (
          <article key={post.id} className="blog-post">
            <h2>{post.title}</h2>
            <p className="post-meta">
              <span className="date">{post.date}</span>
              <span className="tags">{post.tags.join(", ")}</span>
            </p>
            <p>{post.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
