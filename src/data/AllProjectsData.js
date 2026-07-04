import First from "../assets/cherry.png"
import hello from "../assets/hello.png"
import free from "../assets/free.png"
import holiday from "../assets/projects/holiday.png"
import adventure from "../assets/projects/adventure.png"

const AllProjectsData = [
  {
    id: 1,
    title: "Cherry Paws Kennel",
    image: First,
    description: "A modern and responsive dog kennel website showcasing dog breeds, puppy care, breeding services, and essential pet care information with an engaging user experience.",
    tech: [
      "React.js",
      "JavaScript",
      "Bootstrap",
      "Framer Motion",
      "Responsive",
      "SEO"
    ],
    github: "https://github.com/prabhatrana666/cherrypawskennel",
    live: "https://cherrypawskennel.netlify.app/",
  },
  {
    id: 2,
    title: "Hello11 Cab Booking",
    image: hello,
    description: "A modern Progressive Web App (PWA) for seamless cab booking with responsive design, location autocomplete, and a fast, user-friendly experience.",
    tech: [
      "React.js",
      "JavaScript",
      "Bootstrap",
      "Framer Motion",
      "Geoapify API",
      "PWA"
    ],
    github: "https://github.com/prabhatrana666/hello11-cab-booking",
    live: "https://hello11cabbooking.netlify.app/",
  },
  {
    id: 3,
    title: "Travel Inquiry & Tour Management Platform",
    image: free,
    description: "A premium travel website featuring  tour destinations, packages, travel blogs, special offers, testimonials, and a seamless inquiry experience.",
    tech: [
      "React.js",
      "Bootstrap",
      "SweetAlert2",
      "Tawk.to",
      "Responsive Design",
      "JS",
    ],
    github: "#",
    live: "https://freeroamers.in/",
  },
  {
    id: 3,
    title: "Holiday Destination",
    image: holiday,
    description: "Full Stack",
    tech: [
        "HTML5",
        "CSS3",
        "Bootstrap",
        "JavaScript",
        "jQuery",
        "CSS Animations"
    ],
    github: "https://github.com/prabhatrana666/Holiday-Destination",
    live: "https://holiday152.netlify.app/",
  },
  {
    id: 3,
    title: "Adventure Destination Website",
    image: adventure,
    description: "Full Stack",
    tech: ["React", "Redux", "Node", "MongoDB"],
    github: "https://github.com/prabhatrana666/Adventure-Destination-Website",
    live: "https://adventure12.netlify.app/",
  },

];

export default AllProjectsData;