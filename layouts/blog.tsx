import MDXPost from "../components/MDXPost";
import { useMDXComponent } from "next-contentlayer/hooks";
import Container from "../components/Container";

const BlankLink = (props: any) => {
  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

function BlogLayout({ post }) {
  const MDXComponent = useMDXComponent(post.body.code);

  return (
    <Container>
      <MDXPost title={post.title} date={post.date}>
        <MDXComponent
          components={
            {
              a: BlankLink,
            } as any
          }
        />
      </MDXPost>
    </Container>
  );
}

export default BlogLayout;
