import client_care_landing from "@/assets/images/client-care/landing.png";

export const projects = [
  {
    id: 1,
    title: "Client Care",
    short_description: "Digital platform for patient health care management.",
    long_description:
      "A streamlined health program management system designed for healthcare providers to efficiently register clients, enroll them in various health programs, and manage their profiles. The system offers secure API endpoints for seamless integration with other platforms, ensuring accurate tracking and improved coordination of healthcare services.",
    banner: client_care_landing,
    github_link: "https://github.com/jameskiongo/client-care",
    link: "https://example.com/project1",
    short_tags: [
      { id: 1, name: "Django" },
      { id: 2, name: "ReactJs" },
    ],
    all_tags: [
      { id: 1, name: "Django" },
      { id: 3, name: "Django rest framework" },
      { id: 2, name: "ReactJs" },
      { id: 4, name: "Sqlite" },
      { id: 5, name: "Tailwind Css" },
      { id: 6, name: "Preline UI" },
    ],
    gallery: [
      {
        id: 1,
        src: client_care_landing,
        alt: "Project 1 Image",
      },
      {
        id: 2,
        src: client_care_landing,
        alt: "Project 1 Image",
      },
      {
        id: 3,
        src: client_care_landing,
        alt: "Project 1 Image",
      },
    ],
  },
];
