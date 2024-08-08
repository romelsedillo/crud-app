import { Client, Account } from "appwrite";

export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66aee777000efd6f8fdc"); // Replace with your project ID

export const account = new Account(client);
export { ID } from "appwrite";

// import { Client } from 'appwrite';
// const client = new Client();

// client
//     .setEndpoint('https://cloud.appwrite.io/v1')
//     .setProject('66aee777000efd6f8fdc');
