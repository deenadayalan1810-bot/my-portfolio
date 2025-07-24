import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaNode, 
  FaGitAlt,
  FaFigma,
  FaSass
} from "react-icons/fa";
import { 
  SiTypescript, 
  SiTailwindcss,
  SiBootstrap, 
  SiNextdotjs, 
  SiMongodb,
  SiFirebase,
  SiGraphql
} from "react-icons/si";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skills = [
    { name: "React", icon: FaReact, level: 95, color: "text-blue-400" },
    // { name: "TypeScript", icon: SiTypescript, level: 90, color: "text-blue-600" },
    { name: "JavaScript", icon: FaJs, level: 95, color: "text-yellow-400" },
    // { name: "Next.js", icon: SiNextdotjs, level: 85, color: "text-foreground" },
    { name: "HTML5", icon: FaHtml5, level: 98, color: "text-orange-500" },
    { name: "CSS3", icon: FaCss3Alt, level: 95, color: "text-blue-500" },
    { name: "Bootstrap", icon: SiBootstrap, level: 92, color: "text-cyan-400" },
    // { name: "Sass", icon: FaSass, level: 88, color: "text-pink-400" },
    { name: "Node.js", icon: FaNode, level: 80, color: "text-green-500" },
    // { name: "MongoDB", icon: SiMongodb, level: 75, color: "text-green-600" },
    // { name: "Firebase", icon: SiFirebase, level: 85, color: "text-orange-400" },
    // { name: "GraphQL", icon: SiGraphql, level: 70, color: "text-pink-500" },
    { name: "Git", icon: FaGitAlt, level: 90, color: "text-orange-600" },
    { name: "Figma", icon: FaFigma, level: 85, color: "text-purple-500" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm constantly learning and improving my skills. Here are the technologies I work with.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-card p-6 rounded-xl shadow-card hover:shadow-glow transition-all duration-300 text-center group"
            >
              <div className={`text-4xl mb-4 ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                <skill.icon className="mx-auto" />
              </div>
              <h3 className="font-semibold mb-2">{skill.name}</h3>
              <div className="w-full bg-muted rounded-full h-2 mb-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="skill-gradient h-2 rounded-full"
                ></motion.div>
              </div>
              <span className="text-sm text-muted-foreground">{skill.level}%</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8">What I Do Best</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-xl shadow-card">
              <div className="text-4xl mb-4 text-primary">🎨</div>
              <h4 className="text-xl font-semibold mb-2">UI/UX Design</h4>
              <p className="text-muted-foreground">
                Creating intuitive and beautiful user interfaces with focus on user experience.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-card">
              <div className="text-4xl mb-4 text-secondary">⚡</div>
              <h4 className="text-xl font-semibold mb-2">Performance</h4>
              <p className="text-muted-foreground">
                Optimizing applications for speed and efficiency across all devices.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-card">
              <div className="text-4xl mb-4 text-accent">📱</div>
              <h4 className="text-xl font-semibold mb-2">Responsive Design</h4>
              <p className="text-muted-foreground">
                Building applications that work perfectly on desktop, tablet, and mobile.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;