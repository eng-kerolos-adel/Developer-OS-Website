import {
  Lock,
  User,
  Link,
  BicepsFlexed,
  FolderKanban,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

export const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#developer", label: "Developer" },
];

export const socialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/kerolos.adel.eleshaa/",
    icon: Facebook,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/kerolos.adel.eleshaa/",
    icon: Instagram,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/eng-kerolos-adel/",
    icon: Linkedin,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@Kerolos_Adel_Web_Masterpieces",
    icon: Youtube,
  },
];

export const features = [
  {
    icon: Lock,
    title: "Secure & Seamless Access",
    description:
      "Experience effortless onboarding with Firebase-backed authentication. Whether you sign up with Google or Email, your data is protected by industry-leading security protocols.",
    image: "/auth.png",
  },
  {
    icon: User,
    title: "Your Portfolio, Everywhere You Go",
    description:
      "Move beyond static PDFs. Showcase your tech stack, projects, and achievements in a sleek, interactive interface designed for the modern developer. It’s more than a profile—it’s your professional story in one place.",
    image: "/profile.png",
  },
  {
    icon: Link,
    title: "Your Digital World, In One Place.",
    description:
      "Stop losing followers in the links. Consolidate your social media, portfolio, and projects into a sleek, organized space that represents you. One link, infinite possibilities.",
    image: "/links.png",
  },
  {
    icon: BicepsFlexed,
    title: "Your Integrated Skill Vault",
    description:
      "Bring all your technical expertise and certified credentials together in one organized interface. Showcase your true potential to the world with ease.",
    image: "/skills.png",
  },
  {
    icon: FolderKanban,
    title: "All-in-One Projects",
    description:
      "Seamlessly add projects and tasks with a smart, built-in roadmap generator.",
    image: "/projects.png",
  },
];
