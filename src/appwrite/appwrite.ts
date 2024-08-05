import { Client, Account } from "appwrite";

export const client = new Client();

client
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
  .setProject(process.env.NEXT_PUBLIC_PROJECT_ID); // Replace with your project ID

export const account = new Account(client);
export { ID } from "appwrite";

// import { Client } from 'appwrite';
// const client = new Client();

// client
//     .setEndpoint('https://cloud.appwrite.io/v1')
//     .setProject('66aee777000efd6f8fdc');
