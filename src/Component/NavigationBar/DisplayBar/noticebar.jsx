// import React from "react";
// import { Link } from "react-router-dom";
// import LogoutButton from "../../../authentication/logoutbtn";
// import { useSelector } from "react-redux"; // Assuming you are using Redux for state management

// function Noticebar() {
//   // Use useSelector to get authentication status from the Redux store
//   const isAuthenticated = useSelector((state) => state.auth.status);

//   return (
//     <section id="displaybar">
//       <div className="flex text-sm pr-6 justify-between bg-black text-white pl-[3rem] p-2 w-full">
//         <span className="p-2 align-middle">
//           Free shipping, 30-day return or refund guarantee.
//         </span>
//         <div className="bg-black flex">
//           <span className="p-2">
//             {!isAuthenticated ? (
//               <>
//                 <Link to="/login" rel="noopener noreferrer">
//                   SIGN IN
//                 </Link>
//                 <span className="p-2">
//                   <Link to="/signup" rel="noopener noreferrer">
//                     SIGN UP
//                   </Link>
//                 </span>
//               </>
//             ) : null}
//           </span>
//           <span className="p-2">
//             {isAuthenticated && <LogoutButton />}{" "}
//             {/* Show logout button only when authenticated */}
//           </span>
//           <span className="p-2">
//             <Link to="/faq" rel="noopener noreferrer">
//               FAQS
//             </Link>
//           </span>
//           <div className="relative p-2 inline-block text-left dropdown"></div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Noticebar;

import React from "react";
import { Link } from "react-router-dom";
import LogoutButton from "../../../authentication/logoutbtn";
import { useSelector } from "react-redux"; // Ensure you're using Redux for state management

const Noticebar = () => {
  // Get authentication status from the Redux store
  const isAuthenticated = useSelector((state) => state.auth.status);

  return (
    <section id="displaybar">
      <div className="flex text-sm pr-6 justify-between bg-black text-white pl-12 p-2 w-full">
        <span className="p-2 align-middle">
          Free shipping, 30-day return or refund guarantee.
        </span>
        <div className="flex">
          {/* Conditional rendering for SIGN IN link */}
          {!isAuthenticated && (
            <>
            <span className="p-2">
              <Link to="/login" rel="noopener noreferrer" className="hover:underline">
                SIGN IN
              </Link>
            </span>
            <span className="p-2">
            <Link to="/signup" rel="noopener noreferrer" className="hover:underline">
              SIGN UP
            </Link>
          </span>
          </>

          )}

          {/* SIGN UP link */}
          

          {/* Conditional rendering for LogoutButton */}
          {isAuthenticated && (
            <span className="p-2">
              <LogoutButton />
            </span>
          )}

          {/* FAQ link */}
          <span className="p-2">
            <Link to="/faq" rel="noopener noreferrer" className="hover:underline">
              FAQS
            </Link>
          </span>

          {/* Dropdown or additional options can be added here */}
          <div className="relative p-2 inline-block text-left dropdown"></div>
        </div>
      </div>
    </section>
  );
};

export default Noticebar;
