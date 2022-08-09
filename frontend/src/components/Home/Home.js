import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
        <section className="home">
            <h1 className="home-title">Looking for things to buy or sell?</h1>
            <h2 className="home-subtitle"><Link to="/shop">Browse now</Link> or <Link to="/register">Register</Link></h2>
        </section>
        
        </>
    );
}

export default Home;