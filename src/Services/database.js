// {// import { Client, ID, Databases, Storage, Query } from "appwrite";

// // export class DatabaseService {
// //     client = new Client();
// //     databases;
// //     bucket;

// //     constructor() {
// //       this.client
// //         .setEndpoint('https://cloud.appwrite.io/v1')
// //         .setProject('66a38b39001378ca89df');
// //       this.databases = new Databases(this.client);
// //       this.bucket = new Storage(this.client);
// //     }

// //     async createPost({ title, slug ,content, featuredImage, Price, userId }) {
// //       try {
// //         return await this.databases.createDocument(
// //           conf.appwriteDatabaseId,
// //           conf.appwriteCollectionId,
// //           slug,
// //           {
// //             title,
// //             content,
// //             featuredImage,
// //             Price,
// //             userId,
// //           }
// //         );
// //       } catch (error) {
// //         console.log("Appwrite serive :: createPost :: error", error);
// //       }
// //     }

// //     async updatePost(slug, { title, content, featuredImage, Price }) {
// //       try {
// //         return await this.databases.updateDocument(
// //           conf.appwriteDatabaseId,
// //           conf.appwriteCollectionId,
// //           slug,
// //           {
// //             title,
// //             content,
// //             featuredImage,
// //             Price,
// //           }
// //         );
// //       } catch (error) {
// //         console.log("Appwrite serive :: updatePost :: error", error);
// //       }
// //     }

// //     async deletePost(slug) {
// //       try {
// //         await this.databases.deleteDocument(
// //           conf.appwriteDatabaseId,
// //           conf.appwriteCollectionId,
// //           slug
// //         );
// //         return true;
// //       } catch (error) {
// //         console.log("Appwrite serive :: deletePost :: error", error);
// //         return false;
// //       }
// //     }

// //     async getPost(slug) {
// //       try {
// //         return await this.databases.getDocument(
// //           conf.appwriteDatabaseId,
// //           conf.appwriteCollectionId,
// //           slug
// //         );
// //       } catch (error) {
// //         console.log("Appwrite serive :: getPost :: error", error);
// //         return false;
// //       }
// //     }

// //     async getPosts(queries = [Query.equal("status", "active")]) {
// //       try {
// //         return await this.databases.listDocuments(
// //           conf.appwriteDatabaseId,
// //           conf.appwriteCollectionId,
// //           queries
// //         );
// //       } catch (error) {
// //         console.log("Appwrite serive :: getPosts :: error", error);
// //         return false;
// //       }
// //     }

// //     async uploadFile(file) {
// //       try {
// //         return await this.bucket.createFile(
// //           conf.appwriteBucketId,
// //           ID.unique(),
// //           file
// //         );
// //       } catch (error) {
// //         console.log("Appwrite serive :: uploadFile :: error", error);
// //         return false;
// //       }
// //     }

// //     async deleteFile(fileId) {
// //       try {
// //         await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
// //         return true;
// //       } catch (error) {
// //         console.log("Appwrite serive :: deleteFile :: error", error);
// //         return false;
// //       }
// //     }

// //     getFilePreview(fileId){
// //       return this.bucket.getFilePreview(
// //           conf.appwriteBucketId,
// //           fileId
// //       )
// //   }
// //   }

// //   const DBservice = new DatabaseService();
// //   export default DBservice;
//   }

// src/Services/database.js
import { Client, Databases, Storage, ID, Query } from "appwrite";
import conf from "./conf";

const client = new Client();
client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);

const databases = new Databases(client);

// const testUserId = '66ab05da7a9e41500de4'; // Replace with the user ID you want to test
// const getWishlist = async () => {
//   try {
//     const wishlist = await databases.listDocuments(
//       conf.appwriteDatabaseId,
//       conf.appwriteWishlistCollectionId,
//       [Query.equal('userId', testUserId)]
//     );
//     console.log('Fetched wishlist with hardcoded user ID:', wishlist.documents);
//     return wishlist.documents;
//   } catch (error) {
//     console.error('Failed to fetch wishlist with hardcoded user ID:', error);
//     throw error;
//   }
// };

// const getWishlist = async (userId) => {
//   // const result = await AuthService.getCurrentUser();
//   // const userId = String(result.$id);
//   // console.log('Fetching wishlist for user ID:', userId);
//   try {
//     console.log('Fetching wishlist for user ID:', userId);
//     const wishlist = await databases.listDocuments(
//       conf.appwriteDatabaseId,
//       conf.appwriteWishlistCollectionId,
//       [Query.equal('userId', userId)]
//     );
//     console.log('Fetched wishlist:', wishlist.documents);
//     return wishlist.documents;
//   } catch (error) {
//     console.error('Failed to fetch wishlist:', error);
//     throw error;
//   }
// };

export const getWishlist = async (userId) => {
  try {
    console.log("Fetching wishlist for user ID:", userId);
    const response = await databases.listDocuments(
      conf.appwriteDatabaseId,
      conf.appwriteWishlistCollectionId,
      [Query.equal("userId", userId)],
      [Query.limit(200), Query.offset(0)]
    );
    console.log("Fetched wishlist:", response.documents);
    return response.documents;
  } catch (error) {
    console.error("Failed to fetch wishlist:", error);
    throw error;
  }
};

// export const addToWishlist = async (userId, productId) => {
//   try {
//     if (!userId || !productId) {
//       throw new Error('UserId or Product data is missing');
//     }

//     const data = {
//       userId,      // Assuming userId is a string
//       productId
//     };
//     console.log('Data to be sent:', data);

//     await databases.createDocument(
//       conf.appwriteDatabaseId,
//       conf.appwriteWishlistCollectionId,
//       'unique()',
//       data
//     );
//   } catch (error) {
//     console.error('Failed to add to wishlist:', error);
//     throw error;
//   }
// };

export const addToWishlist = async (userId, productId) => {
  try {
    if (!userId || !productId) {
      throw new Error("UserId or Product data is missing");
    }

    // Wrap userId and productId in arrays
    const data = {
      userId: userId.toString(), // Ensure userId is a string
      productId: productId.toString(), // Ensure productId is a string
    };
    console.log("Data to be sent:", data);

    await databases.createDocument(
      conf.appwriteDatabaseId,
      conf.appwriteWishlistCollectionId,
      "unique()",
      data
    );
  } catch (error) {
    console.error("Failed to add to wishlist:", error);
    throw error;
  }
};

export const removeFromWishlist = async (userId, productId) => {
  try {
    console.log("Attempting to remove item with productId:", productId);

    const wishlist = await getWishlist(userId); // Ensure this returns a proper array
    console.log("Fetched wishlist for removal:", wishlist);

    const itemToRemove = wishlist.find((item) => item.productId === productId);
    console.log("Item to remove:", itemToRemove);

    if (itemToRemove) {
      await databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteWishlistCollectionId,
        itemToRemove.$id // Document ID to be removed
      );
      console.log("Item removed successfully");
      return productId; // Return productId for state update
    } else {
      throw new Error("Item not found in wishlist"); // Throw error if item not found
    }
  } catch (error) {
    console.error("Failed to remove from wishlist:", error);
    throw error;
  }
};

export const getCart = async (userId) => {
  try {
    console.log("Fetching Cartlist for user ID:", userId);
    const response = await databases.listDocuments(
      conf.appwriteDatabaseId,
      conf.appwriteCartCollectionId,
      [Query.equal("userId", userId)],
      [Query.limit(200), Query.offset(0)]
    );
    console.log("Fetched CartList: ", response.documents);
    return response.documents;
  } catch (error) {
    console.error("Failed to fetch Cartlist: ", error);
    throw error;
  }
};

export const addToCart = async (userId, productId, quantity = 1) => {
  try {
    if (!userId || !productId) {
      throw new Error("UserId or ProductId is missing");
    }

    const cart = await getCart(userId);
    const existingItem = cart.find((item) => item.productId === productId);
    if (existingItem) {
      // Update existing item
      const updatedQuantity = existingItem.quantity + quantity;
      await databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCartCollectionId,
        existingItem.$id, // Ensure this is correct
        { quantity: updatedQuantity }
      );
    } else {
      // Add new item
      await databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCartCollectionId,
        "unique()",
        {
          userId: userId.toString(),
          productId: productId.toString(),
          quantity: quantity,
        }
      );
    }
  } catch (error) {
    console.error("Failed to add to Cart:", error);
    throw error;
  }
};

export const updateCart = async (userId, productId, quantity = 1) => {
  try {
    if (!userId || !productId) {
      throw new Error("UserId or ProductId is missing");
    }

    const cart = await getCart(userId);
    const existingItem = cart.find((item) => item.productId === productId);

    if (existingItem) {
      const updatedQuantity = existingItem.quantity - quantity;

      if (updatedQuantity <= 0) {
        // Remove item if quantity drops to zero or below
        await removeFromCart(userId, productId);
      } else {
        // Update existing item
        await databases.updateDocument(
          conf.appwriteDatabaseId,
          conf.appwriteCartCollectionId,
          existingItem.$id,
          { quantity: updatedQuantity }
        );
      }
    } else {
      console.warn("Item not found in cart");
    }
  } catch (error) {
    console.error("Failed to update cart:", error);
    throw error;
  }
};

export const getOrderDetails = async (userId) => {
  try {
    console.log("Fetching Order Details for user ID:", userId);
    const response = await databases.listDocuments(
      conf.appwriteDatabaseId,
      conf.appwriteOrderDetailsCollectionId,
      [Query.equal("user", userId)],
      [Query.limit(200), Query.offset(0)]
      // Adjust the field name if needed
    );
    console.log("Fetched Order Details:", response.documents);
    return response.documents;
  } catch (error) {
    console.error("Failed to fetch Order Details:", error);
    throw error;
  }
};

export const updateOrderpage = async (appOrderId, newStatus) => {
  try {
    if (!appOrderId || !newStatus) {
      throw new Error("OrderId or new status is missing");
    }

    // First, query to find the document with the matching appOrderId
    const result = await databases.listDocuments(
      conf.appwriteDatabaseId,
      conf.appwriteOrderDetailsCollectionId,
      [Query.equal("appOrderId", appOrderId)]
    );

    if (result.documents.length === 0) {
      throw new Error("Order not found with the provided appOrderId");
    }

    const documentId = result.documents[0].$id; // Extract the document ID

    // Now, update the document using the document ID
    await databases.updateDocument(
      conf.appwriteDatabaseId,
      conf.appwriteOrderDetailsCollectionId,
      documentId, // Use the retrieved document ID
      { status: newStatus } // Update the status
    );

    console.log(`Order status updated to ${newStatus}`);
  } catch (error) {
    console.error("Failed to update order status:", error);
    throw error;
  }
};

export const getUpdateOrderPage = async (appOrderId) => {
  try {
    if (!appOrderId) {
      throw new Error("OrderId is missing");
    }

    const result = await databases.listDocuments(
      conf.appwriteDatabaseId,
      conf.appwriteOrderDetailsCollectionId,
      [Query.equal("appOrderId", appOrderId)]
    );

    if (result.documents.length === 0) {
      throw new Error("Order not found with the provided appOrderId");
    }

    return result.documents[0];
  } catch (error) {
    console.error("Failed to fetch order details:", error);
    throw error;
  }
}

export const getAllOrderDetails = async () => {
  try {
    const response = await databases.listDocuments(
      conf.appwriteDatabaseId,
      conf.appwriteOrderDetailsCollectionId,
      [Query.limit(200), Query.offset(0)]
    );
    console.log("Fetched Order Details:", response.documents);
    return response.documents;
  } catch (error) {
    console.error("Failed to fetch Order Details:", error);
    throw error;
  }
};
export const getAllProductDetails = async () => {
  try {
    // Fetching documents from Appwrite
    const response = await databases.listDocuments(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      [Query.limit(200), Query.offset(0)]
    );

    // Log the full response for inspection
    console.log("Fetched Order Details:", response);

    // Check if documents are available
    if (response.documents && Array.isArray(response.documents)) {
      console.log("Fetched Documents:", response.documents);
      return response.documents;
    } else {
      console.warn("No documents found or response format is unexpected.");
      return [];
    }
  } catch (error) {
    console.error("Failed to fetch Order Details:", error);
    throw error; // Re-throw the error after logging
  }
};

export const updateStatus = async (userId, orderId, newStatus) => {
  try {
    // Validate input
    if (!userId || !orderId || !newStatus) {
      throw new Error("UserId, OrderId, or new status is missing");
    }

    // Fetch order details for the user
    const orderDetails = await getOrderDetails(userId);
    const existingOrder = orderDetails.find(
      (order) => order.orderId === orderId
    );

    if (existingOrder) {
      const allowedStatusUpdates = {
        pending: ["processing", "canceled"],
        processing: ["shipped", "canceled"],
        shipped: ["delivered"],
        delivered: ["completed"],
      };

      if (
        existingOrder.status in allowedStatusUpdates &&
        !allowedStatusUpdates[existingOrder.status].includes(newStatus)
      ) {
        console.warn(
          `Cannot update status from ${existingOrder.status} to ${newStatus}`
        );
        return;
      }

      await databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteOrderDetailsCollectionId,
        existingOrder.$id,
        { status: newStatus }
      );

      console.log(`Order status updated to ${newStatus}`);
    } else {
      console.warn("Order not found in order details");
    }
  } catch (error) {
    console.error("Failed to update order status:", error);
    throw error;
  }
};

export const removeFromCart = async (userId, productId) => {
  try {
    console.log("Attempting to remove item with productId:", productId);

    const cart = await getCart(userId);

    console.log("Fetched Cart for removal: ", cart);

    const itemToRemove = cart.find((item) => item.productId === productId);
    console.log("Item to remove:", itemToRemove);

    if (itemToRemove) {
      await databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCartCollectionId,
        itemToRemove.$id
      );
      console.log("Item removed successfully");
      return productId;
    } else {
      throw new Error("Item not found in Cart");
    }
  } catch (error) {
    console.error("Failed to remove from Cart:", error);
    throw error;
  }
};

// const getShoes = async (category, footwearType, variety) => {
//   try {
//     const response = await databases.listDocuments(
//       conf.appwriteDatabaseId,
//       conf.appwriteCollectionId,
//       [
//         Query.equal("Category", category),
//         Query.equal("Footwear_Type", footwearType),
//         Query.equal("Variety", variety),
//       ]
//     );
//     console.log("Fetching shoes with parameters:", category, footwearType, variety);

//     return response.documents;
//   } catch (error) {
//     console.error("Error:", error);
//     throw error;
//   }
// };
// const getCategoryShoes = async (categorys, subcategorys) => {

//   let query = [Query.equal("Category", categorys)];

//   if (subcategorys) {
//     query.push(Query.equal("Footwear_Type", subcategorys));
//   }

//   try {
//     // Fetch documents from the database
//     const response = await databases.listDocuments(
//       conf.appwriteDatabaseId,
//       conf.appwriteCollectionId,
//       query
//     );
//     console.log("Fetching shoes with parameters:", categorys, subcategorys);

//     return response.documents;
//   } catch (error) {
//     console.error("Error:", error);
//     throw error; // Ensure errors are thrown to be caught in the component
//   }
// };

const getShoes = async (category, footwearType = null, variety = null) => {
  console.log(
    "Fetching shoes with parameters:",
    category,
    footwearType,
    variety
  );
  let query = [Query.equal("Category", category)];

  if (footwearType) {
    query.push(Query.equal("Footwear_Type", footwearType));
  }

  if (variety) {
    query.push(Query.equal("Variety", variety));
  }

  try {
    // Fetch documents from the database
    const response = await databases.listDocuments(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      query,
      [Query.limit(200), Query.offset(0)]
    );
    console.log(
      "Fetching shoes with parameters:",
      category,
      footwearType,
      variety
    );

    return response.documents;
  } catch (error) {
    console.error("Error:", error);
    throw error; // Ensure errors are thrown to be caught in the component
  }
};
const getSpecialShoes = async (category, percent) => {
  let queries = [
    Query.equal("Category", category),
    Query.greaterThanEqual("discountPercent", percent),
  ];

  try {
    // Fetch documents from the database
    const response = await databases.listDocuments(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      queries,
      [Query.limit(200), Query.offset(0)]
    );
    console.log("Fetching shoes with parameters:", category, percent);

    return response.documents;
  } catch (error) {
    console.error("Error:", error);
    throw error; // Ensure errors are thrown to be caught in the component
  }
};
const getSpecialSportShoes = async (
  category = null,
  subcategory = null,
  tagss = null,
  percent
) => {
  let queries = [Query.greaterThanEqual("discountPercent", percent)];

  // Add subcategory filter if provided
  if (subcategory !== null) {
    queries.push(Query.equal("Footwear_Type", subcategory));
  }

  // Add category filter if provided
  if (category !== null) {
    queries.push(Query.equal("Category", category));
  }

  // Add tags filter if provided
  if (tagss !== null) {
    // Assuming tags is a string. If it's an array or requires a different query type, adjust accordingly.
    queries.push(Query.equal("Tags", tagss));
  }

  try {
    // Fetch documents from the database
    const response = await databases.listDocuments(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      queries,
      [Query.limit(200), Query.offset(0)]
    );
    console.log("Fetching shoes with parameters:", {
      subcategory,
      percent,
      category,
      tagss,
    });

    return response.documents;
  } catch (error) {
    console.error("Error:", error);
    throw error; // Ensure errors are thrown to be caught in the component
  }
};

const gettag = async (tag, excludeTag = null) => {
  try {
    let query = [];

    if (tag) {
      query.push(Query.equal("Tags", tag));
    }

    if (excludeTag !== null) {
      query.push(Query.notEqual("Tags", excludeTag));
    }

    const response = await databases.listDocuments(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      query,
      [Query.limit(200), Query.offset(0)]
    );

    console.log(
      "Fetching shoes with parameters:",
      tag,
      "Excluding:",
      excludeTag
    );

    return response.documents;
  } catch (error) {
    console.error("Error fetching documents:", error);
    throw error;
  }
};

class bucketstorage {
  constructor() {
    this.bucket = new Storage(client);
  }

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.error("Appwrite service :: uploadFile :: error", error);
      throw error; // Throw error for consistent error handling
    }
  }

  async getPost(slug) {
    try {
      return await databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.error("Appwrite service :: getPost :: error", error);
      throw error; // Throw error for consistent error handling
    }
  }
  async updatePost(id, status) {
    try {
      await databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteOrderDetailsCollectionId,
        id, // Pass the document ID here
        { status } // Pass the status in an object
      );
    } catch (error) {
      console.error("Appwrite service :: updatePost :: error", error);
      throw error; // Throw error for consistent error handling
    }
  }

  async getTagsdata(slug) {
    try {
      return await databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.error("Appwrite service :: getPost :: error", error);
      throw error; // Throw error for consistent error handling
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.error("Appwrite service :: deleteFile :: error", error);
      throw error; // Throw error for consistent error handling
    }
  }

  getFilePreview(fileId) {
    try {
      return this.bucket.getFilePreview(conf.appwriteBucketId, fileId).href; // Return the preview URL directly
    } catch (error) {
      console.error("Appwrite service :: getFilePreview :: error", error);
      throw error; // Throw error for consistent error handling
    }
  }
  async getPosts(productId) {
    try {
      return await databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        productId
      );
    } catch (error) {
      console.error("Appwrite service :: getPost :: error", error);
      throw error;
    }
  }
}
const getProduct = async (productId) => {
  try {
    console.log("Fetching product with ID:", productId);
    const product = await appwriteService.getPosts(productId);
    const image = await appwriteService.getFilePreview(product.featuredImage);
    return { ...product, image };
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};

const appwriteService = new bucketstorage();
export {
  client,
  databases,
  getShoes,
  gettag,
  appwriteService,
  getSpecialSportShoes,
  getProduct,
  getSpecialShoes,
};
