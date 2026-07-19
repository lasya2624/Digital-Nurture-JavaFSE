import pic from './assets/img.jpg'

function Card(){
    return(
        <div className="card">
            <img className="card-img"src={pic} alt="profile picture"></img>
            <h1 className="card-title">First Trial</h1>
            <p className="card-text">I am learning ReactJs from now i am going to scholl</p>
        </div>
    );
}

export default Card
