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
    title: "BlogApp",
    long_description:
      "This web application allows users to create, view, edit, and manage blog posts and comments. Users can also view and update their profiles.",
    short_description:
      " A web application for creating and managing blog posts.",
    banner: client_care_landing,
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
    ],
  },
  {
    id: 3,
    title: "Trackani",
    short_description:
      " A web application for tracking and managing your anime.",
    long_description:
      "A web application for tracking and managing your anime. Users can create an account, add anime to their watchlist, and mark them as watched. ",
    banner: client_care_landing,
    github_link: "",
  },
];
