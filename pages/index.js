import Link from "next/link";

function Card({ id, title, imgUrl }) {
  return (
    <div className="card">
      <img src={imgUrl} alt={title} width={200} />
      <h3>{title}</h3>
      <Link href={`/blog/${id}`}>Leer más</Link>
    </div>
  );
}

export default function Index({ blogs }) {
  return (
    <div>
      <h1>Hola Camilo PEÑA</h1>
      <ul>
        <li><Link href="/blog">Blog</Link></li>
      </ul>
      <div>
        {blogs.map((post) => (
          <Card key={post.id} id={post.id} title={post.title} imgUrl={post.photo_url} />
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://api.slingacademy.com/v1/sample-data/blog-posts");
  const data = await res.json();
  return { props: { blogs: data.blogs } };
}