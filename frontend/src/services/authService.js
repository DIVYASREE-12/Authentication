export const loginUser = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
      console.log("Login Response:", data); // ✅ Log the response in the browser console
  
      return response.ok
        ? { success: true, data }
        : { success: false, message: data.message || "Login failed" };
    } catch (error) {
      console.error("Network error:", error); // ✅ Log network errors
      return { success: false, message: "Cannot connect to server" };
    }
  };
  