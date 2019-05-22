const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
	res.render('funding', { title: 'Funding' });
});

module.exports = router;