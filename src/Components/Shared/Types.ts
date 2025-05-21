export enum NavButtonName {
  About = 'About',
  Skills = 'Skills',
  Projects = 'Projects',
  CV = 'CV',
  Experience = 'Experience',
  Education = 'Education',
  Contact = 'Contact',
}

export enum SocialsButtonName {
  linkedIn = 'Linked In',
  gitHub = 'GitHub',
}

export enum SkillGraph {
  spider = 'Spider',
  blocks = 'Blocks',
  overview = 'Overview',
}

export enum SkillOption {
  programming = 'Programming',
  development = 'Development',
  general = 'General',
}

export enum Tech {
  react = 'React',
  typescript = 'Typescript',
  vite = 'Vite',
  mui = 'Mui',
  reactRouter = 'React Router',
  reactRecoil = 'React Recoil',
  reactBootstrap = 'React Bootstrap',
  tailwind = 'Tailwind',
  javascript = 'Javascript',
  jest = 'Jest',
  cSharp = 'CSharp',
}

export type Project = {
  projectName: string;
  projectDescription: string;
  projectUrl: string;
  projectImageUrl: string;
  stack: Tech[];
};

export type WorkExperience = {
  company: string;
  image: string;
  imageBottomOffset: number;
  role: string;
  description: string;
};
