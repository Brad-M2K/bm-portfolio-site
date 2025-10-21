import Background from "@/components/projects/Background";
import ProjectList from "@/components/projects/ProjectList";

export default function Projects() {
  return (
    <>
      <Background />
      <main className="relative z-10">
        <ProjectList />
      </main>
    </>
  );
}
