import PubPreview from "./PubPreview";
import { Link } from "react-router-dom";

import { useContext } from "react";
import context from '../context/context'

const PubsList = () => {
    const pubs = useContext(context)
    return (
        <div className="PubsList">
            {pubs.map((pub) => (
                <Link to={`/pubs/${pub.url}`}>
                    <PubPreview key={pub.id} pub={pub} />
                </Link>
            ))}

            {/* <ul>
                {pubs.map((post) => (
                    <div className="col-8 mb-5 ps-3 mx-auto border rounded">
                        <h1 className="display-5 text-white">{post.title}</h1>
                        <p className="lead text-white">{post.body}</p>
                    </div>
                ))}
            </ul> */}
        </div>
    );
};

export default PubsList;
