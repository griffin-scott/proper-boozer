import context from "../context/context";
import { useContext } from "react";

const Pub = () => {
    const pub = useContext(context)
    return (
        <div className="Pub col-8 align-self-center mt-4">
            <div className="container-fluid">
                {/* image and name */}
                <div className="row">
                    <div className="col-6">
                        <img
                            src="https://images.squarespace-cdn.com/content/v1/5e1cc8619d563e681552127e/1613921148496-7MBR4791BS8HX1Q4ZBXI/IMG_5835_crop.jpg"
                            alt="Pub Image"
                        />
                        <h1 className="display-3 text-light">The Princess Louise, Holborn</h1>
                    </div>
                </div>

                {/* facts and map */}
                <div className="row">
                    <div className="col">
                        <ul>
                            <li>Fact 1</li>
                            <li>Fact 2</li>
                        </ul>
                    </div>
                    <div className="col">
                        <div>
                            <img src="" alt="Map Image" />
                        </div>
                    </div>
                </div>

                {/* footer text and images */}
                <div className="row">
                    <p className="lead text-light">
                        Beautiful Victorian interior featuring privacy screens ('snob screens') to afford the
                        well-heeled some privacy from the rabble in the main sections of the bar (the men's loos are
                        cool and have the original urinals). A Sam Smiths pub - an English brewery that owns pubs all
                        over London & serves their own drinks- so no Guinness, but often in beautiful buildings and
                        usually less expensive than elsewhere.
                    </p>
                    <img src="" alt="carousel" />
                </div>
            </div>
        </div>
    );
};

export default Pub;
