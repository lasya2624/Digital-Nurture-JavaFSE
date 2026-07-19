function Button(){
let count =0;
    const handle=(e)=>{
        e.target.textContent = "hello";
    }
    return(
        <button className="btn" onClick={(e)=>handle(e)}>
            click me 😍
        </button>
    );
}
export default Button;