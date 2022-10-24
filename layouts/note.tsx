import Container from "./../components/Container";
import { useMDXComponent } from "next-contentlayer/hooks";
import { NoteContainer, NoteContent } from "./note.style";
import NoteAside from "./../components/NoteAside";
import MDXPost from "./../components/MDXPost";

const NoteLayout = ({ tree, note }) => {
  const MDXComponent = useMDXComponent(note.body.code);

  return (
    <Container>
      <NoteContainer>
        <NoteAside tree={tree} />
        <NoteContent>
          <MDXPost title={note.title} date={note.date}>
            <MDXComponent />
          </MDXPost>
        </NoteContent>
      </NoteContainer>
    </Container>
  );
};
export default NoteLayout;
