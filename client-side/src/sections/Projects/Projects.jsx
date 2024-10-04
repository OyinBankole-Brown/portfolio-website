import styles from "./ProjectsStyles.module.css";
import taskflow from "../../assets/taskflow.png";
import shopsync from "../../assets/shopsync.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={taskflow}
          link="https://github.com/OyinBankole-Brown/To-do-Web-App"
          h3="TaskFlow"
          p="To-Do App"
        />
        <ProjectCard
          src={shopsync}
          link="https://github.com/OyinBankole-Brown/node-rest-api"
          h3="ShopSync API"
          p="Rest API for mock store"
        />
      </div>
    </section>
  );
}

export default Projects;
