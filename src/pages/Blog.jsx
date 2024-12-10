function Blog() {
  const posts = [
    {
      title: "UI Interactions of the week",
      date: "12 Feb 2024",
      tags: "Express, Handlebars",
      content:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      title: "UI Interactions of the week",
      date: "12 Feb 2024",
      tags: "Express, Handlebars",
      content:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      title: "UI Interactions of the week",
      date: "12 Feb 2024",
      tags: "Express, Handlebars",
      content:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      title: "UI Interactions of the week",
      date: "12 Feb 2024",
      tags: "Express, Handlebars",
      content:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ];

  return (
    <main className="blog">
      <h1>Blog</h1>
      {posts.map((post, index) => (
        <article key={index} className="blog-post">
          <h2>{post.title}</h2>
          <p className="post-meta">
            {post.date} | {post.tags}
          </p>
          <p>{post.content}</p>
        </article>
      ))}
    </main>
  );
}

export default Blog;
