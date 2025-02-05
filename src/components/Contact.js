import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      className="contact-section py-5 backContact"
      id="contact"
      
    >
      <div className="container">
        <h2 className="text-center  fw-bold Contact mb-4">
          Contactez-moi
        </h2>
        <p className="text-center text-light mb-5" style={{ fontSize: "1.1rem" }}>
          Une question ? Besoin de collaborer ? Envoyez-moi un message.
        </p>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <motion.form
              className="p-4 rounded shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ backgroundColor: "#1e2433", borderRadius: "10px" }}
            >
              <div className="mb-3">
                <label htmlFor="name" className="form-label text-light">
                  Nom complet
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Votre nom"
                  style={{
                    backgroundColor: "#2b2b3d",
                    color: "#ffffff",
                    border: "none",
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label text-light">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Votre email"
                  style={{
                    backgroundColor: "#2b2b3d",
                    color: "#fff",
                    border: "none",
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label text-light">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  placeholder="Votre message"
                  style={{
                    backgroundColor: "#2b2b3d",
                    color: "#ffffff",
                    border: "none",
                  }}
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="btn btn-primary w-100"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  backgroundColor: "#007bff",
                  border: "none",
                  fontWeight: "bold",
                }}
              >
                Envoyer
              </motion.button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
