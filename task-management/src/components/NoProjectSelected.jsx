import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";
export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjectImage}
        alt=""
        className="w-16 h-16 object-contain mx-auto"
      />
      <h1 className="text-3xl font-bold text-stone-500 my-4">
        No Project Selected
      </h1>
      <p className="text-stone-400 mb-4">
        Select a project or get started with new one{" "}
      </p>
      <p mt-8>
        <Button onClick={onStartAddProject}>Create new project</Button>
      </p>
    </div>
  );
}
