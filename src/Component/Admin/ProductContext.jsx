import React, { createContext, useContext, useState, useEffect } from 'react';
import { databases, getAllProductDetails } from '../../Services/database';
import conf from '../../Services/conf';

// Create Product Context
export const ProductContext = createContext({
  products: [],
  addProduct: (product) => {},
  updateProduct: (id, product) => {},
  deleteProduct: (id) => {},
  updateProductsBatch: (updates) => {},
});

// Custom hook to use Product Context
export const useProduct = () => {
  return useContext(ProductContext);
};

// Provider component for Product Context
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // For handling loading state
  const [error, setError] = useState(null); // For handling errors

  useEffect(() => {
    console.log('Fetching initial products...');
    const fetchInitialProducts = async () => {
      try {
        const response = await getAllProductDetails();
        console.log('Fetched products:', response);
        setProducts(response);
      } catch (error) {
        console.error('Failed to fetch products:', error);
        setError(error.message || 'Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };
  
    fetchInitialProducts();
  }, []);

  const addProduct = (product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  const updatePost = async (id, updates) => {
    try {
      await databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteProductCollectionId, // Replace with your collection ID
        id,
        updates // Pass the updated fields in an object
      );
    } catch (error) {
      console.error("Appwrite service :: updatePost :: error", error);
      throw error; // Throw error for consistent error handling
    }
  };

  const updateProduct = async (id, updatedProduct) => {
    try {
      await updatePost(id, updatedProduct);
      setProducts(prevProducts =>
        prevProducts.map(product => (product.$id === id ? { ...product, ...updatedProduct } : product))
      );
    } catch (error) {
      console.error('Failed to update product:', error);
      setError(error.message || 'Failed to update product');
    }
  };

  const updateProductsBatch = async (updates) => {
    try {
      const updatePromises = updates.map(({ id, updates }) =>
        updatePost(id, updates)
      );
      await Promise.all(updatePromises);
      setProducts(prevProducts =>
        prevProducts.map(product =>
          updates.find(update => update.id === product.$id)
            ? { ...product, ...updates.find(update => update.id === product.$id).updates }
            : product
        )
      );
    } catch (error) {
      console.error('Failed to update products:', error);
      setError(error.message || 'Failed to update products');
    }
  };

  const deleteProduct = async (id) => {
    try {
      await databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteProductCollectionId, // Replace with your collection ID
        id
      );
      setProducts(prevProducts => prevProducts.filter(product => product.$id !== id));
    } catch (error) {
      console.error('Failed to delete product:', error);
      setError(error.message || 'Failed to delete product');
    }
  };

  const toggleProduct = (id) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.$id === id ? { ...product, completed: !product.completed } : product
      )
    );
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct, updateProductsBatch, toggleProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
