import { useState } from "react";
import axios from "axios";
import "./form.scss";

function Form(props) {
  const [type, settype] = useState(false);
  const [method, setMethod] = useState("get");
  const [URL, setURL] = useState("");
  const [showResult, setshowResult] = useState("");

  const handleSubmit =async (e) => {
    e.preventDefault();
    try {
      const formData = await axios({
        method: method,
        url: URL,
      });
      props.handleApiCall(formData, showResult);
    } catch (error) {
      console.log(error.message);
    }
  };

  const URLHandler = (e) => {
    setURL(e.target.value);
  };

  const methodHandler = (e) => {
    setMethod(e.target.id);
    settype(false);
  };

  const typeHandler = (e) => {
    settype(true);
    setMethod(e.target.id);
  };

  const showResultHandler = (e) => {
    setshowResult(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input name="url" type="text" onChange={URLHandler} />
          <button type="submit"  data-testid="submit">GO!</button>
        </label>
        <label className="methods">
          <span id="get" onClick={methodHandler}>
            GET
          </span>
          <span id="post" onClick={typeHandler}>
            POST
          </span>
          <span id="put" onClick={typeHandler}>
            PUT
          </span>
          <span id="delete" onClick={methodHandler}>
            DELETE
          </span>
        </label>
        {type && (
          <type rows="15" cols="35" onChange={showResultHandler}></type>
        )}
      </form>
    </>
  );
}

export default Form;