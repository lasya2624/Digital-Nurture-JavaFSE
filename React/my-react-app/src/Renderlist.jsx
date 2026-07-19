function Renderlist(props){
    
   //fruits.sort((a,b)=>a.name.localeCompare(b.name));//ascending alphabetic
   //fruits.sort((a,b)=>b.name.localeCompare(a.name)); //descending alphabetic
   // fruits.sort((a,b)=>(a.fat-b.fat));  //numerical ascending   
    //fruits.sort((a,b)=>(b.fat-a.fat));  //numerical descending
    
   // const fruitfilter = fruits.filter(fruit => fruit.fat<8);

    const fruititems = props.items;
    const category = props.category;

    const fruitItems=fruititems.map((fruititems,index)=>
        <li key={index}>{fruititems.name}:&nbsp;  <b>{fruititems.nutrients}</b></li>
        //key is a unique id for each element in the list without key it might warn and render things inefficiently
    );
    
    return(
        <>
            <h1 className="category"> {category} </h1>
            <ol className="items"> {fruitItems} </ol>             
        </>
    );
}

Renderlist.defaultProps={
    category:"category",
    items: []
};

export default Renderlist
//&nbsp; is used to give space 
// the sort should be always placed above .map