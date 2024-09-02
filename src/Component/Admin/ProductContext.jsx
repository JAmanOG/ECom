import React, { createContext, useContext, useState, useEffect } from 'react';
import { databases, getAllProductDetails } from '../../Services/database';
import conf from '../../Services/conf';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const ProductContext = createContext(null);

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProduct must be used within a ProductProvider');
  }
  return context;
};

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInitialProducts = async () => {
      try {
        const response = await getAllProductDetails();
        setProducts(response);
        toast.success('Products fetched successfully');
      } catch (error) {
        setError(error.message || 'Failed to fetch products');
        toast.error(error.message || 'Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchInitialProducts();
  }, []);

  const addProduct = (product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
    toast.success('Product added successfully');
  };

  const updatePost = async (id, updates) => {
    try {
      const { $databaseId, $collectionId, ...validUpdates } = updates;
      await databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        id,
        validUpdates
      );
      toast.success('Product updated successfully');
    } catch (error) {
      console.error("Appwrite service :: updatePost :: error", error);
      toast.error('Failed to update product');
      throw error;
    }
  };

  const validateProduct = (product) => {
    if (!product.Tags) {
      throw new Error('Tags is a required field.');
    }
    // Add more validation as needed
  };

  const updateProduct = async (id, updatedProduct) => {
    try {
      const existingProduct = products.find(product => product.$id === id);
  
      // Ensure `discountPercent` is provided and valid before calculating `discountedPrice`
      const discountPercent = updatedProduct.discountPercent;
      const price = updatedProduct.price !== undefined ? parseInt(updatedProduct.price, 10) : existingProduct.price;
  
      if (discountPercent !== undefined) {
        updatedProduct.discountedPrice = price - (price * discountPercent / 100);
      }
  
      const productToUpdate = {
        ...existingProduct,
        ...updatedProduct,
        price: updatedProduct.price !== undefined
          ? parseInt(updatedProduct.price, 10)
          : existingProduct.price,
        discountPercent: updatedProduct.discountPercent !== undefined
          ? parseInt(updatedProduct.discountPercent, 10)
          : existingProduct.discountPercent,
        discountedPrice: updatedProduct.discountedPrice !== undefined
          ? parseInt(updatedProduct.discountedPrice, 10)
          : existingProduct.discountedPrice,
      };
  
      // Validate price and discountedPrice
      if (isNaN(productToUpdate.discountedPrice)) {
        throw new Error('Discounted Price must be a valid integer.');
      }
      if (isNaN(productToUpdate.price)) {
        throw new Error('Price must be a valid integer.');
      }
  
      validateProduct(productToUpdate);
  
      await updatePost(id, productToUpdate);
      setProducts(prevProducts =>
        prevProducts.map(product =>
          product.$id === id ? { ...product, ...productToUpdate } : product
        )
      );
    } catch (error) {
      console.error('Failed to update product:', error);
      setError(error.message || 'Failed to update product');
      toast.error(error.message || 'Failed to update product');
    }
  };
  

  // const updateProductsBatch = async (updates) => {
  //   try {
  //     const updatePromises = updates.map(({ id, updates }) =>
  //       updatePost(id, updates)
  //     );
  //     await Promise.all(updatePromises);
  //     setProducts(prevProducts => {
  //       const updatedProducts = prevProducts.map(product =>
  //         updates.find(update => update.id === product.$id)
  //           ? { ...product, ...updates.find(update => update.id === product.$id).updates }
  //           : product
  //       );
  //       return updatedProducts;
  //     });
  //     toast.success('Products updated successfully');
  //   } catch (error) {
  //     console.error('Failed to update products:', error);
  //     setError(error.message || 'Failed to update products');
  //     toast.error(error.message || 'Failed to update products');
  //   }
  // };

  const deleteProduct = async (id) => {
    try {
      await databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        id
      );
      setProducts(prevProducts => prevProducts.filter(product => product.$id !== id));
      toast.success('Product deleted successfully');
    } catch (error) {
      console.error('Failed to delete product:', error);
      setError(error.message || 'Failed to delete product');
      toast.error(error.message || 'Failed to delete product');
    }
  };

  const toggleProduct = (id) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.$id === id ? { ...product, completed: !product.completed } : product
      )
    );
    toast.success('Product toggled successfully');
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>
  return(
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        updateProduct,
        deleteProduct,
        toggleProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
