module.exports = (req, res) => {
  if (req.method === 'POST') {
    try {
      console.log('Webhook received:', req.body);

      // Add validation or processing logic here if needed
      res.status(200).send('Webhook processed');
    } catch (error) {
      console.error('Error processing webhook:', error);
      res.status(500).send('Internal Server Error');
    }
  } else {
    res.status(405).send({ error: `Method ${req.method} not allowed` });
  }
};
