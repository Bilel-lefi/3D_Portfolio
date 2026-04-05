import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary noise-bg">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <div className="section-divider my-4" />
        <Experience />
        <div className="section-divider my-4" />
        <Tech />
        <div className="section-divider my-4" />
        <Works />
        <div className="section-divider my-4" />
        <Contact />

        {/* Footer */}
        <footer className="w-full py-8 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-secondary/60 text-[13px]">
              &copy; {new Date().getFullYear()} Bilel Lefi. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="https://github.com/Bilel-lefi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary/60 hover:text-accent text-[13px] transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/bilel-lefi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary/60 hover:text-accent text-[13px] transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="mailto:bilellefi06@gmail.com"
                className="text-secondary/60 hover:text-accent text-[13px] transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
