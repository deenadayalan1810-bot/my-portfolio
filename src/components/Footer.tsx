import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold gradient-text mb-4 cursor-pointer inline-block"
            onClick={scrollToTop}
          >
            &lt;Frontend Developer&gt;
          </motion.div>
          
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Building digital experiences that matter. Always learning, always growing.
          </p>

          <div className="flex justify-center space-x-8 mb-8">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.getElementById(item.toLowerCase());
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {item}
              </motion.button>
            ))}
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              © {new Date().getFullYear()} Deenadayalan. Made with 
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="text-red-500"
              >
                <FaHeart />
              </motion.span>
              and React
            </p>
          </div>

          {/* Back to top button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mt-8 bg-primary text-primary-foreground p-3 rounded-full hover:bg-primary/90 transition-all duration-300 hover:shadow-glow"
            aria-label="Back to top"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;