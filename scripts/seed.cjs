require("dotenv").config();

const { PrismaClient } = require("@prisma/client");
const { PrismaPg } = require("@prisma/adapter-pg");

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.project.createMany({
    data: [
      {
        title: "Portfolio Website",
        desc: "A Portfolio organizing achievements and projects to highlight skills",
        image: "/project2.png",
        tags: ["React", "Next.js", "Framer Motion", "JavaScript", "Tailwindcss", "Prisma", "PostgreSQL"],
		repoUrl: "https://github.com/SAM72442/my-portfolio",
		demoUrl: "https://my-portfolio-g3vxwcpnk-sam72442s-projects.vercel.app/"
      },
      {
        title: "A Professional Artist Website",
        desc: "Artist website made for booking orders and Artist Portfolio",
        image: "/project1.png",
        tags: ["HTML5", "css", "js"],
		demoUrl: "https://aetherdiaries.netlify.app/"
      },
      {
        title: "React Notes App",
        desc: "Note down important messages in your Local storage",
        image: "/project1.png",
        tags: ["React", "JSX", "css"],
		repoUrl: "https://github.com/SAM72442/more-notes",
		demoUrl: "https://sam72442.github.io/more-notes/"
      },
    ],
  });

  console.log("Seeded successfully.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });