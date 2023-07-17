//this component needs to loop over data variables to populate the content cards

function Specials() {
    return(
        <section className="specials-container">
            <div className="title-button-container">
                <h1 className="display-title">This weeks specials!</h1>
                <button className="order-online-button btn">Order Online</button>
            </div>
        </section>
    );
}

export default Specials;