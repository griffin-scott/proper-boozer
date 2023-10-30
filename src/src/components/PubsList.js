import PubPreview from './PubPreview'
import { Link } from 'react-router-dom'


const PubsList = () => {
    return (
        <div className="PubsList">
            <Link>
                <PubPreview />
            </Link>
        </div>
    );
};

export default PubsList;
