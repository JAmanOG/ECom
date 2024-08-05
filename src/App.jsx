import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Shoecategory from './Component/Categories/Men';

const App = () => (
  <Routes>
    <Route path="/:category/:subcategory/:subsubcategory" element={<Shoecategory />} />
  </Routes>
);

export default App;
// const googleAuth = async (e) => {
//     e.preventDefault();
//     AuthServices.account.createOAuth2Session(
//         "google",
//         "http://localhost:5173/nextpage",
//         "http://localhost:5173/login"
//         )}

// return (
//     <div className="container-xl my-3">
//         <button
//             className="btn btn-outline-danger my-1 mx-2"
//             onClick={googleAuth}>
//             Google
//         </button>

//     </div>
// );