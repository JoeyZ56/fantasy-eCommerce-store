const CorsTest = () => {
  const testCORS = async () => {
    try {
      const response = await fetch("http://localhost/api/tests/test.php", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Origin: "http://localhost:5173/", // Replace with the actual origin of your frontend
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.text();
      console.log("Response:", data);
      alert("CORS Test Result: " + data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div>
      <h1>CORS Test</h1>
      <button onClick={testCORS}>Test CORS</button>
    </div>
  );
};

export default CorsTest;
