// show list of every previous API call
//clicking on entry shows the full details of quiery in a separate section on the page: URL, Method, Body
//show button labeled re-run that will execute API call again, and shows home page with the form pre-filled

import React from 'react';
import './history-page.scss';

export default function HistoryPage() {
  return (
    <div>
      <h1>History Page</h1>
    </div>
  )
}

// export default function HistoryPage(props) {
//   // console.log(props.history);
//   return (
//     <div className="history-page">
//       <h1>History Page</h1> 
//         <p>History is here...</p>
//         <ul>
//           {props.history.map((item, idx) => 
//             <li key={idx}>
//               <span className={`method ${item.method}`}>{`${item.method}`}</span>
//               <button className='url-history'>{`${item.url}`}</button>
//             </li>
//           )}
//         </ul>
//     </div>
//   )
// }