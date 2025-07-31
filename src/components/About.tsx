import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="w-72 h-72 rounded-xl bg-card flex items-center justify-center text-8xl">
                  👨‍💻
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary rounded-full blur-xl opacity-60"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Passionate Frontend Developer
            </h3>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              With 1 year of hands-on experience in frontend development, I specialize in building 
              responsive and user-friendly web interfaces using HTML, CSS, Bootstrap, and JavaScript.
              I’ve worked on various projects including business websites, product landing pages, and interactive
               UI components.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Currently, I'm expanding my skills by learning React and integrating modern frameworks into my 
              workflow. I enjoy transforming design ideas into real-world web applications and continuously aim to improve 
              user experience. Beyond coding, I stay updated with the latest tech 
              trends and actively build personal and client projects to sharpen my skills.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 rounded-lg bg-card">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-card">
                <div className="text-3xl font-bold text-primary">1+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
            </div>

            <motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/Deenadayalan_updated_Resume.pdf"
              download
              className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-primary/90"
            >
              Download Resume
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
              </motion.a>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;