
function Navbar (){
    return(
        <nav className="nav-bar-container">
            <button className="nav-bar-hamburger-icon-container" onClick={null}>
                <svg width="35" height="25" viewBox="0 0 35 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.34615 0C0.6027 0 0 0.621833 0 1.38889C0 2.15594 0.6027 2.77778 1.34615 2.77778H33.6538C34.3972 2.77778 35 2.15594 35 1.38889C35 0.621833 34.3972 0 33.6538 0H1.34615ZM0 12.5C0 11.7329 0.6027 11.1111 1.34615 11.1111H33.6538C34.3972 11.1111 35 11.7329 35 12.5C35 13.2671 34.3972 13.8889 33.6538 13.8889H1.34615C0.6027 13.8889 0 13.2671 0 12.5ZM0 23.6111C0 22.8442 0.6027 22.2222 1.34615 22.2222H33.6538C34.3972 22.2222 35 22.8442 35 23.6111C35 24.3781 34.3972 25 33.6538 25H1.34615C0.6027 25 0 24.3781 0 23.6111Z" fill="#495E57"/>
                </svg>
            </button>
            <div className="nav-bar-logo-container">
                <a href="/">
                    <img src={process.env.PUBLIC_URL + 'logo.svg'} alt="Little Lemon logo" className="nav-logo" width="148" height="40" loading="lazy" />
                </a>
            </div>
            <ul className="nav-links-container">
                <li><a href="/">Home</a></li>
                <li><a href="/#about-section">About</a></li>
                <li><a href="/">Menu</a></li>
                <li><a href="/">Reservations</a></li>
                <li><a href="/">Order Online</a></li>
            </ul>
            <div className="nav-bar-cart-container">
                <a href="/">
                    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M39.7273 28.4644V35.0216H46V39.3931H39.7273V45.9504H35.5455V39.3931H29.2727V35.0216H35.5455V28.4644H39.7273ZM23 24.0929C20.7 24.0929 18.8182 26.0601 18.8182 28.4644C18.8182 30.8687 20.7 32.8359 23 32.8359C25.3 32.8359 27.1818 30.8687 27.1818 28.4644C27.1818 26.0601 25.3 24.0929 23 24.0929ZM25.8227 41.5789H9.40909C7.48545 41.5789 5.87545 40.2237 5.39455 38.3877L0.0836363 18.1258C-7.45058e-08 17.9291 0 17.7324 0 17.5357C0 16.3335 0.940909 15.3499 2.09091 15.3499H12.1064L21.2645 1.03326C21.6618 0.399402 22.3309 0.0496826 23 0.0496826C23.6691 0.0496826 24.3382 0.399402 24.7355 1.01141L33.8936 15.3499H43.9091C45.0591 15.3499 46 16.3335 46 17.5357L45.9373 18.1258L43.9091 25.8634C42.7173 25.1858 41.3791 24.6175 39.9782 24.3333L41.1909 19.7214H4.83L9.40909 37.2074H25.0909C25.0909 38.7374 25.3627 40.2018 25.8227 41.5789ZM17.1455 15.3499H28.8545L23 6.16977L17.1455 15.3499Z" fill="#495E57"/>
                    </svg>
                </a>
            </div>
        </nav>
    );
}

export default Navbar;