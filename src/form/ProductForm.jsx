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
  const [Tags, setTags] = useState('');

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
        Tags,
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
      setTags('');

    } catch (error) {
      console.error('Error adding/updating product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-8 bg-gray-900 text-white rounded-lg shadow-lg">
  <h2 className="text-4xl font-semibold mb-8 text-center border-b-2 border-gray-700 pb-4">Product Management</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>
      <label className="block text-sm font-medium text-gray-400 mb-2">Product Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
        placeholder="Enter product name"
        required
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-400 mb-2">Price</label>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
        placeholder="Enter price"
        required
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-400 mb-2">Discount Percent</label>
      <input
        type="number"
        value={discountPercent}
        onChange={(e) => setDiscountPercent(e.target.value)}
        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
        placeholder="Enter discount percent"
        required
      />
    </div>
    {price && discountPercent && (
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-2">Discounted Price</label>
        <input
          type="number"
          value={discountedPrice}
          readOnly
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg cursor-not-allowed"
        />
      </div>
    )}
  </div>

  <div className="mt-8">
    {/* <label className="block text-sm font-medium text-gray-400 mb-2">Select Category</label> */}
    <Drop
      Category={Category}
      Footwear_Type={Footwear_Type}
      Variety={Variety}
      Tags={Tags}
      handleEntryCategory={(e) => setCategory(e.target.value)}
      handleCategoryChanges={(e) => setFootwear_Type(e.target.value)}
      handleSubcategoryChanges={(e) => setVariety(e.target.value)}
      handleTagsChanges={(e) => setTags(e.target.value)}
      className="bg-gray-800 border border-gray-700 rounded-lg text-gray-300"
    />
  </div>

  <div className="mt-8">
    <label className="block text-sm font-medium text-gray-400 mb-2">Featured Image</label>
    <Input
      type="file"
      accept="image/png, image/jpg, image/jpeg, image/gif"
      name="featuredImage"
      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg cursor-pointer text-gray-300"
    />
    {post && post.featuredImage && (
      <div className="mt-4">
        <img
          src={appwriteService.getFilePreview(post.featuredImage)}
          alt={post.title}
          className="w-full h-auto rounded-lg shadow-lg border border-gray-600"
        />
      </div>
    )}
  </div>

  <div className="mt-8 text-center">
    <button
      type="submit"
      className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-blue-500"
    >
      {post ? 'Update Product' : 'Add Product'}
    </button>
  </div>
</form>


  );
};

export default ProductForm;
