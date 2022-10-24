import Container from "./../components/Container";
import { allBlogs } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import RecentPosts from "../components/RecentPosts";

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container>
      {posts.length >= 5 ? (
        <RecentPosts posts={posts.slice(0, 5)} />
      ) : (
        <RecentPosts posts={posts} />
      )}
    </Container>
  );
};

export const getStaticProps = async () => {
  const posts = allBlogs.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );
  return {
    props: {
      posts,
    },
  };
};

export default Home;
