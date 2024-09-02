import React, { useState } from 'react';
import { useProduct } from './ProductContext';
import { appwriteService } from '../../Services/database';


const ManageProduct = () => {
  const [editableProductId, setEditableProductId] = useState(null);
  const [productEdits, setProductEdits] = useState({});
  const [selectedProducts, setSelectedProducts] = useState([]);
  const { products, updateProduct, deleteProduct } = useProduct();

  const handleEdit = async (productId) => {
    try {
      const updates = productEdits[productId] || {};
      await updateProduct(productId, updates);
      setEditableProductId(null);
      setProductEdits((prev) => ({
        ...prev,
        [productId]: {},
      }));
    } catch (error) {
      console.error('Failed to update product:', error);
    }
  };

  const handleChange = (e, productId, field) => {
    const value = e.target.value;
    setProductEdits((prevEdits) => ({
      ...prevEdits,
      [productId]: {
        ...prevEdits[productId],
        [field]: value,
      },
    }));
  };

  const toggleSelectProduct = (productId) => {
    setSelectedProducts((prevSelected) =>
      prevSelected.includes(productId)
        ? prevSelected.filter((id) => id !== productId)
        : [...prevSelected, productId]
    );
  };

  const deleteProductsBatch = async (productIds) => {
    try {
      if (window.confirm(`Are you sure you want to delete the selected products?`)) {
        const deletePromises = productIds.map((id) => deleteProduct(id));
        await Promise.all(deletePromises);
        setSelectedProducts([]);
      }
    } catch (error) {
      console.error('Failed to delete products:', error);
    }
  };

  const handleDelete = async (productId) => {
    try {
      if (window.confirm(`Are you sure you want to delete this product?`)) {
        await deleteProduct(productId);
      }
    } catch (error) {
      console.error('Failed to delete product:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search in products"
          className="border rounded-md px-4 py-2 w-1/2"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
          + Add Product
        </button>
      </div>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b text-left">
              <input
                type="checkbox"
                onChange={(e) =>
                  setSelectedProducts(
                    e.target.checked ? products.map((p) => p.$id) : []
                  )
                }
              />
            </th>
            <th className="px-6 py-3 border-b text-left">#</th>
            <th className="px-6 py-3 border-b text-left">Product</th>
            <th className="px-6 py-3 border-b text-left">Category</th>
            <th className="px-6 py-3 border-b text-left">Footwear Type</th>
            <th className="px-6 py-3 border-b text-left">Variety</th>
            <th className="px-6 py-3 border-b text-left">Price</th>
            <th className="px-6 py-3 border-b text-left">Discount %</th>
            <th className="px-6 py-3 border-b text-left">Discounted Price</th>
            <th className="px-6 py-3 border-b text-left">Tags</th>
            <th className="px-6 py-3 border-b text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan="11" className="text-center py-4">
                No products available
              </td>
            </tr>
          ) : (
            products.map((product, index) => (
              <tr key={product.$id} className="hover:bg-gray-100">
                <td className="px-6 py-4 border-b">
                  <input
                    type="checkbox"
                    checked={selectedProducts.includes(product.$id)}
                    onChange={() => toggleSelectProduct(product.$id)}
                  />
                </td>
                <td className="px-6 py-4 border-b">{index + 1}</td>
                <td className="px-6 py-4 border-b flex items-center">
                  <img
                    src={appwriteService.getFilePreview(product.featuredImage)} // Adjust if necessary
                    alt={product.name}
                    className="w-10 h-10 mr-4 object-cover"
                  />
                  <input
                    type="text"
                    className={`border outline-none w-max bg-transparent rounded-lg ${
                      editableProductId === product.$id
                        ? 'border-black/10 px-2'
                        : 'border-transparent'
                    }`}
                    value={productEdits[product.$id]?.name || product.name}
                    onChange={(e) => handleChange(e, product.$id, 'name')}
                    readOnly={editableProductId !== product.$id}
                  />
                </td>
                <td className="px-6 py-4 border-b">
                  <input
                    type="text"
                    className={`border outline-none w-full bg-transparent rounded-lg ${
                      editableProductId === product.$id
                        ? 'border-black/10 px-2'
                        : 'border-transparent'
                    }`}
                    value={productEdits[product.$id]?.Category || product.Category || ''}
                    onChange={(e) => handleChange(e, product.$id, 'Category')}
                    readOnly={editableProductId !== product.$id}
                  />
                </td>
                <td className="px-6 py-4 border-b">
                  <input
                    type="text"
                    className={`border outline-none w-full bg-transparent rounded-lg ${
                      editableProductId === product.$id
                        ? 'border-black/10 px-2'
                        : 'border-transparent'
                    }`}
                    value={productEdits[product.$id]?.Footwear_Type || product.Footwear_Type || ''}
                    onChange={(e) => handleChange(e, product.$id, 'Footwear_Type')}
                    readOnly={editableProductId !== product.$id}
                  />
                </td>
                <td className="px-6 py-4 border-b">
                  <input
                    type="text"
                    className={`border outline-none w-full bg-transparent rounded-lg ${
                      editableProductId === product.$id
                        ? 'border-black/10 px-2'
                        : 'border-transparent'
                    }`}
                    value={productEdits[product.$id]?.Variety || product.Variety || ''}
                    onChange={(e) => handleChange(e, product.$id, 'Variety')}
                    readOnly={editableProductId !== product.$id}
                  />
                </td>
                <td className="px-6 py-4 border-b">
                  <input
                    type="number"
                    className={`border outline-none w-full bg-transparent rounded-lg ${
                      editableProductId === product.$id
                        ? 'border-black/10 px-2'
                        : 'border-transparent'
                    }`}
                    value={productEdits[product.$id]?.price || product.price || ''}
                    onChange={(e) => handleChange(e, product.$id, 'price')}
                    readOnly={editableProductId !== product.$id}
                  />
                </td>
                <td className="px-6 py-4 border-b">
                  <input
                    type="number"
                    className={`border outline-none w-full bg-transparent rounded-lg ${
                      editableProductId === product.$id
                        ? 'border-black/10 px-2'
                        : 'border-transparent'
                    }`}
                    value={productEdits[product.$id]?.discountPercent || product.discountPercent || ''}
                    onChange={(e) => handleChange(e, product.$id, 'discountPercent')}
                    readOnly={editableProductId !== product.$id}
                  />
                </td>
                <td className="px-6 py-4 border-b">
                  <input
                    type="number"
                    className={`border outline-none w-full bg-transparent rounded-lg ${
                      editableProductId === product.$id
                        ? 'border-black/10 px-2'
                        : 'border-transparent'
                    }`}
                    value={productEdits[product.$id]?.discountedPrice || product.discountedPrice || ''}
                    onChange={(e) => handleChange(e, product.$id, 'discountedPrice')}
                    readOnly={editableProductId !== product.$id}
                  />
                </td>
                <td className="px-6 py-4 border-b">
                  <input
                    type="text"
                    className={`border outline-none max-w-[8rem] bg-transparent rounded-lg ${
                      editableProductId === product.$id
                        ? 'border-black/10 px-2'
                        : 'border-transparent'
                    }`}
                    value={productEdits[product.$id]?.Tags || product.Tags || ''}
                    onChange={(e) => handleChange(e, product.$id, 'Tags')}
                    readOnly={editableProductId !== product.$id}
                  />
                </td>
                <td className="px-6 py-4 border-b">
                  <div className="flex items-center space-x-2">
                    {editableProductId === product.$id ? (
                      <>
                        <button
                          onClick={() => handleEdit(product.$id)}
                          className="text-green-500 hover:text-green-700"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setEditableProductId(null)}
                          className="text-red-500 hover:text-red-700"
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => setEditableProductId(product.$id)}
                          className="text-blue-500 hover:text-blue-700"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(product.$id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      {selectedProducts.length > 0 && (
        <div className="mt-4">
          <button
            onClick={() => deleteProductsBatch(selectedProducts)}
            className="bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Delete Selected
          </button>
        </div>
      )}
    </div>
  );
};

export default ManageProduct;
