import React from "react";
export function FeaturedImageGallery() {
  const data = [
    {
      imgelink:
        "src/assets/banner/Sports_Shoes_Banner.webp",
    },
    {
      imgelink:
        "src/assets/banner/banner1.jpg",
    },
    {
      imgelink:
        "src/assets/banner/banner2.webp",
    },
    {
      imgelink:
        "src/assets/banner/banner3.webp",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    },
  ];
 
  const [active, setActive] = React.useState(
    "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  );
 
  return (
    <div className="grid gap-4">
  <div className="relative w-full h-0 pb-[50.25%]">
  <img
    className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
    src={active}
    alt=""
  />
</div>


      <div className="grid grid-cols-5 gap-4">
        {data.map(({ imgelink }, index) => (
          <div key={index}>
            <img
              onClick={() => setActive(imgelink)}
              src={imgelink}
              className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
              alt="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}