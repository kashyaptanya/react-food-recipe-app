import React,{useState,useEffect} from 'react'
import Header from './Header'


import Recipe from './Recipe'
import  Axios  from "axios";
import './App.css'


function App(){
 
  
  const [Search,setsearch]= useState("")
  const [recipes,setRecipes] =useState([])
  const[healthLabels,sethealthLabels] = useState("vegan")
  const apiId = "1ed46fd3"
    const apiKey = "c44b64c0e91b120bd477927dbb3b95d0"
    // useEffect(()=>{
    //   console.log("apptest")
    // })
    useEffect( ()=>{
     getrecipe()
  },[])

  const getrecipe = async ()=>{
    const result = await Axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${Search}&app_id=${apiId}&app_key=${apiKey}&health=${healthLabels}`)
    console.log(result)
    setRecipes(result.data.hits)

  }
  const onInputchange = (e)=>{
    setsearch(e.target.value)
  }
  const onSearchClick=()=>{
    getrecipe()
  }

  const onChangeClick=()=>{
    console.log("clickme")
   sethealthLabels("low-sugar")
   getrecipe()
  
   
  }
 
  return(
    <>
  
    <Header search={Search} onInputchange={onInputchange} onSearchClick={onSearchClick} onChangeClick={onChangeClick} />
   <div className='container'>
       <Recipe recipes ={recipes} />
    </div>
    </>
  )
  
}
export default App