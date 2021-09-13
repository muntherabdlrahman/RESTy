import React from "react";
import { useState } from "react";
import "./form.scss";

function Form(props){
  const[url, setUrl]=useState("");
  const[get,setGet]=useState("get");
  // const[post,setPost]=useState("");
  // const[put,setPut]=useState("");
  const[deleteit,setDeleteit]=useState("delete");
  const[type, setType]=useState("");

  function urlChange(e){
    e.preventDefault();
    setUrl(e.target.value);

  }

  function getMethod(e){
    e.preventDefault();
    setGet(e.target.id);
    setUrl(e.target.value)
  }
  

  
  function deleteMethod(e){
    e.preventDefault();
    setDeleteit(e.target.id);
    setUrl(e.target.value)


  }

  function typeYourjson(e){
    e.preventDefault();
    setType(e.target.value)
  }







    function handleSubmit(e){
        e.preventDefault();
        const formData = {
            method:'GET',
            url: 'https://pokeapi.co/api/v2/pokemon',
          };
          props.handleApiCall(formData, type);

    }
    
    return(
        <>
         <form onSubmit={handleSubmit}>
           <label>
           </label>
          <label >
            <span>URL: </span>
            <input name='url' type='text' onChange={urlChange}/>
            <button type="submit"  data-testid="submit">GO!</button>
          </label>
          <label className="methods">
            <span id="get" onClick={getMethod}>GET</span>
            <span id="post" onClick={typeYourjson}>POST</span>
            <span id="put" onClick={typeYourjson} >PUT</span>
            <span id="delete" onClick={deleteMethod} >DELETE</span>
             <input  type="text" onChange={typeYourjson} placeholder="type your put and post dataJosn " />
          </label>
        </form>

        
        </>

    );
}
export default Form;