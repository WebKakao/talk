const { Router } = require('express');
const router = new Router();

router.get('/test', () => {
  clients.test = 'ee'; //
  console.log(clients); //
});
router.post('/login', (req, res) => {});
router.post('/chat', (req, res) => {});

module.exports = router;
