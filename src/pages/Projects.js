import ProjectImage from "../components/ProjectImage";

const Projects = () => {
  const tabs = ["All", "Web", "Mobile"];
  const projects = [
    {
      id: 1,
      name: "Artsy",
      image: "/projects/artsy.gif",
      technologies: ["Next JS", "Context API", "Tailwind CSS"],
      liveUrl: "https://artsy-six.vercel.app/",
      githubLink: "https://github.com/ChiamakaUI/artsy",
    },
    {
      id: 2,
      name: "EazyFoods",
      image: "/projects/food-app.gif",
      technologies: ["Firebase", "React", "Context API", "Tailwind"],
      liveUrl: "https://eazyfoods.netlify.app/",
      githubLink: "https://github.com/ChiamakaUI/food-app",
    },
    {
      id: 3,
      name: "Airbnb Clone",
      image: "/projects/airbnb.gif",
      technologies: ["Firebase", "React", "Context API"],
      liveUrl: "https://darling-halva-363049.netlify.app/",
      githubLink: "https://github.com/ChiamakaUI/airbnb-clone",
    },
    {
      id: 4,
      name: "Netflix Clone",
      image: "/projects/netflix.gif",
      technologies: [
        "Firebase",
        "React",
        "Context API",
        "React Query",
        "Tailwind",
      ],
      liveUrl: "https://sprightly-fenglisu-d02718.netlify.app/",
      githubLink: "https://github.com/ChiamakaUI/netflix",
    },
    {
      id: 5,
      name: "Movie App",
      image: "/projects/movie-app.gif",
      technologies: [
        "Firebase",
        "React",
        "Context API",
        "React Query",
        "X-styled",
      ],
      liveUrl: "https://velvety-pastelito-aea46f.netlify.app/",
      githubLink: "https://github.com/ChiamakaUI/movie-app",
    },
  ];
  return (
    <div className="w-full md:w-[88%] lg:w-[80%] max-w-screen-2xl mx-auto mt-10">
      <p className="dark:text-white text-3xl font-gabriela text-center font-semibold">
        Projects.
      </p>
      <div className="w-[80%] lg:w-[35%] flex flex-row items-center justify-between mx-auto mt-8 border-b p-6 dark:border-b-grey-800">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className="font-gabriela font-semibold text-base px-4 py-2 rounded-lg bg-gray-800 text-white shadow-lg"
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="flex flex-row w-full items-center justify-between flex-wrap p-5 lg:p-8">
        {projects.map((project) => (
          <ProjectImage key={project?.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
