const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: [{ model: Product}],
    });
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const categories = await Category.findByPk(req.params.id, {
      include: [{ model: Product}],
    });
    if (!categories) {
      res.status(404).json({ message: "No category found with this ID" });
      return;
    }
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const categories = await Category.create(req.body);
    res.status(200).json(categories);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const categories = await Category.update(req.body, 
    {
      where: { id: req.body.id }
    })
    if (!categories) {
      res.status(404).json({ message: "No category found with this ID" });
      return;
    }
    res
    res.status(200).json(categories)
  }
 catch (err) {
    res.status(400).json(err);
}
});

router.delete("/:id", async (req, res) => {
  try {
    const categories = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!categories) {
      res.status(404).json({ message: "No category found with this ID" });
      return;
    }

    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
