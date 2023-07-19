import { Link } from "react-router-dom";
import restaurantfood from "../assets/restauranfood.jpg"
import AboutUs from "./AboutUs";
import Footer from "./Footer";
import Specials from "./Specials";
import Testimonials from "./Testimonials";

function Homepage() {
    return(
        <main>
            <section className="home-hero-container">
                <div className="home-hero-background-container">
                    <div className="hero-text-container">
                        <h1 className="display-title">Little Lemon</h1>
                        <h2 className="sub-title">Chicago</h2>
                    </div>
                    <div className="hero-lead-text-button-container">
                        <p className="lead-text">
                            We are a family owned Mediterranean restaurant, 
                            focused on traditional recipes served with a modern twist
                        </p>
                        <Link to="/booking">
                            <button className="reserve-table-button btn">Reserve a Table</button>
                        </Link>
                    </div>
                    <img className="hero-image" src={restaurantfood} width="332" height="362" alt="Little Lemon food" loading="lazy" />
                </div>
            </section>
            <Specials />
            <Testimonials />
            <AboutUs />
            <Footer />
        </main>
    )
}

export default Homepage;