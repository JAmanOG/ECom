import React from "react";
export function FeaturedImageGallery() {
  const data = [
    {
      imgelink:
        "src/assets/banner/Sports_Shoes_Banner.webp",
    },
    {
      imgelink:
        "/src/assets/AIBanner/bannerAI-Cover.jpeg",
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
        "/src/assets/AIBanner/bannerAI-3.jpeg",
    },
    
  ];
 
  const [active, setActive] = React.useState(
    "/src/assets/AIBanner/bannerAICoverPage.jpeg",
  );
 
  return (
    <div className="grid gap-4">
  <div className="relative w-full h-0 pb-[50.25%]">
  <img
    className="absolute top-0 left-0 w-full h-full object-fill rounded-lg"
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
              className="h-20 max-w-3xl cursor-pointer rounded-lg object-cover object-center "
              alt="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}