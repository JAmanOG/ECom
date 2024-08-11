// import { Client, ID, Databases, Storage, Query } from "appwrite";


// export class DatabaseService {
//     client = new Client();
//     databases;
//     bucket;
  
//     constructor() {
//       this.client
//         .setEndpoint('https://cloud.appwrite.io/v1')
//         .setProject('66a38b39001378ca89df');
//       this.databases = new Databases(this.client);
//       this.bucket = new Storage(this.client);
//     }
  
//     async createPost({ title, slug ,content, featuredImage, Price, userId }) {
//       try {
//         return await this.databases.createDocument(
//           conf.appwriteDatabaseId,
//           conf.appwriteCollectionId,
//           slug,
//           {
//             title,
//             content,
//             featuredImage,
//             Price,
//             userId,
//           }
//         );
//       } catch (error) {
//         console.log("Appwrite serive :: createPost :: error", error);
//       }
//     }
  
//     async updatePost(slug, { title, content, featuredImage, Price }) {
//       try {
//         return await this.databases.updateDocument(
//           conf.appwriteDatabaseId,
//           conf.appwriteCollectionId,
//           slug,
//           {
//             title,
//             content,
//             featuredImage,
//             Price,
//           }
//         );
//       } catch (error) {
//         console.log("Appwrite serive :: updatePost :: error", error);
//       }
//     }
  
//     async deletePost(slug) {
//       try {
//         await this.databases.deleteDocument(
//           conf.appwriteDatabaseId,
//           conf.appwriteCollectionId,
//           slug
//         );
//         return true;
//       } catch (error) {
//         console.log("Appwrite serive :: deletePost :: error", error);
//         return false;
//       }
//     }
  
//     async getPost(slug) {
//       try {
//         return await this.databases.getDocument(
//           conf.appwriteDatabaseId,
//           conf.appwriteCollectionId,
//           slug
//         );
//       } catch (error) {
//         console.log("Appwrite serive :: getPost :: error", error);
//         return false;
//       }
//     }
  
//     async getPosts(queries = [Query.equal("status", "active")]) {
//       try {
//         return await this.databases.listDocuments(
//           conf.appwriteDatabaseId,
//           conf.appwriteCollectionId,
//           queries
//         );
//       } catch (error) {
//         console.log("Appwrite serive :: getPosts :: error", error);
//         return false;
//       }
//     }
  
//     async uploadFile(file) {
//       try {
//         return await this.bucket.createFile(
//           conf.appwriteBucketId,
//           ID.unique(),
//           file
//         );
//       } catch (error) {
//         console.log("Appwrite serive :: uploadFile :: error", error);
//         return false;
//       }
//     }
  
//     async deleteFile(fileId) {
//       try {
//         await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
//         return true;
//       } catch (error) {
//         console.log("Appwrite serive :: deleteFile :: error", error);
//         return false;
//       }
//     }
  
//     getFilePreview(fileId){
//       return this.bucket.getFilePreview(
//           conf.appwriteBucketId,
//           fileId
//       )
//   }
//   }
  
//   const DBservice = new DatabaseService();
//   export default DBservice;
  

// src/Services/database.js
import { Client, Databases, Storage, ID, Query } from 'appwrite';
import conf from './conf';

// Initialize Appwrite client
const client = new Client();
client
  .setEndpoint(conf.appwriteUrl)
  .setProject(conf.appwriteProjectId);

const databases = new Databases(client);


const getWishlist = async (userId) => {
  try {
    const wishlist = await databases.listDocuments(
      conf.appwriteWishlistCollectionId, // Your collection ID
      ['userId=' + userId]
    );
    return wishlist.documents;
  } catch (error) {
    console.error('Failed to fetch wishlist:', error);
    throw error;
  }
};

export const addToWishlist = async (userId, product) => {
  try {
    await databases.createDocument(conf.appwriteWishlistCollectionId, {
      userId,
      productId: product.$id,
      product,
    });
    return await getWishlist(userId);
  } catch (error) {
    console.error('Failed to add to wishlist:', error);
    throw error;
  }
};

export const removeFromWishlist = async (userId, productId) => {
  try {
    const wishlist = await getWishlist(userId);
    const itemToRemove = wishlist.find(item => item.productId === productId);

    if (itemToRemove) {
      await databases.deleteDocument(conf.appwriteWishlistCollectionId, itemToRemove.$id);
    }
    
    return await getWishlist(userId);
  } catch (error) {
    console.error('Failed to remove from wishlist:', error);
    throw error;
  }
};

const getShoes = async (category, footwearType, variety) => {
  try {
    const response = await databases.listDocuments(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      [
        Query.equal('Category', category),
        Query.equal('Footwear_Type', footwearType),
        Query.equal('Variety', variety),
      ]
    );
    return response.documents;
  } catch (error) {
    console.error('Error:', error);
    throw error; // Ensure errors are thrown to be caught in the component
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
      console.error('Appwrite service :: uploadFile :: error', error);
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
      console.error('Appwrite service :: getPost :: error', error);
      throw error; // Throw error for consistent error handling
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.error('Appwrite service :: deleteFile :: error', error);
      throw error; // Throw error for consistent error handling
    }
  }

  getFilePreview(fileId) {
    try {
      return this.bucket.getFilePreview(
        conf.appwriteBucketId,
        fileId
      ).href; // Return the preview URL directly
    } catch (error) {
      console.error('Appwrite service :: getFilePreview :: error', error);
      throw error; // Throw error for consistent error handling
    }
  }
}

const appwriteService = new bucketstorage();
export { client, databases, getShoes, appwriteService, getWishlist };
