import { useState } from "react";
import "./form.scss";

function Form(props) {
  const [url, setUrl] = useState("");
  const [method, setMethod] = useState("get");
  const [showText, setshowText] = useState(false);
  const [showResult, setshowResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        method: method,
        url: url,
        showResult,
      };
      await props.handleApiCall(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleURL = (e) => {
    setUrl(e.target.value);
  };

  const handleshowResult = (e) => {
    let data = JSON.parse(e.target.value);
    setshowResult(data);
  };

  function getMethod (e){
    setMethod("get");
    setshowText(false);
  };

  const postMethod = (e) => {
    setMethod("post");
    setshowText(true);
  };

  const putMethod = (e) => {
    setMethod("put");
    setshowText(true);
  };

  const deleteMethod = (e) => {
    setMethod("delete");
    setshowText(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input name="url" type="text" onChange={handleURL} />
          <button type="submit" data-testid="submit">
            GO!
          </button>
        </label>
        <label className="methods">
          <span id="get" onClick={getMethod}>
            GET
          </span>
          <span id="post" onClick={postMethod}>
            POST
          </span>
          <span id="put" onClick={putMethod}>
            PUT
          </span>
          <span id="delete" onClick={deleteMethod}>
            DELETE
          </span>
        </label>
        {showText && (
          <showText rows="15" cols="35" onChange={handleshowResult}></showText>
        )}
      </form>
    </>
  );
}

export default Form;






// import React from "react";
// import { useState } from "react";
// import axios from "axios"

// import "./form.scss";

// function Form(props) {
//   const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
//   const [method, setMethod] = useState("get");
//   const [showText, setShowText] = useState(false);
//   const [showResult, setShowrResult] = useState("")



//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const formData = await axios({
//         method: method,
//         url: url,
//       });
//       console.log("formData-->", formData)
//       props.handleApiCall(formData);
//     } catch (error) {
//       console.log(error.message);
//     }
//   }

//   function urlChange(e) {
//     e.preventDefault();
//     setUrl(e.target.value);
//   }

//   // function typeYourjson(e) {
//   //   e.preventDefault();
//   //   setType(e.target.value)
//   //   setMethod(e.target.id)
//   // }
//   function showTheResult(e) {
//     let data = JSON.parse(e.target.value);
//     setShowrResult(data);
//     console.log("data from show theresult--->",data)
//     console.log("data from show theresult--->")

      
//   }
//   function getMethod(e){
//     setMethod("get")
//     setShowText(false)
//   }
//   function postMethod(e){
//     setMethod("post");
//     setShowText(true)
//   }
//   function putMethod(e){
//     setMethod("put");
//     setShowText(true)

//   }
//   function deleteMethod(e){
//     setMethod("delete");
//     setShowText(false)
//   }






//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <label >
//           <span>URL: </span>
//           <input name='url' type='text' onChange={urlChange} />
//           <button type="submit" data-testid="submit">GO!</button>
//         </label>
//         <label className="methods">
//           <span id="get" onClick={getMethod}>GET</span>
//           <span id="post" onClick={postMethod}>POST</span>
//           <span id="put" onClick={putMethod} >PUT</span>
//           <span id="delete" onClick={deleteMethod} >DELETE</span>
//         </label>

//         {showResult && (
//           <showText rows="15" cols="35" onChange={(e)=>showTheResult(e)} placeholder="type your put and post dataJosn "></showText>
//         )}

//       </form>


//     </>

//   );
// }
// export default Form;