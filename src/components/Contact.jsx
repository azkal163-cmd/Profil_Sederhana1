import { FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-neutral-900 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">Let’s Work Together</h3>
        <p className="text-neutral-400 mb-10">
          Hubungi saya melalui platform berikut atau unduh CV saya.
        </p>
        
        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="mailto:emailkamu@example.com"
            className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white text-black hover:bg-gray-200 transition"
          >
            <FaEnvelope /> Email
          </a>
          
          <a
            href="https://wa.me/628xxxxxxxxxx"
            className="flex items-center gap-2 px-6 py-3 rounded-2xl border hover:bg-green-600 hover:text-white transition"
          >
            <FaWhatsapp /> WhatsApp
          </a>
          
          <a
            href="https://linkedin.com"
            className="flex items-center gap-2 px-6 py-3 rounded-2xl border hover:bg-blue-600 hover:text-white transition"
          >
            <FaLinkedin /> LinkedIn
          </a>
          
          <a
            href="https://github.com"
            className="flex items-center gap-2 px-6 py-3 rounded-2xl border hover:bg-gray-800 hover:text-white transition"
          >
            <FaGithub /> GitHub
          </a>
          
          {/* Tombol Download CV */}
          <a
            href="/cv.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 rounded-2xl border border-white hover:bg-white hover:text-black transition"
          >
            <FaDownload /> Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
