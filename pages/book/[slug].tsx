import { allBooks } from "contentlayer/generated";
import BookLayout from "./../../layouts/book";

const BookPage = ({ post }) => {
  return <BookLayout post={post} />;
};

export const getStaticPaths = async () => {
  return {
    paths: allBooks.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = allBooks.find((p) => p.slug === params?.slug);

  return {
    props: {
      post,
    },
  };
};

export default BookPage;
