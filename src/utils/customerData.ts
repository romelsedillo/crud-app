import { Client, Databases } from "appwrite";

// Function to fetch data from Appwrite
export const customerData = async () => {
  try {
    const client = new Client()
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject("66aee777000efd6f8fdc");
    const databases = new Databases(client);

    // Fetch documents from the collection
    const response = await databases.listDocuments(
      "66af3ae30031f6a96a00",
      "66af3af70036453c1d8f"
    );

    // Extract the data from the response and return it
    const data = response.documents.map((doc) => ({
      id: doc.$id,
      name: doc.name,
      email: doc.email,
      address: doc.address,
      // Add more fields as needed
    }));
    data.reverse();
    return data;
  } catch (error) {
    console.error("Error fetching data from Appwrite:", error);
    return [];
  }
};
