
function Rendering(props){
    let yes=<h1 className="yes"> welcome {props.username}</h1>;
    let no = <h1 className="no"> please, login to continue</h1>;
    return(
        props.isLogged? yes:no
    );
}
export default Rendering
//we can also hide the display and show