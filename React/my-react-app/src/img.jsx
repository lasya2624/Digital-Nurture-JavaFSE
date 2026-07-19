
function Img(){
    const imgurl='./src/assets/img.jpg';
    const handler =(e)=>{
        e.target.style.display = "none";
    }
    return(<img src ={imgurl} onClick={(e)=>handler(e)}/>);
}
export default Img;