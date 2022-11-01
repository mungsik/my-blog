/*
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
*/

import { useState } from "react";
import { allBlogs } from "contentlayer/generated";
import Container from "../components/Container";
import Title from "components/Title";
import PostCards from "components/PostCards";
import Search from "./../components/Search";

function Home({ posts }) {
  ``;
  const [searchValue, setSearchValue] = useState("");
  const filteredBlogPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <Container>
      <Title
        title="Blog"
        des={`공유하고 싶거나 다시 보고 싶은 기술들을 정리합니다.`}
      />
      <Search changeHandler={(e) => setSearchValue(e.target.value)} />
      {filteredBlogPosts.map((post, index) => (
        <PostCards post={post} key={index} slug={post.slug} />
      ))}
    </Container>
  );
}

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
