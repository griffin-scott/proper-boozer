import "../App.css";
import Card from "./Card";
import { Link } from 'react-router-dom'

const Home = () => {


    const cards = [
        {
            title: "The Princess Louise",
            image: "https://images.squarespace-cdn.com/content/v1/5e1cc8619d563e681552127e/1613921148496-7MBR4791BS8HX1Q4ZBXI/IMG_5835_crop.jpg",
            text: "pub pub pub ",
        },
    ];
    return (
        <>
            <div className="Home col-8 align-self-center mt-4">
                <h1 className="display-3 text-center text-light">Proper Boozer</h1>
                <p className="text-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className="CardList container-fluid">
                <div className="row pt-5 mx-5">
                    <h3 className="mb-3 pb-2 text-center">Explore Pubs</h3>
                    <Link to="/pubs">
                        <Card />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Home;
