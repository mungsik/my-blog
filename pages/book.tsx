import { useState } from "react";
import { allBooks } from "contentlayer/generated";
import Container from "../components/Container";
import Title from "components/Title";
import Search from "./../components/Search";
import BookCards from "./../components/BookCards";

function Book({ posts }) {
  const [searchValue, setSearchValue] = useState("");
  const filteredBookPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <Container>
      <Title title="Book" des={`읽은 책을 기록합니다.`} />
      <Search changeHandler={(e) => setSearchValue(e.target.value)} />
      {filteredBookPosts.map((post, index) => (
        <BookCards post={post} key={index} slug={post.slug} />
      ))}
    </Container>
  );
}

export const getStaticProps = async () => {
  const posts = allBooks.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );
  return {
    props: {
      posts,
    },
  };
};

export default Book;
