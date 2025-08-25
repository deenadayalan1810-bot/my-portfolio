import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
// import CherriDM from "/project1.png"

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      id: 1,
      title: "Cherri DM",
      description: "Cherri DM is the official website for a digital marketing agency. The site was designed to showcase the company's services, highlight client success stories, and offer visitors a simple way to get in touch. It reflects a clean and modern UI with responsive design, built using front-end technologies and a PHP-powered backend.",
      image: "/project1.png",
      technologies: ["Html","Css","Bootstrap","Javascript","Php"],
      liveLink: "https://www.cherridm.com/",
      githubLink: "#",
      featured: true
    },
    {
      id: 2,
      title: "Only Momos",
      description: "Only Momos is a modern and visually appealing restaurant website designed for a momo-specialty food brand. The website showcases menu items, customer testimonials, and a smooth contact experience for visitors. Built with a focus on performance and design, it offers a seamless user experience across devices.",
      image: "/project2.png",
      technologies: ["React","Tailwind","Node.js"],
      liveLink: "https://onlymomos.vercel.app/",
      githubLink: "https://github.com/example",
      featured: true
    },
    {
      id: 3,
      title: "Ayurananda Ayurvedic Centre",
      description: "Ayurananda Clinic is a bilingual (English & German) website developed for an Ayurveda wellness clinic. The site provides information about treatments, therapies, and the clinic's vision. Designed with a clean layout and user-friendly structure, it supports dynamic image content and a contact form powered by PHP.",
      image: "/project3.png",
      technologies: ["Html","CSS","Bootstrap","Javascript","Php","Mysql"],
      liveLink: "https://ayurananda.cherricloud.com/en/",
      githubLink: "#",
      featured: false
    },
    {
      id: 4,
      title: "Business & Service Websites – Static & WordPress Projects",
      description: "Worked on 10+ websites for various small businesses and service-based industries, using both static (HTML/CSS/JS) and WordPress platforms. These projects include company portfolios, landing pages, and contact-enabled business sites tailored to client needs.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      technologies: ["Html","Css","Bootstrap","Javascript","Php","Wordpress"],
      liveLink: "#",
      githubLink: "#",
      featured: false
    },
    {
      id: 5,
      title: "Portfolio",
      description: "This Portfolio Website was developed to showcase my frontend development skills, featured projects, and experience in a professional and organized layout. Built using React.js and Tailwind CSS, the site is fully responsive, fast-loading, and user-friendly across all devices.",
      image: "/project5.png",
      technologies: ["React","Tailwind Css"],
      liveLink: "https://deenadayalan-portfolio.web.app/",
      githubLink: "https://github.com/example",
      featured: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`bg-card rounded-xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-primary text-primary-foreground p-3 rounded-full hover:bg-primary/90 transition-colors"
                  >
                    <FaExternalLinkAlt />
                  </motion.a>
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-secondary text-secondary-foreground p-3 rounded-full hover:bg-secondary/90 transition-colors"
                  >
                    <FaGithub />
                  </motion.a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <FaGithub className="text-sm" />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/deenadayalan1810-bot"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-primary/90"
          >
            <FaGithub />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;