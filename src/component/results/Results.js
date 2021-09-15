import JSONPretty from 'react-json-pretty';
import './result.scss';
import 'react-json-pretty/themes/monikai.css';


function Results(props) {
  console.log("result/prposData",props.data)
  return (
    <>
      <section className="results">
        <div data-testid="results">
          {props.data ? (
            <>
              <JSONPretty id="json-pretty" data={props.data}></JSONPretty>
        
            </>
          ) : null}
        </div>
          {!props.data && (
          <div data-testid="loading" className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
      </section>
    </>
  );
}

export default Results;



