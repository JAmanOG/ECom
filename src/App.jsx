// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Shoecategory from "./Component/Categories/Categories";
// import Gallery from "./Component/Gallery/Gallery";
// import TagsRoutes from "./Component/CategoryRoutes/TagsRoutes";
// import HomePage from "./Component/Landingpage/HomePage";

// const App = () => (
//   <Routes>
//     <Route
//       path="/shops/:category([a-zA-Z-]+)?/:subcategory([a-zA-Z-]+)?/:subsubcategory([a-zA-Z-]+)?"
//       element={<Shoecategory />}
//     />
//     <Route
//       path="/shop/:tag"
//       element={
//           <TagsRoutes />
//       }
//     />
//     <Route path="/" element={<HomePage />} />
//     <Route path="/gallery" element={<Gallery />} />
//   </Routes>
// );

// export default App;

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

import React from "react";
import { Routes, Route } from "react-router-dom";
import Shoecategory from "./Component/Categories/Categories";
import Gallery from "./Component/Gallery/Gallery";
import TagsRoutes from "./Component/CategoryRoutes/TagsRoutes";
import HomePage from "./Component/Landingpage/HomePage";

const App = () => (
  <Routes>
  {/* Product Listing Pages (less specific) */}
  <Route
    path="/shops/:category/:subcategory/:subsubcategory"
    element={<Shoecategory />}
  />
  <Route
    path="/shops/:category/:subcategory"
    element={<Shoecategory />}
  />
  <Route
    path="/shops/:category"
    element={<Shoecategory />}
  />

    <Route path="/shop/:tag" element={<TagsRoutes />} />
    <Route path="/" element={<HomePage />} />
    <Route path="/gallery" element={<Gallery />} />
  </Routes>
);

export default App;
