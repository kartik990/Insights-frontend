import { User } from "@/generated/graphql";

async function setUserObject(userObject: any) {
  try {
    const userString = JSON.stringify(userObject);

    localStorage.setItem("user", userString);
  } catch (error) {
    console.error("Error setting user object in local storage:", error);
  }
}

function getUserObject(): User | null {
  try {
    const userString = localStorage.getItem("user") as string;

    if (!userString) return null;

    const userObject = JSON.parse(userString);

    return userObject;
  } catch (error) {
    console.error("Error getting user object from local storage:", error);
    return null; // Return null if there's an error
  }
}

// Function to clear all items from local storage
function clearLocalStorage() {
  try {
    localStorage.clear();
  } catch (error) {
    console.error("Error clearing local storage:", error);
  }
}

export { getUserObject, setUserObject, clearLocalStorage };
