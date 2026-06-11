import Header from "../components/Header";
import "../styles/landing-page.css";
import { CodeXml, Cloud, BookPlus, MoveDown, MoveRight } from "lucide-react";
import CTAbutton from "../components/CTAbutton";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <section className='tejas-dadhe'>
        <div className='introduction'>
          <p className='i-am'>
            <span>Hi! I'm</span>
            <span style={{ fontSize: "5.3rem", fontWeight: "bolder" }}>Tejas Dadhe.</span>
            <span>
              I build software systems, explore new technologies, and enjoy creating things that
              last.
            </span>
          </p>
          <div className='features'>
            <div className='feature-item'>
              <div>
                <CodeXml />
              </div>
              <span>Software Engineer</span>
            </div>
            <div className='feature-item'>
              <div>
                <Cloud />
              </div>
              <span>Cloud Enthusiast</span>
            </div>
            <div className='feature-item'>
              <div>
                <BookPlus />
              </div>
              <span>Lifelong Learner</span>
            </div>
          </div>
          <div className='cta-container'>
            <CTAbutton title='View My Work' icon={<MoveRight />} type='secondary' />
            <CTAbutton title='Learn More' icon={<MoveDown />} type='transparent' />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;

