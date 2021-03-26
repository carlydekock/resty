import React from 'react';
import './results.scss';

import JSONPretty from 'react-json-pretty';


export default function Results(props) {
  if (props.show) {
    return (
      <article>
        <ul className="selected-methods">
          <li></li>
        </ul>
        <ul>
          <li>Count</li>
          <li><JSONPretty id="json-pretty" data={props.data.count}></JSONPretty></li>
          {/* {this.state.methods.map((method) => <li>{method}</li>)} */}
          {/* {console.log(props.data.api[0])} */}
          {/* {props.data.methods.map((method, index) => <li key={index}>{method}</li>)} */}
          {/* {props.data.api.map((data, index) => <li key={index}>{data.name}</li>)} */}
          {/* </ul>
      <ul className="selected-urls"> */}
          {/* {this.state.urls.map((url) => <li>{url}</li>)} */}
          {/* {props.data.urls.map((url, index) => <li key={index}>{url}</li>)} */}
          {/* {props.data.api.map((data, index) => <li key={index}>{data.url}</li>)} */}
          <li>Headers</li>
          <li><JSONPretty id="json-pretty" data={props.data.headers}></JSONPretty></li>
          <li>Results</li>
          <li><JSONPretty id="json-pretty" data={props.data.body}></JSONPretty></li>
        </ul>
      </article>
    )
  } else {
    return null;
  }
}
