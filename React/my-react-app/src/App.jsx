// This is for rendering a list type for './Renderlist.jsx';
// function App(){
//   const fruits=[{name:"apple",nutrients:5},
//                    {name:"orange",nutrients:8},
//                    {name:"banana",nutrients:2},
//                    {name:"mango",nutrients:1}];
                   
//   const veggies=[{name:"tomato",nutrients:15},
//                    {name:"spinach",nutrients:82},
//                    {name:"cucumber",nutrients:32},
//                    {name:"carrot",nutrients:63}];                 
//   return(
//     <>
//     {fruits.length > 0 && <Renderlist items={fruits} category="Fruits"/>}
//     { veggies.length>0 &&  <Renderlist className="veggies" items={veggies} category="Veggies"/>}
//     </>
//    //{fruits.length > 0 ? <Renderlist items={fruits} category="Fruits"/>:null}
//   );
// }
import Colorpicker from './ColorPicker.jsx';
import Componenta from './ComponentA.jsx';
import Clock from './DigitalClock.jsx';
import Img from './img.jsx';

function App(){
  return(
    <>
    <Img/>
    </>
    // <Clock/>
    //  <Colorpicker/> 
    // <Componenta/>
   
  );
}
export default App