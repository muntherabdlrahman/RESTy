import React, { useState, useEffect, useReducer } from "react";

import "./app.scss";
import axios from "axios";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import Form from "./component/form/Form";
import Results from "./component/results/index";
import History from "./component/history/index";
import {initialState} from "./component/history/Reducer"
import {historyReducer} from "./component/history/Reducer"
import {addAction} from "./component/history/Reducer"




function App(props) {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [body, setbody] = useState("");
  const [state, dispatch] = useReducer(historyReducer, initialState);

  // const [state,]
  useEffect(() => {
    try {
      async function getData() {
        if (requestParams.url) {
          const response = await axios({
            method: requestParams.method,
            url: requestParams.url,
            data: body,
          });
          setData(response);
          dispatch(addAction(requestParams));
        }
      }
      getData();
    } catch (error) {
      console.log(error.message);
    }
  }, [requestParams]);

  async function callApi(data) {
    console.log(data);
    if (data.url !== "") {
      setRequestParams(data);
      setbody(data.request);
    } else {
      const response = {
        count: 2,
        results: [
          { name: "fake thing 1", url: "http://fakethings.com/1" },
          { name: "fake thing 2", url: "http://fakethings.com/2" },
        ],
      };
      setData({ response });
      setRequestParams(data);
      dispatch(addAction(data));
    }
  }

  return (
    <React.Fragment>
      <Header />
      <div className="info">
        <div>
          <span>Request Method:</span> {requestParams.method}
        </div>
        <div>
          <span>URL:</span> {requestParams.url}
        </div>
      </div>
      <Form handleApiCall={callApi} />
      {<History history={state.history} handleApiCalls={callApi}/>}
      <Results data={data} />
      <Footer />
    </React.Fragment>
  );
}

export default App;