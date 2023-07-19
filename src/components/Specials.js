//this component needs to loop over data variables to populate the content cards
import greekSalad from "../assets/greek salad.jpg"
import bruschetta from "../assets/bruchetta.png"
import lemonDessert from "../assets/lemon dessert.jpg"

const specials = [
    {
        name: "Greek Salad",
        price: "$12.99",
        desciption: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        image: greekSalad,
    },
    {
        name: "Bruschetta",
        price: "$5.00",
        desciption: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        image: bruschetta,
    },
    {
        name: "Lemon Dessert",
        price: "$5.00",
        desciption: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        image: lemonDessert,
    },
]

const specialCards = specials.map((special) => {
    return(
        <article className="special-card" key={special.name}>
            <img src={special.image} className="special-card-image" alt={special.name} loading="lazy"/>
            <div className="card-text-container">
                <div className="card-heading-description-container">
                    <div className="card-heading-price-container">
                        <h2 className="card-title-text">{special.name}</h2>
                        <p className="card-title-text price">{special.price}</p>
                    </div>

                    <p className="paragraph-text">{special.desciption}</p>
                </div>
                <div className="specials-order">
                    <p className="paragraph-text">Order for delivery</p>
                    <svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M7.63806 2.18238H1.30017C1.05847 2.18238 0.859739 2.38111 0.859739 2.62281V6.31275H0.816771C0.550007 6.31275 0.333374 6.53118 0.333374 6.79615V7.33505C0.333374 7.6054 0.555378 7.82561 0.823933 7.82561H4.22563C1.69763 8.0512 0.252808 10.4019 0.410358 13.4581H2.65906C2.66085 14.9316 3.85681 16.124 5.33028 16.124C6.80375 16.124 7.99971 14.9298 8.0015 13.4581H14.8711C14.8729 13.4098 14.8747 13.3632 14.8765 13.3149C14.8711 13.6389 14.8908 13.9827 14.9374 14.3497L20.9244 11.5299L22.3334 10.8639C21.2019 9.57659 19.8376 9.0359 18.1869 9.40829C17.9327 9.47275 17.6927 9.54794 17.4654 9.63388C17.6981 9.54436 17.9434 9.46917 18.2012 9.40471L16.3177 3.2011L17.1682 3.18499C17.3436 3.18141 17.5334 3.22974 17.6534 3.14381C17.861 3.13844 18.0419 3.01311 18.1672 2.81617C18.28 2.64072 18.348 2.40081 18.348 2.13941C18.348 1.87802 18.2782 1.63811 18.1672 1.46266C18.0741 1.31764 17.9524 1.212 17.8127 1.16366C17.8109 1.13502 17.8091 1.11532 17.8055 1.10995C17.605 0.789478 17.2147 0.886158 16.8674 0.886158L16.529 0.907642C16.2837 0.938078 16.0438 1.01864 15.8129 1.15113L15.4261 1.36777H15.1128L14.0601 1.57187C13.7163 1.63811 13.6662 1.60946 13.7468 2.03378C13.7575 2.08749 13.7701 2.1412 13.788 2.19312C13.8918 2.50286 13.9742 2.38827 14.2946 2.32203L15.2811 2.11793C15.2435 2.51539 15.3689 3.00237 15.5461 3.5717C14.9786 4.05152 14.7243 4.73544 15.111 5.636L16.0528 8.53818C14.4737 9.65716 13.5248 10.6705 13.4711 12.3337H11.3817C10.0944 11.358 10.3075 9.62135 11.7201 8.51132V7.8274V6.78183C11.7183 6.45061 11.5411 6.30201 11.2116 6.31096H8.07849V2.62281C8.07849 2.38111 7.87976 2.18238 7.63806 2.18238ZM6.09835 5.64495H2.83809C2.81303 5.64495 2.79154 5.66643 2.79154 5.6915V5.7846C2.79154 5.80966 2.81303 5.83114 2.83809 5.83114H6.09835C6.12341 5.83114 6.1449 5.80966 6.1449 5.7846V5.6915C6.1449 5.66643 6.1252 5.64495 6.09835 5.64495ZM4.33305 3.61825C3.37878 3.69524 2.6877 4.41318 2.80766 5.35849H6.13057C6.24695 4.4078 5.55408 3.68808 4.59265 3.61825V3.35149H4.85762C4.88448 3.35149 4.90597 3.33001 4.90597 3.30315V3.12948C4.90597 3.10263 4.88448 3.08114 4.85762 3.08114H4.07523C4.04838 3.08114 4.0269 3.10263 4.0269 3.12948V3.30315C4.0269 3.33001 4.04838 3.35149 4.07523 3.35149H4.33484V3.61825H4.33305ZM20.9172 11.5335L18.536 12.6614L19.3094 12.3069C19.8412 12.4197 20.2386 12.8923 20.2386 13.4563C20.2386 14.1062 19.7123 14.6326 19.0624 14.6326C18.4125 14.6326 17.8861 14.1062 17.8861 13.4563C17.8861 13.2558 17.9362 13.0678 18.024 12.9013L16.3983 13.6712C16.5075 15.0462 17.6587 16.1275 19.0606 16.1275C20.5358 16.1275 21.7318 14.9316 21.7318 13.4563C21.7354 12.7008 21.4221 12.0186 20.9172 11.5335ZM17.8091 1.622C17.7984 1.96575 17.7751 2.40797 17.759 2.70517C17.7876 2.6801 17.8163 2.64788 17.8413 2.6067C17.9165 2.49032 17.9613 2.32382 17.9613 2.13762C17.9613 1.95142 17.9148 1.78492 17.8413 1.66855C17.8306 1.65243 17.8199 1.63632 17.8091 1.622ZM6.50655 13.4599H4.15401C4.1558 14.108 4.68217 14.6308 5.33028 14.6308C5.97839 14.6326 6.50476 14.108 6.50655 13.4599Z" fill="black"/>
                    </svg>
                </div>
            </div>
        </article>
    );
});

function Specials() {
    return(
        <section className="specials-container">
            <div className="title-button-container">
                <h2 className="sub-title">This weeks specials!</h2>
                <button className="online-menu-button btn">Online Menu</button>
            </div>
            <div className="specials-cards-container">
                {specialCards}
            </div>
        </section>
    );
}

export default Specials;