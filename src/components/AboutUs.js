import marioAdrianA from "../assets/Mario and Adrian A.jpg"
import marioAdrianB from "../assets/Mario and Adrian b.jpg"

function AboutUs() {
    return(
        <section className="about-us-container" id="about-section">
            <div className="about-us-text-container">
                <h2 className="display-title">Little Lemon</h2>
                <h3 className="sub-title">Chicago</h3>
                <p className="paragraph-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
            </div>
            <div className="about-us-photos-container">
                <img src={marioAdrianA} className="about-us-photo a" alt="Mario and Adrian" width="284" height="396" loading="lazy" />
                <img src={marioAdrianB} className="about-us-photo b" alt="Mario and Adrian" width="284" height="396" loading="lazy" />
            </div>
        </section>
    );
}

export default AboutUs;