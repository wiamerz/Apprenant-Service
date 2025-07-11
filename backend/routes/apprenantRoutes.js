const express = require('express');
const router = express.Router();

const {addApp, getAllApp, updateApp, deleteApp} = require('../controllers/apprenantControllers')

router.post('/add', addApp);
router.get('/', getAllApp );
router.put('/:id', updateApp);
router.delete('/:id', deleteApp);

module.exports= router;