const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  try {
    const tags = await Tag.findAll();
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const tags = await tags.findByPk(req.params.id);
    if (!tags) {
      res.status(404).json({ message: "No tag found with this ID" });
      return;
    }
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const tags = await Tag.create(req.body);
    res.status(200).json(tags);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const tags = await Tag.update(
      {
        tag_name: req.body.tag_name,
      },
      {
        where: { id: req.body.id },
      }
    );
    res.status(200).json(tags);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const tags = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!tags) {
      res.status(404).json({ message: "No tag found with this ID" });
      return;
    }

    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
