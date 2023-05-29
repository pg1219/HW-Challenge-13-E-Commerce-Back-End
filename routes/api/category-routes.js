const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json(categories);
  } catch(err) {
    res.status(500).json(err);
  }  
  
});

router.get('/:id', async (req, res) => {
  try {
    const categories = await Category.findByPk(req.params.id)
  if (!categories) {
    res.status(404).json({message: 'No category found with this ID'});
    return;
  }  
  res.status(200).json(categories);
  } catch(err) {
    res.status(500).json(err)
  }
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
