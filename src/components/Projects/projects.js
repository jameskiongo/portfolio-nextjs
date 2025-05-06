import client_care_landing from "@/assets/images/client-care/landing.png";
import client_care_login from "@/assets/images/client-care/login.png";
import client_care_patients from "@/assets/images/client-care/patients.png";
import client_care_programs from "@/assets/images/client-care/programs.png";
import client_care_new_patient from "@/assets/images/client-care/new_patient.png";
import client_care_new_program from "@/assets/images/client-care/new_program.png";
import client_care_individual_program from "@/assets/images/client-care/individual_program.png";
import client_care_enroll_program from "@/assets/images/client-care/enroll_to_program.png";
import client_care_enroll_patient from "@/assets/images/client-care/enroll_patient.png";
import client_care_enroll_patient_2 from "@/assets/images/client-care/enroll_patient_2.png";

import portfolio_home_page from "@/assets/images/portfolio/test.png";

import blog_landing from "@/assets/images/blog-app/landing.png";
import blog_login from "@/assets/images/blog-app/login.png";
import blog_register from "@/assets/images/blog-app/register.png";
import blog_profile from "@/assets/images/blog-app/profile.png";
import blog_create_post from "@/assets/images/blog-app/add_post.png";
import blog_view_post from "@/assets/images/blog-app/individual_post.png";
import blog_home from "@/assets/images/blog-app/home_page.png";

import trackani_login from "@/assets/images/trackani/login.png";
import trackani_register from "@/assets/images/trackani/sign_up_page.png";
import trackani_top_anime from "@/assets/images/trackani/top_anime_page.png";
import trackani_anime_details from "@/assets/images/trackani/individual_anime.png";
import trackani_home from "@/assets/images/trackani/home_page.png";
import trackani_search_anime from "@/assets/images/trackani/search_page.png";

export const projects = [
  {
    id: 1,
    title: "Client Care",
    short_description: "Digital platform for patient health care management.",
    long_description:
      "A streamlined health program management system designed for healthcare providers to efficiently register clients, enroll them in various health programs, and manage their profiles. The system offers secure API endpoints for seamless integration with other platforms, ensuring accurate tracking and improved coordination of healthcare services.",
    banner: client_care_landing,
    github_link: "https://github.com/jameskiongo/client-care",
    short_tags: [
      { id: 1, name: "Django" },
      { id: 2, name: "ReactJs" },
    ],
    all_tags: [
      { id: 1, name: "Django" },
      { id: 3, name: "Django rest framework" },
      { id: 2, name: "ReactJs" },
      { id: 7, name: "Redux" },
      { id: 4, name: "Sqlite" },
      { id: 5, name: "Tailwind Css" },
      { id: 6, name: "Preline UI" },
    ],
    gallery: [
      {
        id: 1,
        src: client_care_login,
        alt: "Client Care Login",
      },
      {
        id: 2,
        src: client_care_patients,
        alt: "Client Care Patients Dashboard",
      },
      {
        id: 3,
        src: client_care_programs,
        alt: "Client Care Programs Dashboard",
      },
      {
        id: 4,
        src: client_care_new_patient,
        alt: "Client Care New Patient Registration",
      },
      {
        id: 5,
        src: client_care_new_program,
        alt: "Client Care New Program Registration",
      },
      {
        id: 6,
        src: client_care_individual_program,
        alt: "Client Care Individual Program",
      },
      {
        id: 7,
        src: client_care_individual_program,
        alt: "Client Care Individual Program",
      },
      {
        id: 8,
        src: client_care_enroll_patient,
        alt: "Client Care Enroll Patient",
      },
      {
        id: 9,
        src: client_care_enroll_program,
        alt: "Client Care Enroll Program",
      },
      {
        id: 10,
        src: client_care_enroll_patient_2,
        alt: "Client Care Enroll Patient 2",
      },
    ],
  },
  {
    id: 2,
    title: "Portfolio",
    short_description: "My personal portfolio website built with Next.js.",
    long_description:
      "My personal portfolio website built with Next.js and Tailwind CSS.",
    banner: portfolio_home_page,
    github_link: "https://github.com/jameskiongo/portfolio-nextjs",
    short_tags: [
      { id: 1, name: "NextJs" },
      { id: 2, name: "Tailwind Css" },
    ],
    all_tags: [
      { id: 1, name: "NextJs" },
      { id: 2, name: "Tailwind Css" },
      { id: 3, name: "Shadcn UI" },
    ],
    gallery: [
      {
        id: 1,
        src: portfolio_home_page,
        alt: "Portfolio Home Page",
      },
    ],
  },
  {
    id: 3,
    title: "BlogApp",
    long_description:
      "This web application allows users to create, view, edit, and manage blog posts and comments. Users can also view and update their profiles.",
    short_description:
      " A web application for creating and managing blog posts.",
    banner: blog_landing,
    github_link: "https://github.com/jameskiongo/blog-app",
    short_tags: [
      { id: 1, name: "Django" },
      { id: 2, name: "ReactJs" },
    ],
    all_tags: [
      { id: 1, name: "Django" },
      { id: 3, name: "Django rest framework" },
      { id: 2, name: "ReactJs" },
      { id: 7, name: "Redux" },
      { id: 4, name: "Sqlite" },
      { id: 5, name: "Tailwind Css" },
      { id: 6, name: "Daisy UI" },
    ],
    gallery: [
      {
        id: 1,
        src: blog_login,
        alt: "BlogApp Login",
      },
      {
        id: 2,
        src: blog_register,
        alt: "BlogApp Register",
      },
      {
        id: 3,
        src: blog_home,
        alt: "BlogApp Home Page",
      },
      {
        id: 4,
        src: blog_profile,
        alt: "BlogApp Profile Page",
      },
      {
        id: 5,
        src: blog_create_post,
        alt: "BlogApp Create Post",
      },
      {
        id: 6,
        src: blog_view_post,
        alt: "BlogApp Individual Post",
      },
    ],
  },
  {
    id: 4,
    title: "Trackani",
    short_description:
      " A web application for tracking and managing your anime.",
    long_description:
      "A web application for tracking and managing your anime. Users can create an account, add anime to their watchlist, and mark them as watched. ",
    banner: trackani_home,
    github_link: "https://github.com/jameskiongo/trackani",
    short_tags: [
      { id: 1, name: "Django" },
      { id: 2, name: "ReactJs" },
    ],
    all_tags: [
      { id: 1, name: "Django" },
      { id: 3, name: "Django rest framework" },
      { id: 2, name: "ReactJs" },
      { id: 7, name: "RTK Query" },
      { id: 4, name: "Sqlite" },
      { id: 5, name: "Tailwind Css" },
      { id: 6, name: "Preline UI" },
    ],
    gallery: [
      {
        id: 1,
        src: trackani_login,
        alt: "Trackani Login",
      },
      {
        id: 2,
        src: trackani_register,
        alt: "Trackani Register",
      },
      {
        id: 3,
        src: trackani_top_anime,
        alt: "Trackani Top Anime",
      },
      {
        id: 4,
        src: trackani_search_anime,
        alt: "Trackani Search Anime",
      },
      {
        id: 5,
        src: trackani_anime_details,
        alt: "Trackani Individual Anime",
      },
      {
        id: 6,
        src: client_care_new_patient,
        alt: "Client Care New Patient Registration",
      },
    ],
  },
];
