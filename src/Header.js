import React,{useState}from "react";


const Header = (props)=>{

    const {search,onInputchange,onSearchClick,onChangeClick} = props
    
 
    
   
    

    return(
        <>
        <div className="pic text-center ">
            
    <h1 className=" display-1 p-5 font">Food Recipe</h1>

    <div className="input-group inp">
  <input type="text" className="form-control" value={search}  onChange={onInputchange} placeholder="Search here...."/>




  <div className="input-group-append">
  <button type="button" className="btn btn-dark but" onClick={onSearchClick}>Search</button> 
  
  
  {/* <select className=" btn btn-dark but1">
  <option>select</option>
    <option onChange={onChangeClick}>vegan </option>
    <option onChange={onChangeClick}>paleo  </option>
    <option onChange={onChangeClick}>vegetarian </option>
    <option onChange={onChangeClick}>mustard-free </option>
    <option onChange={onChangeClick}>low-sugar </option>
    <option onChange={onChangeClick}>dairy-free </option>
    </select> */}
    
  </div>
</div>
        </div>

        </>
    )

}  
export default Header