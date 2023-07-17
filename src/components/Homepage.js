import restaurantfood from "../assets/restauranfood.jpg"

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
                        <button className="reserve-table-button btn">Reserve a Table</button>
                    </div>
                    <img className="hero-image" src={restaurantfood} width="332" height="362"/>
                </div>
            </section>
            <section className="specials-container">
                <div className="title-button-container">
                    <h1 className="display-title">This weeks specials!</h1>
                    <button className="order-online-button btn">Order Online</button>
                </div>
            </section>
        </main>
    )
}

export default Homepage;