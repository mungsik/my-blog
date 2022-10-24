import Container from "./../components/Container";
import AboutProfile from "./../components/AboutProfile";
import Title from "components/Title";

const AboutPage = () => {
  return (
    <Container>
      <Title title="About" des="Let me introduce myself." />
      <AboutProfile />
    </Container>
  );
};

export default AboutPage;
