import { Skills } from "../types/skill";

const SKILLS: Skills = {
  frontend: [
    { name: "Product Discovery", imageUrl: "/skills/discovery.svg" },
    { name: "User Research", imageUrl: "/skills/user.svg" },
    { name: "Product Design", imageUrl: "/skills/product-design-line-icon-vector.svg" },
    { name: "Product Roadmap", imageUrl: "/skills/product-roadmap.svg" },
    { name: "Product Improvement", imageUrl: "/skills/improve.svg" },
    { name: "Product Growth", imageUrl: "/skills/growth.svg" },
    { name: "Market Research", imageUrl: "/skills/research.svg" },
    { name: "Agile Methodology", imageUrl: "/skills/agile.svg" },
  ],
  backend: [
    { name: "HTML", imageUrl: "/skills/html.svg" },
    { name: "CSS", imageUrl: "/skills/css.svg" },
    { name: "MongoDB", imageUrl: "/skills/mongodb.svg" },
    { name: "JavaScript", imageUrl: "/skills/javascript.svg" },
  ],
  tools: [
    { name: "Git", imageUrl: "/skills/git.svg" },
    { name: "GitHub", imageUrl: "/skills/github.svg" },
    { name: "Postman", imageUrl: "/skills/postman.svg" },
    { name: "VS Code", imageUrl: "/skills/vscode.svg" },
    { name: "Vercel", imageUrl: "/skills/vercel.svg" },
  ],
};

export default SKILLS;
