import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "../components/styles/Home.css";
import "../components/styles/Reusables.css";
import "../App.css";
import "../assets/fonts/fonts.css";
import { FaAngleDown, FaArrowRight } from "react-icons/fa";
import { animateScroll } from "react-scroll";
import News1 from '../images/news/news1.png';
import News2 from '../images/news/news2.png';
import News3 from '../images/news/news3.png';
import Banner1 from '../images/games/SolarisSurge/Solaris_Surge_card.png';
import Banner2 from '../images/games/Extopia/Extopia_card.png';
import Banner3 from '../images/games/CD/CD_card.png';
import Banner4 from '../images/games/DoA/DoA_card.png';
import Recruit from '../images/backgrounds/fp-recruit.png';

function Home() {

  const scrollToRecent = () => {
    const recentSection = document.getElementById("recent");
    const navHeight = 144;
    const sectionTop = recentSection.getBoundingClientRect().top;
    const offset = sectionTop + window.scrollY - navHeight;
    animateScroll.scrollTo(offset, {
      smooth: true,
      duration: 300
    });
  };

  return (
    <>
      <Nav />

      <div className="main-container">
        <div className="hero flex-col">
          <div className="hero-content flex-col">
            <h1 id="hero-h1">The <span style={{ color: "#796940", fontFamily: "Desgaste" }}>past</span> never sleeps</h1>

            <div className="hero-text-box flex-col">
              <p>Uncover the asylum's chilling past, solve perplexing puzzles, and confront the echoes of lost souls.</p>
              <p>Will you unravel the secrets that have remained hidden for decades, or will you become another victim of Brighthill’s haunting legacy?</p>
            </div>

            <Link to="/Echoes-of-Desolation">
              <button id="btn">Learn more</button>
            </Link>
          </div>

          <FaAngleDown onClick={scrollToRecent} id="arrow-btn" />
        </div>

        <div id="recent" className="recent grid-1-2">
          <Link to="/news">
            <h2 className="uppercase heading-2">Recent news and articles</h2>
          </Link>

          <div className="recent-content grid-3-1">
            <Link to="/news">
              <div className="flex-col">
                <img className="recent-img" src={News1} alt="News content" />

                <div className="recent-text-box flex-col">
                  <h3 className="uppercase">EoD - behind the scenes</h3>
                  <p style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
            </Link>

            <Link to="/news">
              <div className="flex-col">
                <img className="recent-img" src={News2} alt="News content" />
                <div className="recent-text-box flex-col">
                  <h3 className="uppercase">Making lady Veronica</h3>
                  <p style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
            </Link>

            <Link to="/news">
              <div className="flex-col">
                <img className="recent-img" src={News3} alt="News content" />
                <div className="recent-text-box flex-col">
                  <h3 className="uppercase">2024 awards nominee</h3>
                  <p style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="fp-games grid-1-2">
          <div className="flex-row flex-between">
            <h2 className="uppercase heading-2">Our games</h2>
            <Link to="/games">
              <div className="flex-row all-games-btn">
                <h2 className="">All games</h2>
                <FaArrowRight />
              </div>
            </Link>
          </div>

          <div className="fp-games-content grid-2-1">
            <Link to="/Solaris-Surge">
              <img className="fp-game" src={Banner1} alt="Games content" />
            </Link>

            <Link to="/Extopia">
              <img className="fp-game" src={Banner2} alt="Games content" />
            </Link>

            <Link to="/Celestial-Descent-Age-of-Dragons">
              <img className="fp-game" src={Banner3} alt="Games content" />
            </Link>

            <Link to="/Dawn-of-Arcanum">
              <img className="fp-game" src={Banner4} alt="Games content" />
            </Link>
          </div>

        </div>

        <div className="fp-recruit grid-2-1">

          <div className="fp-div flex-col">
            <h3 className="uppercase heading-2">Life in Brighthill Games</h3>

            <p>Join the team of Brighthill and help us create games that last for generations</p>

            <div className="fp-positions">
              <div className="flex-col">
                <h1 className="heading-1 bold">8</h1>
                <p className="font-2">open positions</p>
              </div>

              <div className="flex-col">
                <h1 className="heading-1 bold">2</h1>
                <p className="font-2">offices in Finland</p>
              </div>
            </div>

            <div>
              <Link to="/careers#explore">
                <button id="btn">explore positions</button>
              </Link>
            </div>
          </div>

          <img className="fp-recruit-img" src={Recruit} alt="Recruit banner" />
        </div>

      </div>

      <Footer />
    </>
  )
}

export default Home;