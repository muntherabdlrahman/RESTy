import React from "react";
import { useState } from "react";
import axios from "axios"

import "./form.scss";

function Form(props) {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [method, setMethod] = useState("get");
  const [type, setType] = useState({});
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
  };
  function urlChange(e) {
    e.preventDefault();
    setUrl(e.target.value);
  }

  function methodHandler(e) {
    e.preventDefault();
    setMethod(e.target.id);
    console.log('method :-e.target.id---->', e.target.id)
  }



  function typeYourjson(e) {
    e.preventDefault();
    setType(e.target.value)
    setMethod(e.target.id)
  }
  function showTheResult(e) {
    setShowrResult(e.target.value)
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
          <span id="get" onClick={methodHandler}>GET</span>
          <span id="post" onClick={typeYourjson}>POST</span>
          <span id="put" onClick={typeYourjson} >PUT</span>
          <span id="delete" onClick={methodHandler} >DELETE</span>
        </label>

        {type && (
          <input rows="15" cols="35" onChange={showTheResult} placeholder="type your put and post dataJosn "/>
        )}

      </form>


    </>

  );
}
export default Form;