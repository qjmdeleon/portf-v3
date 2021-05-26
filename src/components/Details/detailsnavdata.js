import skill from "../../images/skills.svg";
import proj from "../../images/proj.svg";
import hobbie from "../../images/hobbie.svg";
import cont from "../../images/cont.svg";

export const DetailsNavData = [
  {
    id: 1,
    title: "Skillset",
    url: "#",
    to: "/skills",
    class: "details__nav__item",
    classactive: "details__nav__item active",
  },
  {
    id: 2,
    title: "Projects I've done",
    url: "#",
    to: "/projects",
    class: "details__nav__item",
    classactive: "details__nav__item active",
  },
  {
    id: 3,
    title: "What I usually do",
    url: "#",
    to: "/hobbies",
    class: "details__nav__item",
    classactive: "details__nav__item active",
  },
  {
    id: 4,
    title: "Contact",
    url: "#",
    to: "/contact",
    class: "details__nav__item",
    classactive: "details__nav__item active",
  },
];

export const MobileIcons = [
  {
    id: 1,
    title: "Skillset",
    url: "#",
    to: "/skills",
    class: "details__nav__item",
    classactive: "details__nav__item active",
    img: skill,
  },
  {
    id: 2,
    title: "Projects I've done",
    url: "#",
    to: "/projects",
    class: "details__nav__item",
    classactive: "details__nav__item active",
    img: proj,
  },
  {
    id: 3,
    title: "What I usually do",
    url: "#",
    to: "/hobbies",
    class: "details__nav__item",
    classactive: "details__nav__item active",
    img: hobbie,
  },
  {
    id: 4,
    title: "Contact",
    url: "#",
    to: "/contact",
    class: "details__nav__item",
    classactive: "details__nav__item active",
    img: cont,
  },
];
