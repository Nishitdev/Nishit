// gitprofile.config.js

const config = {
  github: {
    username: 'Nishitbaria', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 2, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'Nishitbaria',
    twitter: 'Nishitbaria',
    youtube: 'Nishitbaria',
    dev: 'Nishitbaria',
    stackoverflow: 'nishitbariya',
    website: 'https://Nishitbaria.com',
    phone: '95105458732',
    email: 'Nishitbaria@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'C++',
    'C',
    'Java',
    'Git',
    'GitHub',
  ],
  // experiences: [
  //   {
  //     company: 'Company Name',
  //     position: 'Position',
  //     from: 'September 2021',
  //     to: 'Present',
  //     companyLink: 'https://example.com',
  //   },
  //   {
  //     company: 'Company Name',
  //     position: 'Position',
  //     from: 'July 2019',
  //     to: 'August 2021',
  //     companyLink: 'https://example.com',
  //   },
  // ],
  certifications: [
    {
      name: 'Postman Student Expert',
      body: 'Postman Student Experts are proficient in the essential skills required for consuming APIs in Postman and applications.',
      year: 'FEB 2023',
      link: 'https://badgr.com/public/assertions/uBhJAfZ0TZuFWXKrq9T3Dg?identity__email=stud.2101201128@kpgu.ac.in',
    },
    {
      name: 'Microsoft Certified: Azure Fundamentals',
      body: 'Earners of the Azure Fundamentals certification have demonstrated foundational level knowledge of cloud services and how those services are provided with Microsoft Azure.',
      year: 'DEC 2022',
      link: 'https://www.credly.com/badges/f4f4345b-77a1-4bf6-acf9-5e3232f650ab/linked_in_profile',
    },
  ],
  education: [
    {
      institution: 'Drs. Kiran & Pallavi Patel Global University',
      degree: 'Degree',
      from: '2021',
      to: '2025',
    },
    {
      institution: 'Shree Narayan vidhyalaya',
      degree: '11th and 12th',
      from: '2012',
      to: '2014',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Contentify',
      description:
        'Contentify is a versatile content creation, social media management, and educational resources platform. It provides users with a comprehensive set of tools to excel in content creation, streamline social media management, and access valuable educational resources.',
      imageUrl: 'https://contentifys.netlify.app/Icon.jpeg',
      link: 'https://github.com/TechNodes2-0/Contentify',
    },
    {
      title: 'Laughhub',
      description:
        'Laugh Hub is a hilarious bot with advanced AI voice assistance that offers fun conversations, funny stories, a meme generator, and three to four entertaining games. Its the perfect destination for anyone looking for a good laugh and a break from their daily routine.',
      imageUrl:
        'https://github.com/TechNodes2-0/Laughhub/raw/main/chatbot/public/2.jpg',
      link: 'https://cdn2.downdetector.com/static/uploads/logo/Dankmemer_logo.png',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'Nishitbaria', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: ['light', 'dark'],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/Nishitbaria/gitprofile"
      target="_blank"
      rel="noreferrer"
    >Nishitbaria</a> and ❤️`,
};

export default config;
