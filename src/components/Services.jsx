import { motion } from "framer-motion";
import { FaLaptopCode, FaPaintBrush, FaRocket } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaLaptopCode size={32} />,
      title: "Landing Page",
      desc: "Landing page profesional untuk bisnis dan personal branding.",
    },
    {
      icon: <FaRocket size={32} />,
      title: "Web Application",
      desc: "Aplikasi web modern berbasis React & Vite.",
    },
    {
      icon: <FaPaintBrush size={32} />,
      title: "UI / UX Design",
      desc: "Desain antarmuka modern, clean, dan user-friendly.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Services
        </h3>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ y: -8 }}
              className="p-10 rounded-3xl bg-white shadow-md hover:shadow-xl transition"
            >
              <div className="mb-6 text-neutral-800">{item.icon}</div>
              <h4 className="font-semibold text-2xl mb-4">{item.title}</h4>
              <p className="text-neutral-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
