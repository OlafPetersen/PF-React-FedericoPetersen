function ProfileCard( {titulo,arroba,img} ){
    return (
        <div className="card">
            <div className="card-img">
                <figure className="image is-1by1">
                    <img src={img} alt="Crochet"/>
                </figure>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <h3 className="title is-4">{titulo}</h3>
                    <h4 className="subtitle is-6">{arroba}</h4>
                </div>
            </div>            
        </div>
    )
}
export default ProfileCard;