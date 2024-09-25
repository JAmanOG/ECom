import React from "react";
import { FeaturedImageGallery } from "./FeaturedGallery";
import { GalleryWithTab } from "./GalleryWithTab";
import { MasonryGridGallery } from "./MasonryGridGallery";
import DCard from "./3DParallax/3DCard";

function Gallery() {
  return (
    <div className="space-y-3">
       <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <DCard />
    </div>
      {/* <div className="m-3 border shadow-xl p-4  ">
        <GalleryWithTab />
      </div> */}
      <div className="m-3 border shadow-xl p-4  ">
        <FeaturedImageGallery />
      </div>
      <div className="m-3 border shadow-xl p-4  ">
        <MasonryGridGallery />
      </div>
    </div>
  );
}

export default Gallery;
