import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Shopping_cart } from "./Shopping_cart";

function Main_nav() {
  return (
    <section id="MainNavbar">
      <nav className="border-b-[3px] shadow-sm text-center justify-center">
        <div className="flex justify-between bg-white align-middle text-center text-gray-600 pl-[3rem] p-2 w-full">
          <div className="flex space-x-4 align-middle text-center">
            <span className="p-2">LOGO</span>
            <span className="p-2 font-medium transition duration-300 ease-in transform hover:translate-y-1">
              <NavLink to="/" rel="noopener noreferrer">
                HOME
              </NavLink>
            </span>
            <span className="p-2 font-medium relative group dropdown">
              <Link
                to="#"
                className="cursor-pointer hover:font-extrabold transition duration-300 ease-in transform hover:translate-x-1"
                rel="noopener noreferrer"
              >
                MEN
              </Link>
              <div className="absolute group-hover:grid hidden z-10 left-0 top-10 bg-white text-[#242424] shadow-2xl grid-rows-2 font-OpenSans grid-flow-col space-x-20 px-5 p-2 border-[2px]">
                <ul className="space-y-2 ml-auto py-2 w-max text-lg">
                  <li className="font-extrabold text-xl tracking-wider border-b-2 border-emerald-500">
                    DRESS SHOES
                  </li>
                  <li>
                    <Link to="/men/dress_shoes/oxfords" aria-label="Oxfords">
                      Oxfords
                    </Link>
                  </li>
                  <li>
                    <Link to="/men/dress_shoes/derbies" aria-label="Derbies">
                      Derbies
                    </Link>
                  </li>
                  <li>
                    <Link to="/men/dress_shoes/brogues" aria-label="Brogues">
                      Brogues
                    </Link>
                  </li>
                  <li>
                    <Link to="/men/dress_shoes/loafers" aria-label="Loafers">
                      Loafers
                    </Link>
                  </li>
                  <li>
                    <Link to="/men/dress_shoes/monk-straps" aria-label="Monk Straps">
                      Monk Straps
                    </Link>
                  </li>
                </ul>
                <ul className="space-y-2 ml-auto py-2 w-max text-lg">
                  <li className="font-extrabold text-xl tracking-wider border-b-2 border-emerald-500">
                    CASUAL SHOES
                  </li>
                  <li>
                    <Link to="/men/casual_shoes/sneakers" aria-label="Sneakers">
                      Sneakers
                    </Link>
                  </li>
                  <li>
                    <Link to="/men/casual_shoes/boat-shoes" aria-label="Boat Shoes">
                      Boat Shoes
                    </Link>
                  </li>
                  <li>
                    <Link to="/men/casual_shoes/espadrilles" aria-label="Espadrilles">
                      Espadrilles
                    </Link>
                  </li>
                  <li>
                    <Link to="/men/casual_shoes/moccasins" aria-label="Moccasins">
                      Moccasins
                    </Link>
                  </li>
                  <li>
                    <Link to="/men/casual_shoes/slip-ons" aria-label="Slip-Ons">
                      Slip-Ons
                    </Link>
                  </li>
                </ul>

                <ul className="space-y-2 ml-auto py-2 w-max text-lg">
                  <li className="font-extrabold text-xl tracking-wider border-b-2 border-emerald-500">
                    BOOTS
                  </li>
                  <li>
                    <Link to="/men/boots/ankle-boots" aria-label="Ankle Boots">
                      Ankle Boots
                    </Link>
                  </li>
                  <li>
                    <Link to="/men/boots/chelsea-boots" aria-label="Chelsea Boots">
                      Chelsea Boots
                    </Link>
                  </li>
                  <li>
                    <Link to="/men/boots/chukka-boots" aria-label="Chukka Boots">
                      Chukka Boots
                    </Link>
                  </li>
                  <li>
                    <Link to="/men/boots/work-boots" aria-label="Work Boots">
                      Work Boots
                    </Link>
                  </li>
                  <li>
                    <Link to="/men/boots/hiking-boots" aria-label="Hiking Boots">
                      Hiking Boots
                    </Link>
                  </li>
                </ul>

                <ul className="space-y-2 ml-auto py-2 w-max text-lg">
                  <li className="font-extrabold text-xl tracking-wider border-b-2 border-emerald-500">
                    SANDALS
                  </li>
                  <li>
                    <Link to="/men/sandals/flip-flops" aria-label="Flip Flops">
                      Flip Flops
                    </Link>
                  </li>
                  <li>
                    <Link to="/men/sandals/slide-sandals" aria-label="Slide Sandals">
                      Slide Sandals
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/men/sandals/fisherman-sandals"
                      aria-label="Fisherman Sandals"
                    >
                      Fisherman Sandals
                    </Link>
                  </li>
                </ul>

                <ul className="space-y-2 ml-auto py-2 w-max text-lg">
                  <li className="font-extrabold text-xl tracking-wider border-b-2 border-emerald-500">
                    ATHLETIC FOOTWEAR
                  </li>
                  <li>
                    <Link to="/men/athletic_footwear/running-shoes" aria-label="Running Shoes">
                      Running Shoes
                    </Link>
                  </li>
                  <li>
                    <Link to="/men/athletic_footwear/training-shoes" aria-label="Training Shoes">
                      Training Shoes
                    </Link>
                  </li>
                  <li>
                    <Link to="/men/athletic_footwear/basketball-shoes" aria-label="Basketball Shoes">
                      Basketball Shoes
                    </Link>
                  </li>
                  <li>
                    <Link to="/men/athletic_footwear/soccer-shoes" aria-label="Soccer Shoes">
                      Soccer Shoes
                    </Link>
                  </li>
                  <li>
                    <Link to="/men/athletic_footwear/tennis-shoes" aria-label="Tennis Shoes">
                      Tennis Shoes
                    </Link>
                  </li>
                </ul>

                <ul className="space-y-2 ml-auto py-2 w-max text-lg">
                  <li className="font-extrabold text-xl tracking-wider border-b-2 border-emerald-500">
                    FORMAL SHOES
                  </li>
                  <li>
                    <Link to="/men/formal_shoes/dress-boots" aria-label="Dress Boots">
                      Dress Boots
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/men/formal_shoes/patent-leather-shoes"
                      aria-label="Patent Leather Shoes"
                    >
                      Patent Leather Shoes
                    </Link>
                  </li>
                </ul>

                <ul className="space-y-2 ml-auto py-2 w-max text-lg">
                  <li className="font-extrabold text-xl tracking-wider border-b-2 border-emerald-500">
                    OUTDOOR SHOES
                  </li>
                  <li>
                    <Link to="/men/outdoor_shoes/hiking-boots-outdoor" aria-label="Hiking Boots">
                      Hiking Boots
                    </Link>
                  </li>
                  <li>
                    <Link to="/men/outdoor_shoes/trail-shoes" aria-label="Trail Shoes">
                      Trail Shoes
                    </Link>
                  </li>
                </ul>

                <ul className="space-y-2 ml-auto py-2 w-max text-lg">
                  <li className="font-extrabold text-xl tracking-wider border-b-2 border-emerald-500">
                    SLIPPERS
                  </li>
                  <li>
                    <Link to="/men/slippers/indoor-slippers" aria-label="Indoor Slippers">
                      Indoor Slippers
                    </Link>
                  </li>
                  <li>
                    <Link to="/men/slippers/outdoor-slippers" aria-label="Outdoor Slippers">
                      Outdoor Slippers
                    </Link>
                  </li>
                </ul>
              </div>
            </span>
            {/* WOMEN SECTION */}

            <span className="p-2 font-medium relative group dropdown">
              <NavLink
                to="#"
                className="cursor-pointer hover:font-extrabold transition duration-300 ease-in transform hover:translate-x-1"
                rel="noopener noreferrer"
              >
                WOMEN
              </NavLink>
              <div className="absolute group-hover:grid hidden z-10 left-0 top-10 bg-[#FEFBD8] text-[#242424] shadow-2xl grid-rows-2 font-OpenSans grid-flow-col space-x-20 px-5 p-2 border-[2px]">
                <ul className="space-y-2 ml-auto py-2 w-max text-lg">
                  <li className="font-extrabold text-xl tracking-wider border-b-2 border-emerald-500">
                    HEELS
                  </li>
                  <li>
                    <Link to="/women/heels/stilettos" aria-label="Stilettos">
                      Stilettos
                    </Link>
                  </li>
                  <li>
                    <Link to="/women/heels/kitten-heels" aria-label="Kitten Heels">
                      Kitten Heels
                    </Link>
                  </li>
                  <li>
                    <Link to="/women/heels/block-heels" aria-label="Block Heels">
                      Block Heels
                    </Link>
                  </li>
                  <li>
                    <Link to="/women/heels/wedges" aria-label="Wedges">
                      Wedges
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/women/heels/platform-heels"
                      aria-label="Platform Heels"
                    >
                      Platform Heels
                    </Link>
                  </li>
                </ul>

                <ul className="space-y-2 py-2 w-max px-2 text-lg">
                  <li className="font-extrabold text-xl tracking-wider border-b-2 border-emerald-500">
                    FLATS
                  </li>
                  <li>
                    <Link to="/women/flats/ballet-flats" aria-label="Ballet Flats">
                      Ballet Flats
                    </Link>
                  </li>
                  <li>
                    <Link to="/women/flats/loafers" aria-label="Loafers">
                      Loafers
                    </Link>
                  </li>
                  <li>
                    <Link to="/women/flats/espadrilles" aria-label="Espadrilles">
                      Espadrilles
                    </Link>
                  </li>
                  <li>
                    <Link to="/women/flats/moccasins" aria-label="Moccasins">
                      Moccasins
                    </Link>
                  </li>
                </ul>

                <ul className="space-y-2 py-2 w-max px-2 text-lg">
                  <li className="font-extrabold text-xl tracking-wider border-b-2 border-emerald-500">
                    BOOTS
                  </li>
                  <li>
                    <Link to="/women/boots/ankle-boots" aria-label="Ankle Boots">
                      Ankle Boots
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/women/boots/knee-high-boots"
                      aria-label="Knee-High Boots"
                    >
                      Knee-High Boots
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/women/boots/over-the-knee-boots"
                      aria-label="Over-the-Knee Boots"
                    >
                      Over-the-Knee Boots
                    </Link>
                  </li>
                  <li>
                    <Link to="/women/boots/chelsea-boots" aria-label="Chelsea Boots">
                      Chelsea Boots
                    </Link>
                  </li>
                  <li>
                    <Link to="/women/boots/combat-boots" aria-label="Combat Boots">
                      Combat Boots
                    </Link>
                  </li>
                </ul>

                <ul className="space-y-2 py-2 w-max px-2 text-lg">
                  <li className="font-extrabold text-xl tracking-wider border-b-2 border-emerald-500">
                    SANDALS
                  </li>
                  <li>
                    <Link
                      to="/women/sandals/gladiator-sandals"
                      aria-label="Gladiator Sandals"
                    >
                      Gladiator Sandals
                    </Link>
                  </li>
                  <li>
                    <Link to="/women/sandals/slide-sandals" aria-label="Slide Sandals">
                      Slide Sandals
                    </Link>
                  </li>
                  <li>
                    <Link to="/women/sandals/flip-flops" aria-label="Flip Flops">
                      Flip Flops
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/women/sandals/slingback-sandals"
                      aria-label="Slingback Sandals"
                    >
                      Slingback Sandals
                    </Link>
                  </li>
                </ul>

                <ul className="space-y-2 py-2 w-max px-2 text-lg">
                  <li className="font-extrabold text-xl tracking-wider border-b-2 border-emerald-500">
                    SNEAKERS
                  </li>
                  <li>
                    <Link to="/women/sneakers/running-shoes" aria-label="Running Shoes">
                      Running Shoes
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/women/sneakers/casual-sneakers"
                      aria-label="Casual Sneakers"
                    >
                      Casual Sneakers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/women/sneakers/high-top-sneakers"
                      aria-label="High-Top Sneakers"
                    >
                      High-Top Sneakers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/women/sneakers/slip-on-sneakers"
                      aria-label="Slip-On Sneakers"
                    >
                      Slip-On Sneakers
                    </Link>
                  </li>
                </ul>

                <ul className="space-y-2 py-2 w-max px-2 text-lg">
                  <li className="font-extrabold text-xl tracking-wider border-b-2 border-emerald-500">
                    FORMAL SHOES
                  </li>
                  <li>
                    <Link to="/women/formal_shoes/dress-shoes" aria-label="Dress Shoes">
                      Dress Shoes
                    </Link>
                  </li>
                  <li>
                    <Link to="/women/formal_shoes/pumps" aria-label="Pumps">
                      Pumps
                    </Link>
                  </li>
                </ul>

                <ul className="space-y-2 py-2 w-max px-2 text-lg">
                  <li className="font-extrabold text-xl tracking-wider border-b-2 border-emerald-500">
                    ATHLETIC <br /> FOOTWEAR
                  </li>
                  <li>
                    <Link
                      to="/women/athletic_footwear/training-shoes"
                      aria-label="Training Shoes"
                    >
                      Training Shoes
                    </Link>
                  </li>
                  <li>
                    <Link to="/women/athletic_footwear/hiking-boots" aria-label="Hiking Boots">
                      Hiking Boots
                    </Link>
                  </li>
                  <li>
                    <Link to="/women/athletic_footwear/walking-shoes" aria-label="Walking Shoes">
                      Walking Shoes
                    </Link>
                  </li>
                </ul>

                <ul className="space-y-2 py-2 w-max px-2 text-lg">
                  <li className="font-extrabold text-xl tracking-wider border-b-2 border-emerald-500">
                    SLIPPERS
                  </li>
                  <li>
                    <Link
                      to="/women/slippers/indoor-slippers"
                      aria-label="Indoor Slippers"
                    >
                      Indoor Slippers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/women/slippers/outdoor-slippers"
                      aria-label="Outdoor Slippers"
                    >
                      Outdoor Slippers
                    </Link>
                  </li>
                </ul>
              </div>
            </span>
            {/* KIDS SECTION */}
            <span className="p-2 font-medium relative group dropdown z-10 transition duration-300 ease-in transform hover:translate-x-1">
              <NavLink
                to="#"
                className="cursor-pointer hover:font-extrabold transition duration-300 ease-in transform hover:translate-x-1"
                rel="noopener noreferrer"
              >
                KIDS
              </NavLink>
              <div className="absolute group-hover:grid hidden z-10 left-0 top-10 bg-[#F0F5F9] text-[#242424] shadow-2xl grid-rows-2 font-OpenSans grid-flow-col space-x-20 px-5 p-2 border-[2px]">
                <ul className="space-y-2 ml-auto py-2 w-max text-lg">
                  <li className="font-extrabold text-xl tracking-wider border-b-2 border-emerald-500">
                    SPORTS SHOES
                  </li>
                  <li>
                    <Link to="/kids/sports_shoes/running-shoes" aria-label="Running Shoes">
                      Running Shoes
                    </Link>
                  </li>
                  <li>
                    <Link to="/kids/sports_shoes/training-shoes" aria-label="Training Shoes">
                      Training Shoes
                    </Link>
                  </li>
                  <li>
                    <Link to="/kids/sports_shoes/soccer-shoes" aria-label="Soccer Shoes">
                      Soccer Shoes
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/kids/sports_shoes/basketball-shoes"
                      aria-label="Basketball Shoes"
                    >
                      Basketball Shoes
                    </Link>
                  </li>
                </ul>

                <ul className="space-y-2 ml-auto py-2 w-max text-lg">
                  <li className="font-extrabold text-xl tracking-wider border-b-2 border-emerald-500">
                    CASUAL SHOES
                  </li>
                  <li>
                    <Link to="/kids/casual_shoes/sneakers" aria-label="Sneakers">
                      Sneakers
                    </Link>
                  </li>
                  <li>
                    <Link to="/kids/casual_shoes/slip-ons" aria-label="Slip-Ons">
                      Slip-Ons
                    </Link>
                  </li>
                  <li>
                    <Link to="/kids/casual_shoes/sandals" aria-label="Sandals">
                      Sandals
                    </Link>
                  </li>
                  <li>
                    <Link to="/kids/casual_shoes/flip-flops" aria-label="Flip Flops">
                      Flip Flops
                    </Link>
                  </li>
                </ul>

                <ul className="space-y-2 ml-auto py-2 w-max text-lg">
                  <li className="font-extrabold text-xl tracking-wider border-b-2 border-emerald-500">
                    SCHOOL SHOES
                  </li>
                  <li>
                    <Link
                      to="/kids/school_shoes/school-shoes-boys"
                      aria-label="School Shoes for Boys"
                    >
                      Boys
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/kids/school_shoes/school-shoes-girls"
                      aria-label="School Shoes for Girls"
                    >
                      Girls
                    </Link>
                  </li>
                </ul>

                <ul className="space-y-2 ml-auto py-2 w-max text-lg">
                  <li className="font-extrabold text-xl tracking-wider border-b-2 border-emerald-500">
                    BOOTS
                  </li>
                  <li>
                    <Link to="/kids/boots/ankle-boots" aria-label="Ankle Boots">
                      Ankle Boots
                    </Link>
                  </li>
                  <li>
                    <Link to="/kids/boots/winter-boots" aria-label="Winter Boots">
                      Winter Boots
                    </Link>
                  </li>
                  <li>
                    <Link to="/kids/boots/rain-boots" aria-label="Rain Boots">
                      Rain Boots
                    </Link>
                  </li>
                </ul>

                <ul className="space-y-2 ml-auto py-2 w-max text-lg">
                  <li className="font-extrabold text-xl tracking-wider border-b-2 border-emerald-500">
                    SLIPPERS
                  </li>
                  <li>
                    <Link
                      to="/kids/slippers/indoor-slippers"
                      aria-label="Indoor Slippers"
                    >
                      Indoor Slippers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/kids/slippers/outdoor-slippers"
                      aria-label="Outdoor Slippers"
                    >
                      Outdoor Slippers
                    </Link>
                  </li>
                </ul>

                <ul className="space-y-2 ml-auto py-2 w-max text-lg">
                  <li className="font-extrabold text-xl tracking-wider border-b-2 border-emerald-500">
                    FORMAL SHOES
                  </li>
                  <li>
                    <Link
                      to="/kids/formal_shoes/formal-shoes-boys"
                      aria-label="Formal Shoes for Boys"
                    >
                      Boys
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/kids/formal_shoes/formal-shoes-girls"
                      aria-label="Formal Shoes for Girls"
                    >
                      Girls
                    </Link>
                  </li>
                </ul>
              </div>
            </span>
            {/* Other Products */}

            <span className="p-2 font-medium relative group z-20 dropdown transition duration-300 ease-in transform hover:translate-x-1">
              <NavLink
                to="#"
                className="cursor-pointer hover:font-extrabold transition duration-300 ease-in transform hover:translate-x-1"
                rel="noopener noreferrer"
              >
                Others Products
              </NavLink>
              <div className="absolute group-hover:grid hidden z-10 left-0 top-10 bg-[#F1EAFF] text-[#242424] shadow-2xl grid-rows-2 font-OpenSans grid-flow-col space-x-20 px-5 p-2 border-[2px]">
                <ul className="space-y-2 ml-auto  py-2 w-max text-lg">
                  <li className="font-extrabold text-xl tracking-wider border-b-2 border-emerald-500">
                    FOOTWEAR ACCESSORIES
                  </li>
                  <li>
                    <Link
                      to="/other_product/footwear-accessories/shoe-laces"
                      aria-label="Shoe Laces"
                    >
                      Shoe Laces
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/other_product/footwear-accessories/insoles"
                      aria-label="Insoles"
                    >
                      Insoles
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/other_product/footwear-accessories/shoe-polish"
                      aria-label="Shoe Polish"
                    >
                      Shoe Polish
                    </Link>
                  </li>
                </ul>

                <ul className="space-y-2 m-auto py-2 w-max text-lg">
                  <li className="font-extrabold text-xl tracking-wider border-b-2 border-emerald-500">
                    FOOTWEAR CARE
                  </li>
                  <li>
                    <Link
                      to="/other_product/footwear-care/waterproof-sprays"
                      aria-label="Waterproof Sprays"
                    >
                      Waterproof Sprays
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/other_product/footwear-care/shoe-cleaners"
                      aria-label="Shoe Cleaners"
                    >
                      Shoe Cleaners
                    </Link>
                  </li>
                </ul>

                <ul className="space-y-2 ml-auto py-2 w-max text-lg">
                  <li className="font-extrabold text-xl tracking-wider border-b-2 border-emerald-500">
                    SOCKS
                  </li>
                  <li>
                    <Link to="/other_product/socks/casual-socks" aria-label="Casual Socks">
                      Casual Socks
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/other_product/socks/athletic-socks"
                      aria-label="Athletic Socks"
                    >
                      Athletic Socks
                    </Link>
                  </li>
                  <li>
                    <Link to="/other_product/socks/dress-socks" aria-label="Dress Socks">
                      Dress Socks
                    </Link>
                  </li>
                </ul>

                <ul className="space-y-2 ml-auto py-2 w-max text-lg">
                  <li className="font-extrabold text-xl tracking-wider border-b-2 border-emerald-500">
                    SHOE STORAGE
                  </li>
                  <li>
                    <Link to="/other_product/shoe-storage/shoe-racks" aria-label="Shoe Racks">
                      Shoe Racks
                    </Link>
                  </li>
                  <li>
                    <Link to="/other_product/shoe-storage/shoe-bags" aria-label="Shoe Bags">
                      Shoe Bags
                    </Link>
                  </li>
                </ul>
              </div>
            </span>
            <span className="p-2 font-medium transition
          duration-300
          ease-in
          transform
          hover:translate-x-1"><NavLink to="/gallery" rel="noopener noreferrer">Gallery</NavLink></span>
        </div>

        <div className="flex text-center space-x-4">
          <span className="p-2 text-center">
            <span className="material-symbols-outlined "> search </span>
            <input type="text" placeholder="search for products,brands and more,"
              className="border p-2 rounded-md w-[60vh]" />
          </span>
          <Link to="/my/Dashboard"><span className="p-2 flex"><span className="material-symbols-outlined"> person </span></span></Link>
          <Link><span className="p-2 flex"><span className="material-symbols-outlined"> favorite </span>
          </span></Link>
          <Shopping_cart/>
        </div>
      </div>
    </nav>
    </section>
  );
}

export default Main_nav;
