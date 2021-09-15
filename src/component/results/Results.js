import React from 'react';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';

function Results(props) {

  return (
    <section data-testid="result"  >
      {props.data &&
        <JSONPretty data={props.data} ></JSONPretty>
      }
    </section>
  );

}

export default Results;