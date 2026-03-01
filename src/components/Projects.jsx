import { ExternalLink } from "lucide-react";
import github from "../assets/github.svg";
import { prisma } from "lib/prisma";

const Projects = async () => {
  const projects = await prisma.project.findMany({
    take: 3,
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <section id="projects" className="w-full">
      <div className="container mx-auto px-4">
        <header className="text-2xl font-bold text-center underline">
          Projects
        </header>
        <p className="text-gray-600 text-center py-7">
          A Showcase of my latest Works
        </p>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-xl outline duration-200 hover:outline-2 outline-gray-300 hover:outline-orange-500 transition-all bg-linear-to-r from-white to-[#f59e0b] border-[#e5e7eb]"
            >
              <div className="h-36 overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-[#1f2937]">
                  {project.title}
                </h3>
                <p className="text-sm mb-3 text-[#6b7280]">{project.desc}</p>
                <div className="flex flex-wrap gap-1 5 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-[#f3f4f6] text-[#4b5563] px-2 py-1 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a
                    href={project.repoUrl}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-[#f3f4f6] text-[#4b5563] text-sm rounded-lg hover:opacity-90 transition-colors"
                  >
                    <img src={github.src} className="h-5" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demoUrl}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-gray-800 hover:bg-linear-to-r from-[#f97316] to-[#e2d8c5] text-white hover:text-[#4b5563] text-sm rounded-lg hover:shadow-lg hover:shadow-orange-500 transition-all duration-200"
                  >
                    <ExternalLink className="h-5" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* TODO: Later can add: A Project button: refer to a new page wtih react, containing all the projects only*/}
      </div>
    </section>
  );
};

export default Projects;
