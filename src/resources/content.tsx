import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Kieu Hiep",
  lastName: "",
  name: `Kieu The Hiep`,
  role: "Cyber Security Intern",
  avatar: "/images/avatar.JPG",
  email: "kieuthehiep@gmail.com",
  location: "Asia/Ho_Chi_Minh", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Tiếng Việt"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/kiuhip",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/kiuhip/",
    essential: true,
  },
  {
    name: "Facebook",
    icon: "facebook",
    link: "https://www.facebook.com/kiuhip19205",
    essential: false,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Always work hard for the future</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
    I'm Kieu Hiep, a Hanoi-based software and cybersecurity enthusiast. I'm passionate about building secure, efficient, and innovative systems.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Kieu Hiep is a Hanoi-based software and cybersecurity enthusiast with a passion for building secure, efficient, and innovative systems. His work spans malware analysis, secure application development, and entrepreneurial ventures, bridging the gap between technical defense and commerce with the ultimate goal of becoming a leading security expert and driving successful business initiatives.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "CyRadar",
        timeframe: "3/2026 - Present",
        role: "Cyber Security Intern",
        achievements: [
          <>
            Focused on improving system security and performing malware analysis.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Hanoi University of Science and Technology",
        description: <>2023 - Now: Majoring in Computer Engineering.</>,
      },
      {
        name: "Vinh Phuc High School for the Gifted",
        description: <>2020 - 2023: Majoring in Physics class.</>,
      },
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
  { src: "/images/gallery/tuvi.jpg", alt: "Bản đồ Tử Vi", orientation: "721 / 1024" },
  { src: "/images/gallery/16BCC79B-C2D5-4852-8175-CB7AB30DE6DC.JPG", alt: "16BCC79B-C2D5-4852-8175-CB7AB30DE6DC.JPG", orientation: "1242 / 2208" },
  { src: "/images/gallery/1E184593-871A-42FA-B934-A9A922D6120B.JPG", alt: "1E184593-871A-42FA-B934-A9A922D6120B.JPG", orientation: "1440 / 1800" },
  { src: "/images/gallery/3254CB37-7D21-4B27-801C-94CFF7E16911.JPG", alt: "3254CB37-7D21-4B27-801C-94CFF7E16911.JPG", orientation: "1242 / 2208" },
  { src: "/images/gallery/3E4E9F18-8F03-4D15-AD5F-1ED680B904B0.JPG", alt: "3E4E9F18-8F03-4D15-AD5F-1ED680B904B0.JPG", orientation: "1440 / 1800" },
  { src: "/images/gallery/3S0A7861.JPEG", alt: "3S0A7861.JPEG", orientation: "5760 / 3840" },
  { src: "/images/gallery/617B76B6-0E17-4B6C-9576-9CAAC9EEBE29.JPG", alt: "617B76B6-0E17-4B6C-9576-9CAAC9EEBE29.JPG", orientation: "1242 / 2208" },
  { src: "/images/gallery/80ED15EC-50B9-4028-A3E8-3CD681000E98.JPG", alt: "80ED15EC-50B9-4028-A3E8-3CD681000E98.JPG", orientation: "1440 / 1799" },
  { src: "/images/gallery/8E6C71F9-8920-43D4-867F-741FA3068FF1.JPG", alt: "8E6C71F9-8920-43D4-867F-741FA3068FF1.JPG", orientation: "1170 / 2080" },
  { src: "/images/gallery/92FC8BCF-4860-46D3-A5AA-CDC111153D68.JPG", alt: "92FC8BCF-4860-46D3-A5AA-CDC111153D68.JPG", orientation: "1242 / 2208" },
  { src: "/images/gallery/A174D11D-917E-4A13-B462-A942B736A3E9.JPG", alt: "A174D11D-917E-4A13-B462-A942B736A3E9.JPG", orientation: "1242 / 2208" },
  { src: "/images/gallery/B1311D19-728E-4E7F-A5FE-43AEC041F51E.JPG", alt: "B1311D19-728E-4E7F-A5FE-43AEC041F51E.JPG", orientation: "1440 / 1799" },
  { src: "/images/gallery/C5A397EA-B992-4CB8-9267-14172625BFD8.JPG", alt: "C5A397EA-B992-4CB8-9267-14172625BFD8.JPG", orientation: "1242 / 2208" },
  { src: "/images/gallery/DSC05976.JPEG", alt: "DSC05976.JPEG", orientation: "5304 / 7952" },
  { src: "/images/gallery/DSCF1994.JPG", alt: "DSCF1994.JPG", orientation: "7728 / 5152" },
  { src: "/images/gallery/E482EC6A-0EE9-41EA-9F52-359B15ADAA72.JPG", alt: "E482EC6A-0EE9-41EA-9F52-359B15ADAA72.JPG", orientation: "2707 / 3609" },
  { src: "/images/gallery/IMG_0486.JPG", alt: "IMG_0486.JPG", orientation: "4032 / 3024" },
  { src: "/images/gallery/IMG_0623.JPG", alt: "IMG_0623.JPG", orientation: "2268 / 4032" },
  { src: "/images/gallery/IMG_0724.JPG", alt: "IMG_0724.JPG", orientation: "4032 / 3024" },
  { src: "/images/gallery/IMG_0728.JPG", alt: "IMG_0728.JPG", orientation: "4032 / 3024" },
  { src: "/images/gallery/IMG_0730.JPG", alt: "IMG_0730.JPG", orientation: "3024 / 4032" },
  { src: "/images/gallery/IMG_0745.JPG", alt: "IMG_0745.JPG", orientation: "4032 / 3024" },
  { src: "/images/gallery/IMG_0766.JPG", alt: "IMG_0766.JPG", orientation: "4032 / 3024" },
  { src: "/images/gallery/IMG_0876.JPG", alt: "IMG_0876.JPG", orientation: "3024 / 4032" },
  { src: "/images/gallery/IMG_1709.JPG", alt: "IMG_1709.JPG", orientation: "4032 / 3024" },
  { src: "/images/gallery/IMG_2089.JPG", alt: "IMG_2089.JPG", orientation: "5712 / 4284" },
  { src: "/images/gallery/IMG_2093.JPG", alt: "IMG_2093.JPG", orientation: "5712 / 4284" },
  { src: "/images/gallery/IMG_2096.JPG", alt: "IMG_2096.JPG", orientation: "5712 / 4284" },
  { src: "/images/gallery/IMG_2100.JPG", alt: "IMG_2100.JPG", orientation: "5712 / 4284" },
  { src: "/images/gallery/IMG_2103.JPG", alt: "IMG_2103.JPG", orientation: "4032 / 3024" },
  { src: "/images/gallery/IMG_2226.JPG", alt: "IMG_2226.JPG", orientation: "4032 / 3024" },
  { src: "/images/gallery/IMG_2231.JPG", alt: "IMG_2231.JPG", orientation: "4032 / 3024" },
  { src: "/images/gallery/IMG_2504.JPG", alt: "IMG_2504.JPG", orientation: "4032 / 3024" },
  { src: "/images/gallery/IMG_2891.JPG", alt: "IMG_2891.JPG", orientation: "2560 / 1920" },
  { src: "/images/gallery/IMG_3639.JPG", alt: "IMG_3639.JPG", orientation: "3088 / 2316" },
  { src: "/images/gallery/IMG_3751.JPG", alt: "IMG_3751.JPG", orientation: "3088 / 2316" },
  { src: "/images/gallery/IMG_3796.JPG", alt: "IMG_3796.JPG", orientation: "4032 / 3024" },
  { src: "/images/gallery/IMG_4285.JPG", alt: "IMG_4285.JPG", orientation: "4032 / 3024" },
  { src: "/images/gallery/IMG_4290.JPG", alt: "IMG_4290.JPG", orientation: "3088 / 2316" },
  { src: "/images/gallery/IMG_4305.JPG", alt: "IMG_4305.JPG", orientation: "2048 / 1536" },
  { src: "/images/gallery/IMG_4406.JPG", alt: "IMG_4406.JPG", orientation: "2560 / 1708" },
  { src: "/images/gallery/IMG_4427.JPG", alt: "IMG_4427.JPG", orientation: "4032 / 3024" },
  { src: "/images/gallery/IMG_4483.JPG", alt: "IMG_4483.JPG", orientation: "4032 / 3024" },
  { src: "/images/gallery/IMG_4603.JPG", alt: "IMG_4603.JPG", orientation: "5472 / 3648" },
  { src: "/images/gallery/IMG_4646.JPG", alt: "IMG_4646.JPG", orientation: "5472 / 3648" },
  { src: "/images/gallery/IMG_4820.JPG", alt: "IMG_4820.JPG", orientation: "3088 / 2316" },
  { src: "/images/gallery/IMG_4861.JPG", alt: "IMG_4861.JPG", orientation: "5472 / 3648" },
  { src: "/images/gallery/IMG_5005.JPG", alt: "IMG_5005.JPG", orientation: "3024 / 4032" },
  { src: "/images/gallery/IMG_5008.JPG", alt: "IMG_5008.JPG", orientation: "3024 / 4032" },
  { src: "/images/gallery/IMG_5115.JPG", alt: "IMG_5115.JPG", orientation: "1920 / 1280" },
  { src: "/images/gallery/IMG_5146.JPG", alt: "IMG_5146.JPG", orientation: "3024 / 4032" },
  { src: "/images/gallery/IMG_5147.JPG", alt: "IMG_5147.JPG", orientation: "2126 / 2651" },
  { src: "/images/gallery/IMG_5150.JPG", alt: "IMG_5150.JPG", orientation: "4032 / 3024" },
  { src: "/images/gallery/IMG_5294.JPG", alt: "IMG_5294.JPG", orientation: "2955 / 3944" },
  { src: "/images/gallery/IMG_5384.JPG", alt: "IMG_5384.JPG", orientation: "3024 / 4032" },
  { src: "/images/gallery/IMG_5386.JPG", alt: "IMG_5386.JPG", orientation: "3024 / 4032" },
  { src: "/images/gallery/IMG_5534.JPG", alt: "IMG_5534.JPG", orientation: "4032 / 3024" },
  { src: "/images/gallery/IMG_6280.JPG", alt: "IMG_6280.JPG", orientation: "664 / 891" },
  { src: "/images/gallery/IMG_6544.JPG", alt: "IMG_6544.JPG", orientation: "4032 / 3024" },
  { src: "/images/gallery/IMG_6636.JPG", alt: "IMG_6636.JPG", orientation: "4032 / 3024" },
  { src: "/images/gallery/IMG_7820.JPG", alt: "IMG_7820.JPG", orientation: "4032 / 3024" },
  { src: "/images/gallery/IMG_7846.JPG", alt: "IMG_7846.JPG", orientation: "1920 / 2560" },
  { src: "/images/gallery/IMG_7849.JPG", alt: "IMG_7849.JPG", orientation: "1920 / 2560" },
  { src: "/images/gallery/IMG_7850.JPG", alt: "IMG_7850.JPG", orientation: "1920 / 2560" },
  { src: "/images/gallery/IMG_7908.JPG", alt: "IMG_7908.JPG", orientation: "1920 / 2560" },
  { src: "/images/gallery/IMG_8152.JPG", alt: "IMG_8152.JPG", orientation: "3024 / 4032" },
  { src: "/images/gallery/IMG_8177.JPG", alt: "IMG_8177.JPG", orientation: "4032 / 3024" },
  { src: "/images/gallery/IMG_8189.JPG", alt: "IMG_8189.JPG", orientation: "6000 / 4000" },
  { src: "/images/gallery/IMG_8929.JPG", alt: "IMG_8929.JPG", orientation: "2048 / 2048" },
  { src: "/images/gallery/IMG_9106.JPG", alt: "IMG_9106.JPG", orientation: "4032 / 3024" },
  { src: "/images/gallery/IMG_9374.JPG", alt: "IMG_9374.JPG", orientation: "3024 / 4032" },
  { src: "/images/gallery/IMG_9406.JPG", alt: "IMG_9406.JPG", orientation: "4032 / 3024" },
  { src: "/images/gallery/IMG_9927.JPG", alt: "IMG_9927.JPG", orientation: "4032 / 3024" },
  { src: "/images/gallery/JOY_0475.JPG", alt: "JOY_0475.JPG", orientation: "6048 / 4024" },
  { src: "/images/gallery/JOY_0514.JPG", alt: "JOY_0514.JPG", orientation: "6048 / 4024" },
  { src: "/images/gallery/JOY_0528.JPG", alt: "JOY_0528.JPG", orientation: "6048 / 4024" },
  { src: "/images/gallery/JOY_0551.JPG", alt: "JOY_0551.JPG", orientation: "6048 / 4024" },
  { src: "/images/gallery/ZIM00262.JPEG", alt: "ZIM00262.JPEG", orientation: "4672 / 7008" },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
