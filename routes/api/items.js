const express = require('express');
const router = express.Router();

//import item model
const Item = require('../../models/item');

// @route GET api/items
// @desc Get all Items
// @access public

router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
});


module.exports = router;