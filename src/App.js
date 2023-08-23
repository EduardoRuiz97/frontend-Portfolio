import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import { AiFillGithub } from "react-icons/ai";
import avatar from './Images/profile-picture.png';
import ContactForm from "./components/UI/ContactForm/Form";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <>
      <Header />

      <main className="main">
        <section className="main__intro">

          <div className="main__intro__text">
            <h1>Nice to meet you! I'm Eduardo Ruiz</h1>
            <span>Toronto-based, passionate about web development and design with skills in HTML, CSS, JavaScript, and React.</span>
            <button>Contact Me</button>
          </div>

          <div className="main__intro__img-container">
            <div className="main__intro__img-container__layout">
              {/* <img src={avatar} alt='profile avatar jesus ruiz portfolio picture'/> */}
            </div>

          </div>
        </section>

        <hr />


        <section className="main__projects">
          <div className="main__projects__title">
            <h1>Projects</h1>
            <a href="#" target='_blank'>
              <button>
                More projects
                <AiFillGithub className="icon"/>
              </button>
            </a>
          </div>

          <div className="main__projects__container">
            <Projects />
          </div>
        </section>
      </main>


      <footer className="footer">
        <section className="footer__contact">
            <div className="footer__contact__text">
              <h1>Contact</h1>
              <p>Connect with me to discuss web projects, collaborations, or any questions you may have. Your ideas, my expertise – let's create the perfect online experience together. Feel free to drop a message anytime!</p>
            </div>

            <div className="footer__contact__container">
              <ContactForm />
            </div>
        </section>

        <hr />


        <section className="footer__links">
          <Navbar />
        </section>


      </footer>
    </>
  );
}

export default App;
