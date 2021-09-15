import React from "react";
import { useState } from "react";
import axios from "axios"

import "./form.scss";

function Form(props) {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [method, setMethod] = useState("get");
  const [type, setType] = useState(false);
  const [showResult, setShowrResult] = useState("")



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = await axios({
        method: method,
        url: url,
      });
      console.log("formData-->", formData)
      props.handleApiCall(formData, showResult);
    } catch (error) {
      console.log(error.message);
    }
  }

  function urlChange(e) {
    e.preventDefault();
    setUrl(e.target.value);
  }

  // function typeYourjson(e) {
  //   e.preventDefault();
  //   setType(e.target.value)
  //   setMethod(e.target.id)
  // }
  function showTheResult(e) {
    let data = JSON.parse(e.target.value);
    setShowrResult(data);  
  }
  function getMethod(e){
    setMethod("get")
    setType(false)
  }
  function postMethod(e){
    setMethod("post");
    setType(true)
  }
  function putMethod(e){
    setMethod("put");
    setType(true)

  }
  function deleteMethod(e){
    setMethod("delete");
    setType(false)
  }






  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input name='url' type='text' onChange={urlChange} />
          <button type="submit" data-testid="submit">GO!</button>
        </label>
        <label className="methods">
          <span id="get" onClick={getMethod}>GET</span>
          <span id="post" onClick={postMethod}>POST</span>
          <span id="put" onClick={putMethod} >PUT</span>
          <span id="delete" onClick={deleteMethod} >DELETE</span>
        </label>

        {type && (
          <input rows="15" cols="35" onChange={showTheResult} placeholder="type your put and post dataJosn "/>
        )}

      </form>


    </>

  );
}
export default Form;