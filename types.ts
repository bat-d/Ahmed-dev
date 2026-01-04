export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  demoLink: string;
  repoLink: string;
  image: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}