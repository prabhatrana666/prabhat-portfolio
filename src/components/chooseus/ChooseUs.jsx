import "./ChooseUs.css";
import {
  Ticket,
  Clock,
  Sparkles,
  ShieldCheck,
  CreditCard,
  PhoneCall,
} from "lucide-react";
import {
  Code2,
  Palette,
  Smartphone,
  Database,
  Rocket,
  Layers3
} from "lucide-react";
import {
  MonitorSmartphone,
  Search,
  Globe,
  Gauge,
  Wrench,
  Boxes,
} from "lucide-react";
function ChooseUs() {

  const features = [
    {
      title: "CLEAN CODE",
      desc: "Writing maintainable, scalable, and well-structured code following modern development best practices.",
      icon: Code2,
      color: "#ffb100",
    },
    {
      title: "PIXEL-PERFECT UI",
      desc: "Building visually accurate, responsive interfaces that match designs across all screen sizes.",
      icon: Palette,
      color: "#00a3ff",
    },
    {
      title: "RESPONSIVE DESIGN",
      desc: "Creating seamless user experiences optimized for desktops, tablets, and mobile devices.",
      icon: Smartphone,
      color: "#00d084",
    },
    {
      title: "REST API INTEGRATION",
      desc: "Connecting frontend applications with secure and efficient RESTful APIs for dynamic functionality.",
      icon: Database,
      color: "#b14cff",
    },
    {
      title: "HIGH PERFORMANCE",
      desc: "Optimizing applications for fast loading, smooth interactions, and an excellent user experience.",
      icon: Rocket,
      color: "#7c5cff",
    },
    {
      title: "MODERN BEST PRACTICES",
      desc: "Using the latest technologies, reusable components, and industry standards to build reliable applications.",
      icon: ShieldCheck,
      color: "#ff4d5a",
    },
  ];

  const services = [
    {
      icon: MonitorSmartphone,
      title: "Frontend Development",
      description:
        "Building fast, responsive, and interactive web applications using React, JavaScript, HTML, CSS, and modern frontend technologies.",
    },
    {
      icon: Layers3,
      title: "Full Stack Solutions",
      description:
        "Developing end-to-end web solutions using React, Express.js, Firebase, authentication systems, REST APIs, PWA features, and secure user management.",
    },
    {
      icon: Palette,
      title: "Pixel-Perfect UI",
      description:
        "Transforming Figma, Adobe XD, or PSD designs into visually accurate, responsive, and production-ready interfaces.",
    },
    {
      icon: Database,
      title: "REST API Integration",
      description:
        "Integrating secure REST APIs with efficient data fetching, state management, and seamless user experiences.",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description:
        "Implementing SEO best practices, semantic HTML, structured content, and performance improvements for better visibility.",
    },
    {
      icon: Globe,
      title: "Cross-Browser Compatibility",
      description:
        "Ensuring consistent functionality and appearance across Chrome, Edge, Firefox, Safari, and modern browsers.",
    },
    {
      icon: Gauge,
      title: "Performance Optimization",
      description:
        "Improving Core Web Vitals through code splitting, lazy loading, image optimization, and efficient rendering.",
    },
    {
      icon: Wrench,
      title: "Website Maintenance",
      description:
        "Providing ongoing updates, bug fixes, feature enhancements, and long-term support to keep applications running smoothly.",
    },

  ];
  return (
    <>

      {/* Our Services Section */}
      <div className="our_services_section container mt-5">
        <div className="section-header text-center mt-5">
          <span className="why-label">WHAT SERVICES I PROVIDE</span>


          <h2 className="why-title">
            OUR <span>SERVICES</span>
          </h2>

          <p className="why-description">
            I build modern, high-performance web applications with clean code, responsive design, seamless integrations, and a strong focus on user experience..
          </p>
        </div>

        <div className="services-grid cona">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div className="service-card" key={index}>
                <div
                  className="service-icon"
                  style={{ "--icon-color": service.color || "#6C63FF" }}
                >
                  <Icon size={32} />
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>
              </div>
            );
          })}
        </div>

      </div>


      {/* Why Choose Us Section */}
      < section className="why-section mt-5" >
        <div className="why-container">

          <div className="why-header">
            <span className="why-label">WHAT SETS ME APART</span>

            <h2 className="why-title">
              WHY WORK WITH <span>ME?</span>
            </h2>

            <p className="why-description">
              I create modern, responsive, and high-performance web applications with clean, maintainable code. From pixel-perfect user interfaces to seamless API integrations, I focus on delivering scalable solutions that provide an exceptional user experience.
            </p>
          </div>
          <div className="why-grid">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div className="why-card my_new_icons" key={index}>
                  <div
                    className="why-icon2"
                    style={{
                      color: item.color,
                    }}
                  >
                    <Icon size={26} strokeWidth={2.2} />
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section >
    </>

  );
}

export default ChooseUs;