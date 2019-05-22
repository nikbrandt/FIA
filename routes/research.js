const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
	res.render('research', { title: 'Research' });
});

module.exports = router;