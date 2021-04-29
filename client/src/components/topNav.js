import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

// class TopNav extends Component {
//   render() {
//     return <div>

//         <div>Victoria Lee</div>

//         <ul>
//            <li>Selected Works</li>
//            <li>About</li> 
//            <li>Press</li>
//         </ul>

//         </div>
//   }
// }

function TopNav() {

  return (

    <div>

      <div>Victoria Lee</div>

      <Link> Selected Works </Link>

      <Link> About </Link>

      <Link> Press </Link>

    </div>

  )

}

export default TopNav;
