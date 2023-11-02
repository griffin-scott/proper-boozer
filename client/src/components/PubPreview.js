const PubPreview = (props) => {
    return (
        <div className="PubPreview">
            <div className="container col-8 px-4 py-5">
                <div className="row align-items-center g-5 py-5">
                    <div className="col-6">
                        <h1 className="display-5 fw-bold lh-1 mb-3 text-white">{props.pub.title}</h1>
                        <p className="lead text-white">
                            {props.pub.text}
                        </p>
                    </div>
                    <div className="col-6">
                        <img
                            src={props.pub.image ? props.pub.image : "image.com/loading-pic"}
                            className="d-block mx-auto img-fluid"
                            alt="Bootstrap Themes"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PubPreview;
