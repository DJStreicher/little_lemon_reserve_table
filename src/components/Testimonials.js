import fourStar from "../assets/4-star.jpg"
import fiveStar from "../assets/5-star.jpg"


const testimonials = [
    {
        name: "John Doe",
        photo: "https://i.pravatar.cc/100?img=7",
        rating: fourStar,
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        name: "Jane Doe",
        photo: "https://i.pravatar.cc/100?img=5",
        rating: fiveStar,
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
        name: "Gilbert Smith",
        photo: "https://i.pravatar.cc/100?img=6",
        rating: fourStar,
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    },
    {
        name: "Mary Sue",
        photo: "https://i.pravatar.cc/100?img=10",
        rating: fiveStar,
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
];

const testimonialsCards = testimonials.map((testimonial) => {
    return(
        <article className="testimonial-card" key={testimonial.name}>
            <img className="testimonials-card-rating" src={testimonial.rating} alt="star rating" width="216" loading="lazy" />
            <div className="testimonials-card-pic-name-contianer">
                <img src={testimonial.photo} alt={testimonial.name + "picture"} className="testimonials-profile-pic"/>
                <p className="testimonials-card-name card-title-text">{testimonial.name}</p>
            </div>
            <p className="testimonials-card-comment paragraph-text">{testimonial.comment}</p>
        </article>
    )
})

function Testimonials() {
    return(
        <section className="testimonials-container">
            <h2 className="sub-title">Testimonials</h2>
            <div className="testimonial-cards-container">
                {testimonialsCards}
            </div>
        </section>
    );
}

export default Testimonials;