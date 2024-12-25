const express = require('express');
const webhookHandler = require('./api/webhook'); // Import the webhook module

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Route for the webhook
app.post('/api/webhook', webhookHandler);

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
