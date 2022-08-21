import { useEffect, useState } from "react";

export function useAuth() {
  const [user, setUser] = useState({ valid: true });
  // Query the API for the user's info
  //   const auth = getAuth();
  const [auth, setAuth] = useState(true);
  useEffect(() => {
    // Check the users authentication status

    // Return and clear the request
    return () => {
      // Cancel the request
    };
  }, []);

  return [user];
}
