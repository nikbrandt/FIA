const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
	res.render('proposal', { title: 'Proposal' });
});

module.exports = router;