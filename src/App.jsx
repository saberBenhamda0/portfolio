import { BrowserRouter } from "react-router-dom";
import { Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import { About } from "./components";
import { useState, useEffect } from "react";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Function to handle scroll behavior
  const handleScroll = () => {
    const positionY = window.pageYOffset;

    const scrollVal = (positionY / 1000) * 2;

    if (scrollVal < 1) {
      setScrollPosition(scrollVal);
    }
   else {
      setScrollPosition(0);
    }
  };

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <BrowserRouter>
      <div
          style={{
            filter: `blur(${scrollPosition * 20}px)`,
          }}
        className="z-0 w-screen h-full transition-all bg-primary"
      >

        <div className="bg-center bg-no-repeat bg-cover bg-hero-pattern">
          <Navbar />
          <Hero />
        </div>

        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
