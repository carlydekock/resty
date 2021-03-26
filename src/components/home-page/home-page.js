// add simple history list to the left side of application
//Completely hide the output area (headers&results) when there are none to display
// display any errors in place of the results area if they occur
// add a "loading" indicator while fetching

// import React from 'react';
// import './home-page.scss'

// class Home extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {

//     }
//   }

//   render() {
//     return (
//       <div className="home-page">
//         {this.props.history.map((item, idx) => 
//           <li key={idx}>
//             <span className={`method ${item.method}`}>{`${item.method}`}</span>
//             <button className='url-history'>{`${item.url}`}</button>
//           </li>
//           )}
//       </div>
//     )
//   }
// }

// export default Home;

import React from 'react';
import './home-page.scss';

export default function Home() {
  return (
    <div>
      <h1>Home</h1> 
        <p>Home is here...</p>     
    </div>
  )
}