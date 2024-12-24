module.exports = (req, res) => {
  if (req.method === 'POST') {
    console.log('Webhook received:', req.body);
    res.status(200).send('Webhook processed');
  } else {
    res.status(405).send({ error: `Method ${req.method} not allowed` });
  }
};
