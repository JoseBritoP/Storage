const checkAppwrite = {
  endpoint:process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT,
  project:process.env.NEXT_PUBLIC_APPWRITE_PROJECT,
  database:process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
  usersCollection:process.env.NEXT_PUBLIC_APPWRITE_USERS_COLLECTION,
  filesCollection:process.env.NEXT_PUBLIC_APPWRITE_FILES_COLLECTION,
  bucket:process.env.NEXT_PUBLIC_APPWRITE_BUCKET,
  secret:process.env.NEXT_APPWRITE_KEY
}

Object.entries(checkAppwrite).forEach(([key, value]) => {
  if (!value) {
    throw new Error(`The value of ${key} is empty or undefined.`);
  }
});

export const appwriteConfig = {
  endpointUrl: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!, 
  projectId:process.env.NEXT_PUBLIC_APPWRITE_PROJECT!,
  databaseId:process.env.NEXT_PUBLIC_APPWRITE_DATABASE!,
  usersCollectionId:process.env.NEXT_PUBLIC_APPWRITE_USERS_COLLECTION!,
  filesCollectionId:process.env.NEXT_PUBLIC_APPWRITE_FILES_COLLECTION!,
  bucketId:process.env.NEXT_PUBLIC_APPWRITE_BUCKET!,
  secretKey: process.env.NEXT_APPWRITE_KEY!
}