const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Test routes fonctionnelles' });
});

module.exports = router;
