import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Shoecategory from './Component/Categories/Categories';
import Home from './Component/Landingpage/Home';
import Gallery from './Component/Gallery/Gallery';
// import AuthServices from './Services/auth';

// const result = AuthServices.getCurrentUser()
// result ? console.log(result) : console.log('No user logged in')
// const session = AuthServices.getCurrentSession()
// session ? console.log(session) : console.log('No session found')

const App = () => (
  <Routes>
    <Route path="/:category/:subcategory/:subsubcategory" element={<Shoecategory />} />
    <Route path="/" element={<Home />} />
    <Route path="/gallery" element={<Gallery />} />
    
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