import Head from "next/head";
import ArticleList from "../components/ArticleList";

//custom titles / meta tags ^^

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>Jays Dev News</title>
        <meta name="keywords" content="web development, programming" />
      </Head>
      <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};

//fetching data
// npm run dev

//cd next-crash-course

// cd react-crash-course
