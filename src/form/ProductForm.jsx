// import React, { useState } from 'react';
// import { databases } from '../Services/database';
// import conf from '../Services/conf';
// import Drop from '../Component/Admin/Dropdown';

// const ProductForm = () => {
//   const [name, setName] = useState('');
//   const [price, setPrice] = useState('');
//   const [Category, setCategory] = useState("");
//   const [Footwear_Type, setFootwear_Type] = useState("");
//   const [Variety, setVariety] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await databases.createDocument(
//         conf.appwriteDatabaseId,
//         conf.appwriteCollectionId,
//         'unique()',
//         {
//           name,
//           price: parseFloat(price),
//           Category,
//           Footwear_Type,
//           Variety,
//         }
//       );
//       console.log('Product added:', response);
//       setName('');
//       setPrice('');
//       setCategory('');
//       setFootwear_Type('');
//       setVariety('');
//     } catch (error) {
//       console.error('Error adding product:', error);
//       alert('Error adding product:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 space-y-4 bg-white shadow-md rounded">
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2">Product Name:</label>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="w-full px-3 py-2 border rounded"
//           required
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm font-bold mb-2">Price:</label>
//         <input
//           type="number"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//           className="w-full px-3 py-2 border rounded"
//           required
//         />
//       </div>
//       <div className="mb-4">
//         <Drop
//         Category={Category}
//         Footwear_Type={Footwear_Type}
//         Variety={Variety}
//         handleEntryCategory={(e) => setCategory(e.target.value)}
//         handleCategoryChanges={(e) => setFootwear_Type(e.target.value)}
//         handleSubcategoryChanges={(e) => setVariety(e.target.value)}
//         />
//       </div>
//       <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700">Add Product</button>
//     </form>
//   );
// };

// export default ProductForm;


import React, { useState, useEffect } from 'react';
import { databases, appwriteService } from '../Services/database';
import conf from '../Services/conf';
import Drop from '../Component/Admin/Dropdown';
import Input from '../Component/ProductComponent/Input';

const ProductForm = ({ post }) => {
  const [name, setName] = useState('');
  const [featuredImage, setFeaturedImage] = useState('');
  const [price, setPrice] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState('');
  const [Category, setCategory] = useState('');
  const [Footwear_Type, setFootwear_Type] = useState('');
  const [Variety, setVariety] = useState('');

  // Calculate the discounted price whenever the price or discount percent changes
  useEffect(() => {
    if (price && discountPercent) {
      const discounted = (price - (price * discountPercent) / 100).toFixed(2);
      setDiscountedPrice(Math.floor((discounted)));
    } else {
      setDiscountedPrice('');
    }
  }, [price, discountPercent]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let featuredImageId = featuredImage;

      const imageFile = e.target.elements.featuredImage.files[0];

      // If a new image is uploaded, upload the file and get the ID
      if (imageFile) {
        const file = await appwriteService.uploadFile(imageFile);
        featuredImageId = file.$id;

        // If there was an existing image, delete it
        if (post && post.featuredImage) {
          await appwriteService.deleteFile(post.featuredImage);
        }
      }

      const data = {
        name,
        price: parseFloat(price),
        discountPercent: parseFloat(discountPercent),
        discountedPrice: (discountedPrice),
        Category,
        Footwear_Type,
        Variety,
        featuredImage: featuredImageId,
      };

      if (post) {
        // Update existing post
        await appwriteService.updatePost(post.$id, data);
      } else {
        // Create new document in the database
        await databases.createDocument(
          conf.appwriteDatabaseId,
          conf.appwriteCollectionId,
          'unique()',
          data
        );
      }

      console.log('Product added/updated successfully');
      setName('');
      setPrice('');
      setDiscountPercent('');
      setDiscountedPrice('');
      setCategory('');
      setFootwear_Type('');
      setVariety('');
      setFeaturedImage('');

    } catch (error) {
      console.error('Error adding/updating product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 space-y-4 bg-white shadow-md rounded">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Product Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Discount Percent:</label>
        <input
          type="number"
          value={discountPercent}
          onChange={(e) => setDiscountPercent(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Discounted Price:</label>
        <input
          type="number"
          value={discountedPrice}
          readOnly
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <Drop
          Category={Category}
          Footwear_Type={Footwear_Type}
          Variety={Variety}
          handleEntryCategory={(e) => setCategory(e.target.value)}
          handleCategoryChanges={(e) => setFootwear_Type(e.target.value)}
          handleSubcategoryChanges={(e) => setVariety(e.target.value)}
        />
      </div>
      <div>
        <Input
          label="Featured Image :"
          type="file"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          name="featuredImage"
        />
        {post && post.featuredImage && (
          <div className="w-full mb-4">
            <img
              src={appwriteService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-lg"
            />
          </div>
        )}
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700">
        {post ? 'Update Product' : 'Add Product'}
      </button>
    </form>
  );
};

export default ProductForm;
