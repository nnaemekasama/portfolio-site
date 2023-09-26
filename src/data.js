import HTML from "./assets/html.png"
import CSS from "./assets/css.png"
import JavaScript from "./assets/javascript.png"
import ReactImg from "./assets/react.png"
import Node from "./assets/node.png"
import FireBase from "./assets/firebase.png"
import GitHub from "./assets/github.png"
import Tailwind from "./assets/tailwind.png"
import Mongo from "./assets/mongo.png"

import MyStore from "./assets/projects/mystore.png"
import movie from "./assets/projects/movie.png"
import form from "./assets/projects/form.png"
import realestate from "./assets/projects/realEstate.png"

export const projects = [
  {
    title: "ProStore",
    stacks: ["MERN", "React-Router", "Bootstrap"],
    description:
      "I played a central role in developing a comprehensive eCommerce web application, leveraging the MERN stack. Key project components included user authentication, seamless Paystack payment integration, and the implementation of vital admin functionalities. Bootstrap was employed for styling to create an attractive and user-friendly interface. The project aimed to provide a secure, user-centric, and feature-rich eCommerce platform, benefiting both customers and administrators.",
    image: MyStore,
    link: "https://prostore-iota.vercel.app/",
    code: "https://github.com/nnaemekasama/frontend-ecommerce",
  },
  {
    title: "Moviebox",
    stacks: ["ReactJS", "RestAPI", "React-Router"],
    description:
      "My primary goal with Moviebox is to create a movie discovery platform that empowers users to effortlessly search for movies, access detailed information about them, and even save their favorite flicks. We've integrated the powerful TMDB API to ensure that you have access to a vast catalog of movies.",
    image: movie,
    link: "https://movie-box-h6i6.vercel.app/",
    code: "https://github.com/nnaemekasama/movieBox",
  },
  {
    title: "RealEstate ",
    stacks: ["ReactJS", "Swiper.js"],
    description:
      "This project served as an excellent opportunity to learn, experiment, and showcase a wide range of web development skills. From the initial setup with Vite to the implementation of responsive design, React, Swiper JS, and Framer Motion, this project demonstrated a commitment to continuous learning and improvement. It stands as a testament to my dedication to crafting not only functional but visually captivating web experiences.",
    image: realestate,
    link: "https://real-estate-homyz.vercel.app/",
    code: "https://github.com/nnaemekasama/RealEstate",
  },
  {
    title: "Multi-Step-Form",
    stacks: ["ReactJS", "Tailwind", "React Hooks"],
    description:
      "In this project, my goal was to develop a user-friendly multi-step-form. I organized the form steps into separate components for better code management, utilized React's state management for efficient data flow, implemented real-time validation for user inputs, and designed intuitive navigation logic. The project prioritized a user-centric approach, allowing users to complete the form at their own pace, review their choices, and confidently confirm their order after a summary review.",
    image: form,
    link: "https://multi-step-form-flax.vercel.app/",
    code: "https://github.com/nnaemekasama/multi-step-form",
  },
]

export const skills = [
  { title: "HTML", image: HTML },
  { title: "CSS", image: CSS },
  { title: "JAVASCRIPT", image: JavaScript },
  { title: "REACT", image: ReactImg },
  { title: "TAILWIND", image: Tailwind },
  { title: "MONGO DB", image: Mongo },
]
