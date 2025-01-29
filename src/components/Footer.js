import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer
      className="text-center text-light py-4"
      style={{ backgroundColor: "#05070f" }}
    >
      <div className="container">
        {/* Texte du Footer */}
        <motion.p
          className="mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          © {new Date().getFullYear()} Raf Eric | Tous droits réservés.
        </motion.p>

        {/* Liens Sociaux */}
        <div className="d-flex justify-content-center gap-3">
          <motion.a
            href="https://github.com/Raf-Eric"
            className="text-light"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <i className="fab fa-github fa-2x"></i>
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/raf-eric"
            className="text-light"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </motion.a>
          <motion.a
            href="mailto:raf.eric@example.com"
            className="text-light"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <i className="fas fa-envelope fa-2x"></i>
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
