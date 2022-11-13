import Container from "components/Container";
import ProjectCards from "components/ProjectCard";
import Title from "components/Title";
import projects from "./../data/projects";

function ProjectsPage() {
  return (
    <Container>
      <Title title="Projects" des={`사이드프로젝트들을 기록합니다.`} />
      <ProjectCards projects={projects} />
    </Container>
  );
}

export default ProjectsPage;
