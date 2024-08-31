export function MasonryGridGallery() {
    return (
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="grid gap-4">
          <div>
            <img
              className="h-full max-w-full rounded-lg object-cover object-center"
              src="src/assets/ProductGrid/product.jpg"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-full max-w-full rounded-lg object-cover object-center "
              src="src/assets/ProductGrid/product2.jpg"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-full max-w-full rounded-lg object-cover object-center"
              src="src/assets/ProductGrid/product4.jpg"
              alt="gallery-photo"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-full max-w-full rounded-lg object-cover object-center"
              src="src/assets/ProductGrid/product6.jpg"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-full max-w-full rounded-lg object-cover object-center"
              src="src/assets/ProductGrid/product10.jpg"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-full max-w-full rounded-lg object-cover object-center "
              src="src/assets/ProductGrid/product8.jpg"
              alt="gallery-photo"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-full max-w-full rounded-lg object-cover object-center"
              src="src/assets/ProductGrid/product9.jpg"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-full max-w-full rounded-lg object-cover object-center "
              src="src/assets/ProductGrid/product7.jpg"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-full max-w-full rounded-lg object-cover object-center"
              src="src/assets/ProductGrid/product5.jpg"
              alt="gallery-photo"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-full max-w-full rounded-lg object-cover object-center"
              src="src/assets/ProductGrid/product3.avif"
              alt="gallery-photo"
            />
          </div>
          <div>
            <img
              className="h-full max-w-full rounded-lg object-cover object-center"
              src="src/assets/ProductGrid/product1.jpg"
              alt="gallery-photo"
            />
          </div>
        </div>
      </div>
    );
  }