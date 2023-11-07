const Card = () => {
    return (
        <div class="col-lg-4 mb-3 d-flex align-items-stretch text-center">
            <div class="card">
                <img
                    src="https://i.postimg.cc/28PqLLQC/dotonburi-canal-osaka-japan-700.jpg"
                    class="card-img-top"
                    alt="Card Image"
                />
                <div class="card-body d-flex flex-column justify-content-center">
                    <h5 class="card-title">Dōtonbori Canal</h5>
                    <p class="card-text">
                        Is a manmade waterway dug in the early 1600's and now displays many landmark commercial locals
                        and vivid neon signs.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;
