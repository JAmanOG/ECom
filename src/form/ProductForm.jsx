import React, { useState } from 'react';
import { databases } from '../Services/database';
import conf from '../Services/conf';
import Drop from '../Component/Admin/Dropdown';

const ProductForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [Category, setCategory] = useState("");
  const [Footwear_Type, setFootwear_Type] = useState("");
  const [Variety, setVariety] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        'unique()',
        {
          name,
          price: parseFloat(price),
          Category,
          Footwear_Type,
          Variety,
        }
      );
      console.log('Product added:', response);
      setName('');
      setPrice('');
      setCategory('');
      setFootwear_Type('');
      setVariety('');
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Error adding product:', error);
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
        <Drop
        Category={Category}
        Footwear_Type={Footwear_Type}
        Variety={Variety}
        handleEntryCategory={(e) => setCategory(e.target.value)}
        handleCategoryChanges={(e) => setFootwear_Type(e.target.value)}
        handleSubcategoryChanges={(e) => setVariety(e.target.value)}
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700">Add Product</button>
    </form>
  );
};

export default ProductForm;
