import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function App() {
return (
<main className="bg-neutral-50 text-neutral-900">
<Navbar />
<Hero />
<About />
<Services />
<Contact />
<Footer />
</main>
);
}