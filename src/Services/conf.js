const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    appwriteWishlistCollectionId: String(import.meta.env.VITE_APPWRITE_WISHLIST_COLLECTION_ID),
    appwriteCartCollectionId: String(import.meta.env.VITE_APPWRITE_CART_COLLECTION_ID),
    appwriteProductformsCollectionId: String(import.meta.env.VITE_APPWRITE_ProductForms_COLLECTION_ID),
    appwriteOrderDetailsCollectionId: String(import.meta.env.VITE_APPWRITE_OrderDetails_COLLECTION_ID),
}

export default conf