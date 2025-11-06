import React from "react";
import ProjectList from "./ProjectList";

const Projects = () => {
  return (
    <div className="mx-auto w-fit pt-30">
      <h1 className="text-center text-3xl md:text-4xl font-bold mb-4 glow px-30">
        Projects
      </h1>
      <p className="md:text-2xl text-md font-bold mb-8 text-center">
        ⚠️ These projects were born from intense learning sprints — expect
        creativity, chaos, and growth.
      </p>
      <ProjectList />
    </div>
  );
};

export default Projects;
