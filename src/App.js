import React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import Form from './component/form/Form';
import Results from './component/results/Results';

function App(props) {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [body, setbody] = useState("");

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

        }
      }
      getData();
    } catch (error) {
      console.log(error.message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <Results data={data} />
      <Footer />
    </React.Fragment>
  );
}

export default App;