import hello from "@/public/assets/cSkills.jpg";
import tableau from "@/public/assets/tableau.jpg";
import msoffice from "@/public/assets/msoffice.jpg";
import cyberSecurity from "@/public/assets/cybersecurity.jpg";
import artificial from "@/public/assets/ai.jpg";

export const courses = [
  {
    id: 5,
    image: hello,
    course: "Hello Corporate",
    duration: "40 Hours",

    link: "/hello-corporate",
  },
  {
    id: 2,
    image: artificial,
    course: "Artificial Intelligence",
    duration: "40 Hours",

    link: "/artificial-intelligence",
  },

  {
    id: 7,
    image: tableau,
    course: "Tableau",
    duration: "40 Hours",

    link: "/tableau",
  },
  {
    id: 8,
    image: msoffice,
    course: "Business Communication",
    duration: "40 Hours",

    link: "/business-communication",
  },
  {
    id: 9,
    image: cyberSecurity,
    course: "Cyber Security",
    duration: "40 Hours",

    link: "cyber-security",
  },
];
