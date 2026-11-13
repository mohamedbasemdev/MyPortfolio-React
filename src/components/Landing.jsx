import { useEffect, useState } from "react";

const texts = ["Frontend Developer", "Web Designer"];

function Landing({ imageRef }) {
  const [typedText, setTypedText] = useState("Frontend Developer");

  // نفس لوجيك تأثير الكتابة بالظبط
  useEffect(() => {
    let currentIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer;

    const typeSpeed = 100;
    const deleteSpeed = 100;
    const afterWord = 1000;

    function typeEffect() {
      const currentWord = texts[currentIndex];

      if (!deleting) {
        charIndex++;
        setTypedText(currentWord.substring(0, charIndex));
      } else {
        charIndex--;
        setTypedText(currentWord.substring(0, charIndex));
      }

      if (!deleting && charIndex === currentWord.length) {
        deleting = true;
        timer = setTimeout(typeEffect, afterWord);
      } else if (deleting && charIndex === 0) {
        deleting = false;
        currentIndex = (currentIndex + 1) % texts.length;
        timer = setTimeout(typeEffect, typeSpeed);
      } else {
        timer = setTimeout(typeEffect, deleting ? deleteSpeed : typeSpeed);
      }
    }
    typeEffect();

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="landing position-relative t d-flex align-items-center justify-content-center">
      <div className="container d-flex align-items-center flex-md-row flex-column">
        <div className="section ">
          <h1 className="reveul">Hi, I,m Mohamed Basem</h1>
          <h3 style={{ transitionDelay: ".4s" }} className="reveul">
            And I'm a <span className="multiple-text">{typedText}</span>
          </h3>
          <p style={{ transitionDelay: ".5s" }} className="reveul">
            I Create Modern, Fast, And Responsive Web Interfaces.
          </p>
          <div
            style={{ transitionDelay: ".6s" }}
            className="social d-flex gap-2 mt-4 mb-4 reveul"
          >
            <a href="https://www.facebook.com/mohamed.basem.58522">
              <i className="fa-brands fa-facebook-f d-flex justify-content-center align-items-center"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-twitter d-flex justify-content-center align-items-center"></i>
            </a>
            <a href="https://www.instagram.com/mohamedbasem48?igsh=d3AyYjijZmJicTZK">
              <i className="fa-brands fa-instagram d-flex justify-content-center align-items-center"></i>
            </a>
            <a href="https://www.linkedin.com/in/mohamed-basem-126b9a3b6">
              <i className="fa-brands fa-linkedin-in d-flex justify-content-center align-items-center"></i>
            </a>
          </div>
          <div style={{ transitionDelay: ".7s" }} className="buttons reveul">
            <a href="#projects">
              <div className="btn main-btn first">View My Work</div>
            </a>
            <a href="#contact">
              <div className="btn main-btn second">Contact Me</div>
            </a>
          </div>
        </div>
        <div className="image reveul-img" ref={imageRef}>
          <img
            src="picture/847118db-a7d7-44e3-af1b-e465ae69f923-removebg-preview.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;
