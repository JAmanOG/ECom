import { useState, useRef, useEffect } from "react";
import CardCarousel from "./CardCarousel";
import Carousel from "./Carousel";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Shopping_cart from "../NavigationBar/MainBar/Shopping_cart";

const navigation = {
  categories: [
    {
      id: "men",
      name: "Men",
      featured: [
        {
          name: "New Arrivals",
          href: "/shop/new_arrival",
          imageSrc: "/src/assets/AICardsbanners/newArrivalM.png",
          imageAlt: "Image showing Link pair of dress shoes.",
        },
        {
          name: "Sports Collection",
          href: "/special/SportsCollectionMen",
          imageSrc: "/src/assets/AICardsbanners/sportsM.jpeg",
          imageAlt: "Image showing casual shoes.",
        },
        {
          name: "Formals Shoes",
          href: "/special/FormalCollection",
          imageSrc: "/src/assets/AICardsbanners/FormalsM.jpeg",
          imageAlt: "Image showing casual shoes.",
        },
      ],
      sections: [
        {
          id: "dress_shoes",
          name: "Dress Shoes",
          items: [
            { name: "Oxfords", href: "/shops/men/dress_shoes/oxfords" },
            { name: "Derbies", href: "/shops/men/dress_shoes/derbies" },
            { name: "Brogues", href: "/shops/men/dress_shoes/brogues" },
            { name: "Loafers", href: "/shops/men/dress_shoes/loafers" },
            { name: "Monk Straps", href: "/men/dress_shoes/monk-straps" },
          ],
        },
        {
          id: "casual_shoes",
          name: "Casual Shoes",
          items: [
            { name: "Sneakers", href: "/shops/men/casual_shoes/sneakers" },
            { name: "Boat Shoes", href: "/shops/men/boat-shoes" },
            { name: "Espadrilles", href: "/shops/men/espadrilles" },
            { name: "Moccasins", href: "/shops/men/moccasins" },
            { name: "Slip-Ons", href: "/shops/men/slip-ons" },
          ],
        },
        {
          id: "boots",
          name: "Boots",
          items: [
            { name: "Ankle Boots", href: "/shops/men/boots/ankle-boots" },
            { name: "Chelsea Boots", href: "/shops/men/boots/chelsea-boots" },
            { name: "Chukka Boots", href: "/shops/men/boots/chukka-boots" },
            { name: "Work Boots", href: "/shops/men/boots/work-boots" },
            { name: "Hiking Boots", href: "/shops/men/boots/hiking-boots" },
          ],
        },
        {
          id: "sandals",
          name: "Sandals",
          items: [
            { name: "Flip Flops", href: "/shops/men/sandals/flip-flops" },
            { name: "Slide Sandals", href: "/shops/men/sandals/slide-sandals" },
            {
              name: "Fisherman Sandals",
              href: "/shops/men/sandals/fisherman-sandals",
            },
          ],
        },
        {
          id: "athletic_footwear",
          name: "Athletic Footwear",
          items: [
            {
              name: "Running Shoes",
              href: "/shops/men/athletic_footwear/running-shoes",
            },
            {
              name: "Training Shoes",
              href: "/shops/men/athletic_footwear/training-shoes",
            },
            {
              name: "Basketball Shoes",
              href: "/shops/men/athletic_footwear/basketball-shoes",
            },
            {
              name: "Soccer Shoes",
              href: "/shops/men/athletic_footwear/soccer-shoes",
            },
            {
              name: "Tennis Shoes",
              href: "/shops/men/athletic_footwear/tennis-shoes",
            },
          ],
        },
        {
          id: "slippers",
          name: "Slippers",
          items: [
            {
              name: "Indoor Slippers",
              href: "/shops/men/slippers/indoor-slippers",
            },
            {
              name: "Outdoor Slippers",
              href: "/shops/men/slippers/indoor-slippers",
            },
          ],
        },
      ],
    },
    {
      id: "women",
      name: "Women",
      featured: [
        {
          name: "New Arrivals",
          href: "/special/NewArrivalWomen",
          imageSrc: "/src/assets/AICardsbanners/newArrivalW.png",
          imageAlt: "Image showing Link pair of heels.",
        },
        {
          name: "Heels Collection",
          href: "/special/HeelsCollection",
          imageSrc: "/src/assets/AICardsbanners/HeelsW.jpeg",
          imageAlt: "Image showing flats.",
        },
        {
          name: "Sports Collection",
          href: "/special/SportsCollectionWomen",
          imageSrc: "/src/assets/AICardsbanners/sportsW.jpeg",
          imageAlt: "Image showing flats.",
        },
      ],
      sections: [
        {
          id: "heels",
          name: "Heels",
          items: [
            { name: "Stilettos", href: "/shops/women/heels/stilettos" },
            { name: "Kitten Heels", href: "/shops/women/heels/kitten-heels" },
            { name: "Block Heels", href: "/shops/women/heels/block-heels" },
            { name: "Wedges", href: "/shops/women/heels/wedges" },
            {
              name: "Platform Heels",
              href: "/shops/women/heels/platform-heels",
            },
          ],
        },
        {
          id: "flats",
          name: "Flats",
          items: [
            { name: "Ballet Flats", href: "/shops/women/flats/ballet-flats" },
            { name: "Loafers", href: "/shops/women/flats/loafers" },
            { name: "Espadrilles", href: "/shops/women/flats/espadrilles" },
            { name: "Moccasins", href: "/shops/women/flats/moccasins" },
          ],
        },
        {
          id: "boots",
          name: "Boots",
          items: [
            { name: "Ankle Boots", href: "/shops//women/boots/ankle-boots" },
            {
              name: "Knee-High Boots",
              href: "/shops//women/boots/knee-high-boots",
            },
            {
              name: "Over-the-Knee Boots",
              href: "/shops//women/boots/over-the-knee-boots",
            },
            {
              name: "Chelsea Boots",
              href: "/shops//women/boots/chelsea-boots",
            },
            { name: "Combat Boots", href: "/shops//women/boots/combat-boots" },
          ],
        },
        {
          id: "sandals",
          name: "Sandals",
          items: [
            {
              name: "Gladiator Sandals",
              href: "/shops/women/sandals/gladiator-sandals",
            },
            {
              name: "Slide Sandals",
              href: "/shops/women/sandals/slide-sandals",
            },
            { name: "Flip Flops", href: "/shops/women/sandals/flip-flops" },
            {
              name: "Slingback Sandals",
              href: "/shops/women/sandals/slingback-sandals",
            },
          ],
        },
        {
          id: "sneakers",
          name: "Sneakers",
          items: [
            {
              name: "Running Shoes",
              href: "/shops//women/sneakers/running-shoes",
            },
            {
              name: "Casual Sneakers",
              href: "/shops//women/sneakers/casual-sneakers",
            },
            {
              name: "High-Top Sneakers",
              href: "/shops//women/sneakers/high-top-sneakers",
            },
            {
              name: "Slip-On Sneakers",
              href: "/shops//women/sneakers/slip-on-sneakers",
            },
          ],
        },
        {
          id: "athletic_footwear",
          name: "ATHLETIC FOOTWEAR",
          items: [
            {
              name: "Training Shoes",
              href: "/shops//women/athletic_footwear/training-shoes",
            },
            {
              name: "Hiking Boots",
              href: "/shops//women/athletic_footwear/hiking-boots",
            },
            {
              name: "Walking Shoes",
              href: "/shops//women/athletic_footwear/walking-shoes",
            },
          ],
        },
      ],
    },
    {
      id: "kids",
      name: "Kids",
      featured: [
        {
          name: "New Arrivals",
          href: "/special/NewArrivalKids",
          imageSrc: "/src/assets/AICardsbanners/newArrivalK.jpeg",
          imageAlt: "Image showing sports shoes for kids.",
        },
        {
          name: "Sport Shoes",
          href: "/special/SportsCollectionKids",
          imageSrc: "/src/assets/AICardsbanners/sportsK.jpeg",
          imageAlt: "Image showing casual shoes for kids.",
        },
        {
          name: "School Shoes",
          href: "/special/SchoolCollectionKids",
          imageSrc: "/src/assets/AICardsbanners/SchoolShoeK.png",
          imageAlt: "Image showing casual shoes for kids.",
        },
      ],
      sections: [
        {
          id: "sports_shoes",
          name: "Sports Shoes",
          items: [
            {
              name: "Running Shoes",
              href: "/shops/kids/sports_shoes/running-shoes",
            },
            {
              name: "Training Shoes",
              href: "/shops/kids/sports_shoes/training-shoes",
            },
            {
              name: "Soccer Shoes",
              href: "/shops/kids/sports_shoes/soccer-shoes",
            },
            {
              name: "Basketball Shoes",
              href: "/shops/kids/sports_shoes/basketball-shoes",
            },
          ],
        },
        {
          id: "casual_shoes",
          name: "Casual Shoes",
          items: [
            { name: "Sneakers", href: "/shops/kids/casual_shoes/sneakers" },
            { name: "Slip-Ons", href: "/shops/kids/casual_shoes/slip-ons" },
            { name: "Sandals", href: "/shops/kids/casual_shoes/sandals" },
            { name: "Flip Flops", href: "/shops/kids/casual_shoes/flip-flops" },
          ],
        },
        {
          id: "boots",
          name: "Boots",
          items: [
            { name: "Ankle Boots", href: "/shops/kids/boots/ankle-boots" },
            { name: "Winter Boots", href: "/shops/kids/boots/winter-boots" },
            { name: "Rain Boots", href: "/shops/kids/boots/rain-boots" },
          ],
        },
        {
          id: "school shoes",
          name: "SCHOOL SHOES",
          items: [
            {
              name: "Boys",
              href: "/shops/kids/school_shoes/school-shoes-boys",
            },
            {
              name: "Girls",
              href: "/shops/kids/school_shoes/school-shoes-girls",
            },
          ],
        },
      ],
    },
    {
      id: "other_products",
      name: "Other Products",
      featured: [
        {
          name: "Footwear Accessories",
          href: "#",
          imageSrc: "",
          imageAlt: "Image showing footwear accessories.",
        },
        {
          name: "Footwear Care",
          href: "#",
          imageSrc: "/src/assets/dummy-profile-pic-300x300-1.png",
          imageAlt: "Image showing footwear care products.",
        },
      ],
      sections: [
        {
          id: "footwear_accessories",
          name: "Footwear Accessories",
          items: [
            { name: "Shoe Laces", href: "#" },
            { name: "Insoles", href: "#" },
            { name: "Shoe Polish", href: "#" },
          ],
        },
        {
          id: "footwear_care",
          name: "Footwear Care",
          items: [
            { name: "Waterproof Sprays", href: "#" },
            { name: "Shoe Cleaners", href: "#" },
          ],
        },
        {
          id: "socks",
          name: "Socks",
          items: [
            { name: "Casual Socks", href: "#" },
            { name: "Athletic Socks", href: "#" },
            { name: "Dress Socks", href: "#" },
          ],
        },
        {
          id: "shoe_storage",
          name: "Shoe Storage",
          items: [
            { name: "Shoe Racks", href: "#" },
            { name: "Shoe Bags", href: "#" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "Gallery", href: "/gallery" },
    { name: "About Us", href: "/about" },
  ],
};

export default function Home() {
  const [dropdownOpen, setDropdownOpen] = useState(null); // Track active category dropdown
  const [copen, setCOpen] = useState(false);
  const [clicked, setClicked] = useState(false);

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggle = (categoryName) => {
    setDropdownOpen((prev) => (prev === categoryName ? null : categoryName));
  };
  
  const handleLinkClick = () => {
    setDropdownOpen(null);
  };

  const handleButtonClick = () => {
    setCOpen(true);
  };

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //       setDropdownOpen(null);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(null);
      }
    }
  
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  
  return (
    <>
      <div className="bg-white z-50">
        {/* Mobile menu */}
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          className="relative z-40 lg:hidden"
        >
          <DialogBackdrop className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0" />
          <div className="fixed inset-0 z-40 flex">
            <DialogPanel className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full">
              <div className="flex px-4 pb-2 pt-5">
                <button
                  type="button"
                  onClick={() => setOpen(!open)}
                  className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>
              {/* Mobile navigation... */}
            </DialogPanel>
          </div>
        </Dialog>

        <header className="relative bg-white">
          <nav
            aria-label="Top"
            className="mx-auto px-4 border-gray[#242424] border rounded-2xl shadow-2xl sm:px-6 lg:px-8"
          >
            <div className="border-b border-gray-200">
              <div className="flex h-16 items-center">
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                >
                  <span className="sr-only">Open menu</span>
                  <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                </button>

                {/* Logo */}
                <div className="ml-4 flex lg:ml-0">
                  <Link to="">
                    <span className="sr-only">Your Company</span>
                    LOGO
                  </Link>
                </div>

                {/* Flyout menus */}
                <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                  <div className="flex h-full space-x-8">
                    {navigation.categories.map((category) => (
                      <Popover key={category.name} className="flex">
                        <div className="relative flex">
                          <PopoverButton
                            onClick={() => handleToggle(category.name)}
                            className={`relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm focus:outline-none font-medium transition-colors duration-200 ease-out 
    ${
      dropdownOpen === category.name
        ? "border-indigo-600 text-indigo-600"
        : "border-transparent text-gray-700 hover:text-gray-800"
    }`}
                          >
                            {category.name}
                          </PopoverButton>
                        </div>

                        {dropdownOpen === category.name && (
                          <PopoverPanel
                            ref={dropdownRef}
                            className="absolute inset-x-0 top-full text-sm text-gray-500 transition z-30"
                          >
                            <div
                              className="absolute inset-0 top-1/2 bg-white shadow"
                              aria-hidden="true"
                            />
                            <div className="relative bg-white overflow-y-scroll scrollbar-hide">
                              <div className="mx-auto max-w-7xl px-8">
                                <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-8">
                                  <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                                    {category.featured.map((item, index) => (
                                      <div
                                        key={index}
                                        className={`relative group ${
                                          index === 0
                                            ? "md:col-span-2 w-full"
                                            : ""
                                        }`}
                                      >
                                        <img
                                          src={item.imageSrc}
                                          alt={item.imageAlt}
                                          className="w-full h-[22rem] object-fill rounded-lg shadow-md"
                                        />
                                        <Link to={item.href}>
                                          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg p-4">
                                            <div className="text-center text-white">
                                              <h3 className="text-xl font-bold mb-2">
                                                {item.name}
                                              </h3>
                                              <p className="text-sm">
                                                Shop now
                                              </p>
                                            </div>
                                          </div>
                                        </Link>
                                      </div>
                                    ))}
                                  </div>
                                  <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                    {category.sections.map((section) => (
                                      <div className="" key={section.name}>
                                        <p
                                          id={`${section.name}-heading`}
                                          className="font-medium text-xl text-gray-900"
                                        >
                                          {section.name}
                                        </p>
                                        <ul
                                          role="list"
                                          aria-labelledby={`${section.name}-heading`}
                                          className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                        >
                                          {section.items.map((item) => (
                                            <li
                                              key={item.name}
                                              className="flex text-lg"
                                            >
                                              <Link
                                                to={item.href}
                                                
                                                onClick={handleLinkClick}                                              className="hover:text-gray-800"
                                              >
                                                {item.name}
                                              </Link>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </PopoverPanel>
                        )}
                      </Popover>
                    ))}

                    {navigation.pages.map((page) => (
                      <Link
                        key={page.name}
                        to={page.href}
                        className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                      >
                        {page.name}
                      </Link>
                    ))}
                  </div>
                </PopoverGroup>

                <div className="ml-auto flex items-center">
                  {/* Search */}
                  <div className="flex lg:ml-6">
                    <Link
                      to=""
                      className="p-2 text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Search</span>
                      <MagnifyingGlassIcon
                        aria-hidden="true"
                        className="h-6 w-6"
                      />
                    </Link>
                  </div>
                  <div className="flex lg:ml-6">
                    <Link
                      to="/my/Wishlist"
                      className="p-2 text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Search</span>
                      <HeartIcon aria-hidden="true" className="h-6 w-6" />
                    </Link>
                  </div>
                  <div className="flex lg:ml-6">
                    <Link
                      to="/my/Dashboard"
                      className="p-2 text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Profile</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                        />
                      </svg>
                    </Link>
                  </div>

                  {/* Cart */}
                  <div className="ml-4 flow-root lg:ml-6">
                    <button
                      onClick={handleButtonClick}
                      className="group -m-2 flex items-center p-2 focus:outline-none"
                    >
                      <ShoppingBagIcon
                        aria-hidden="true"
                        className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      />
                      <Shopping_cart open={copen} setOpen={setCOpen} />
                      <span className="sr-only">items in cart, view bag</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}

// import React from 'react'

// function Home() {
//   return (
//     <div className="font-extrabold text-2xl py-8 flex justify-center">
//       Under Construction
//     </div>
//   )
// }

// export default Home
