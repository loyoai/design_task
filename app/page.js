import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

export default function Home() {
  return (
    <div className="mainContainer">
      {/* NAVIGATION */}
      <nav className="navigation">
        <div className="navInner container">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />

          <div className="navLinks">
            <a href="#" className="navLink">
              The Center
            </a>
            <a href="#" className="navLink">
              Services
            </a>
            <a href="#" className="navLink">
              Licensing & Permits
            </a>
            <a href="#" className="navLink">
              Invest
            </a>
            <a href="#" className="navLink">
              Laws & Regulations
            </a>
            <a href="#" className="navLink">
              Login
            </a>

            <a href="#" className="signUpLink">
              Sign Up
              <ArrowRightIcon className="arrowIcon" />
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="heroSection">
        <div className="heroWrapper container">
          <div className="heroImageContainer">
            <img
              src="/header.jpg"
              alt="Sustainable Energy Landscape"
              className="heroImage"
            />
            <div className="heroOverlay">
              <div className="heroContent">
                <h1 className="heroTitle">
                  Leading the Way in <br /> Sustainable Waste <br /> Management
                </h1>
                <button className="heroButton">
                  Explore services
                  <ArrowRightIcon className="arrowIcon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KEY OBJECTIVES SECTION */}
      <section className="objectivesSection container">
        <div className="objectivesGrid">
          <div className="objectivesLeft">
            <h1 className="objectivesHeading">
              National Waste Management <br /> Strategy Key objectives
            </h1>

            <div className="objectivesBlock">
              <h2 className="objectivesSubheading">Vision</h2>
              <p className="objectivesParagraph">
                Leadership in organizing the waste management sector by adopting
                circular economy principles to achieve sustainability, enhance
                environmental protection, and improve quality of life.
              </p>
            </div>

            <div className="objectivesBlock">
              <h2 className="objectivesSubheading">Mission</h2>
              <p className="objectivesParagraph">
                To organize an attractive sector through the application of best
                practices, technologies, and standards, while promoting
                transparency, efficiency, compliance, digitalization, and
                innovation.
              </p>
            </div>

            <div className="objectivesButtonWrap">
              <button className="learnMoreButton">
                Learn more
                <ArrowRightIcon className="arrowIcon" />
              </button>
            </div>
          </div>

          <div className="objectivesRight">
            <div className="objectivesImageContainer">
              <img
                src="/waste.jpg"
                alt="Plastic Waste"
                className="objectivesImage"
              />
              <div className="objectivesStat">
                <p className="objectivesStatCaption">We have helped reduce</p>
                <p className="objectivesStatNumber">30%</p>
                <div className="objectivesStatDivider" />
                <p className="objectivesStatText">
                  of plastic waste in Saudi Arabia
                  <br />
                  Since the start of 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GOVERNMENT SECTION */}
      <section className="darkSection">
        <div className="darkSectionGrid">
          <div className="darkSectionTextBlock">
            <h2 className="darkSectionTitle">
              Government: Sustainable Progress Through Policy
            </h2>
            <p className="darkSectionParagraph">
              Explore MWAN's initiatives to drive sustainable waste management,
              align with Vision 2030, and enhance environmental well-being.
            </p>

            <ul className="darkSectionList">
              <li>
                <a href="#" className="darkSectionLink">
                  Waste Management Regulations
                  <ArrowRightIcon className="arrowIcon" />
                </a>
              </li>
              <li>
                <a href="#" className="darkSectionLink">
                  Licensing and Permits Platform
                  <ArrowRightIcon className="arrowIcon" />
                </a>
              </li>
              <li>
                <a href="#" className="darkSectionLink">
                  Collaboration Opportunities
                  <ArrowRightIcon className="arrowIcon" />
                </a>
              </li>
            </ul>
          </div>

          <div className="darkSectionImageWrap">
            <img
              src="/gov.jpg"
              alt="Engineer Checking Plans"
              className="darkSectionImage"
            />
          </div>
        </div>
      </section>

      {/* INVESTORS SECTION */}
      <section className="darkSection">
        <div className="darkSectionGrid">
          <div className="darkSectionImageWrap">
            <img
              src="/inv.jpg"
              alt="Circular Infrastructure"
              className="darkSectionImage"
            />
          </div>

          <div className="darkSectionTextBlock">
            <h2 className="darkSectionTitle">
              Investors: Empowering Green Investment
            </h2>
            <p className="darkSectionParagraph">
              Unlock profitable opportunities in waste management with
              comprehensive support for sustainable growth.
            </p>

            <ul className="darkSectionList">
              <li>
                <a href="#" className="darkSectionLink">
                  Investment Opportunities
                  <ArrowRightIcon className="arrowIcon" />
                </a>
              </li>
              <li>
                <a href="#" className="darkSectionLink">
                  Investment Creation Requirements
                  <ArrowRightIcon className="arrowIcon" />
                </a>
              </li>
              <li>
                <a href="#" className="darkSectionLink">
                  Master Plan
                  <ArrowRightIcon className="arrowIcon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* EDUCATION & YOUTH SECTION */}
      <section className="darkSection">
        <div className="darkSectionGrid">
          <div className="darkSectionTextBlock reorder">
            <h2 className="darkSectionTitle">
              Education &amp; Youth: Building a Sustainable Future
            </h2>
            <p className="darkSectionParagraph">
              Inspire youth and schools to embrace waste reduction with
              resources for innovation and awareness.
            </p>

            <ul className="darkSectionList">
              <li>
                <a href="#" className="darkSectionLink">
                  Educational Workshops
                  <ArrowRightIcon className="arrowIcon" />
                </a>
              </li>
              <li>
                <a href="#" className="darkSectionLink">
                  Awareness Campaigns
                  <ArrowRightIcon className="arrowIcon" />
                </a>
              </li>
              <li>
                <a href="#" className="darkSectionLink">
                  Research Collaboration
                  <ArrowRightIcon className="arrowIcon" />
                </a>
              </li>
            </ul>
          </div>

          <div className="darkSectionImageWrap reorderImg">
            <img
              src="/edu.jpg"
              alt="Woman Planting a Sapling"
              className="darkSectionImage"
            />
          </div>
        </div>
      </section>

      {/* NEWS SECTION */}
      <section className="newsSection container">
        <h2 className="newsHeading">News</h2>

        <div className="newsGrid">
          {/* News Item 1 */}
          <div className="newsItem">
            <img
              src="/news1.jpg"
              alt="MWAN Financial Merit Award"
              className="newsImage"
            />
            <p className="newsDate">17 December, 2024</p>
            <h3 className="newsTitle">
              MWAN receives the 2024 Financial Merit Award
            </h3>
            <a href="#" className="newsLink">
              Learn more
              <ArrowRightIcon className="arrowIcon" />
            </a>
          </div>

          {/* News Item 2 */}
          <div className="newsItem">
            <img
              src="/news2.jpg"
              alt="Urban Forum in Cairo"
              className="newsImage"
            />
            <p className="newsDate">10 November, 2024</p>
            <h3 className="newsTitle">
              Mawan concludes its participation in the 12th Urban Forum in Cairo
            </h3>
            <a href="#" className="newsLink">
              Learn more
              <ArrowRightIcon className="arrowIcon" />
            </a>
          </div>

          {/* News Item 3 */}
          <div className="newsItem">
            <img
              src="/news3.jpg"
              alt="Licensing Updates"
              className="newsImage"
            />
            <p className="newsDate">31 October, 2024</p>
            <h3 className="newsTitle">
              Mawan announces updates to the licensing and permits system
            </h3>
            <a href="#" className="newsLink">
              Learn more
              <ArrowRightIcon className="arrowIcon" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="ctaSection">
        <div className="ctaWrapper container">
          <div className="ctaImageContainer">
            <img src="/cta.jpg" alt="Sustainable Future" className="ctaImage" />
            <div className="ctaOverlay">
              <div className="ctaContent">
                <h2 className="ctaHeading">
                  Join us in building a sustainable future <br />
                  where waste is a valuable resource.
                </h2>
                <p className="ctaParagraph">
                  Take control of your future, help us build a sustainable{" "}
                  <br />
                  future and see your investment grow.
                </p>
                <div className="ctaButtons">
                  <button className="ctaButtonLight">
                    Explore services
                    <ArrowRightIcon className="arrowIcon" />
                  </button>
                  <button className="ctaButtonBorder">Contact Us</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
