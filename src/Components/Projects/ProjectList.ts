import { Project, Tech } from 'Components/Shared/Types';

const ProjectList: Project[] = [
  {
    projectName: 'ShinyLAN GUI',
    projectDescription: 'New ShinyLAN website GUI in React + TypeScript',
    projectUrl: 'https://github.com/GiraffeKOOOO/shinylan-gui',
    projectImageUrl:
      'https://camo.githubusercontent.com/61a9063f89aa8747fa32a46b6cb9eb0d5c54f83f0ad9bd1e884855c336eed7b6/68747470733a2f2f692e696d6775722e636f6d2f797530337153752e706e67',
    stack: [Tech.react, Tech.typescript, Tech.vite, Tech.mui, Tech.reactRouter, Tech.reactRecoil],
  },
  {
    projectName: 'WestLAN Breakfast Order',
    projectDescription:
      'A simple React web app to allow for ordering breakfast at WestLAN in TypeScript',
    projectUrl: 'https://github.com/GiraffeKOOOO/westlan-breakfast-order',
    projectImageUrl:
      'https://camo.githubusercontent.com/dd141162aeab15dc2b494f176558116b3795cd1485e9f8c1b8f8712554a51a46/68747470733a2f2f692e696d6775722e636f6d2f50506434656e492e706e67',
    stack: [Tech.react, Tech.typescript, Tech.vite, Tech.mui, Tech.reactRouter],
  },
  {
    projectName: 'LAN game hub',
    projectDescription: 'A simple web app to help manage game organisation at a LAN party',
    projectUrl: 'https://github.com/GiraffeKOOOO/lan-game-hub',
    projectImageUrl:
      'https://camo.githubusercontent.com/f6f2cde340c63f6430cf34ed4e0acfaba2adb3f389e3bcfc73effc9cf656a20f/68747470733a2f2f692e696d6775722e636f6d2f49377745544c772e706e67',
    stack: [
      Tech.react,
      Tech.typescript,
      Tech.vite,
      Tech.mui,
      Tech.reactRouter,
      Tech.reactRecoil,
      Tech.reactBootstrap,
      Tech.tailwind,
    ],
  },
];

export default ProjectList;
