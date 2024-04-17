const express = require('express'); // Import Express module

const app = express(); // Create an Express application instance

app.get('/', (req, res) => { // Define a route for the root path ('/')
  res.send('Hello World!'); // Send the response "Hello World!"
});

const port = process.env.PORT || 3000; // Get port from environment or default to 3000

app.listen(port, () => { // Start the server and listen on the specified port
  console.log(`Server listening on port ${port}`);
});
