import { RxLapTimer } from "react-icons/rx";
import { MdOutlineImageNotSupported } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

export const experienceCard = [
  {
    icon: <RxLapTimer color="var(--primary)" size={25} />,
    title: "Optimizing Initial Load",
    description:
      "Optimized initial app load time by minimizing JavaScript bundle size, replacing Material-UI with custom SCSS module components, and improving performance by 20%.",
  },
  {
    icon: <MdOutlineImageNotSupported color="var(--primary-alt)" size={25} />,
    title: "Improving Image Loading",
    description:
      "Enhanced app performance by implementing lazy loading and next-gen image formats, resulting in faster page loads and improved user experience.",
  },
  {
    icon: <FaDatabase size={25} color="var(--warning)" />,
    title: "Minimizing API Latency",
    description:
      "Reduced API latency by 35% through efficient caching strategies and minimizing redundant API calls using React Query.",
  },
  {
    icon: <RiNextjsFill color="white" size={30} />,
    title: "Enhancing Server Response",
    description:
      "Improved server response time and reduced perceived load time by leveraging server-side rendering (SSR) with Next.js.",
  },
];
