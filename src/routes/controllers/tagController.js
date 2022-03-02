const Tag = require("../../database/models/Tag");
const User = require("../../database/models/User");

module.exports = {
  async addTag(req, res) {
    const { userId } = req.params;
    const { name } = req.body;

    const user = await User.findByPk(userId);
    if (!user) {
      return res
        .status(400)
        .json({ error: "usuário não existe", user: await User.findAll() });
    }

    const [tag] = await Tag.findOrCreate({
      where: { name },
    });

    await user.addTag(tag);

    return res.json(tag);
  },
  async getTags(req, res) {
    const { userId } = req.params;

    const user = await User.findByPk(userId, {
      include: {
        association: "tags",
        attributes: ["name", "id"],
        through: { attributes: [] },
      },
      attributes: ["name", "age", "id"],
    });

    if (!user) {
      return res
        .status(400)
        .json({ error: "usuário não existe", user: await User.findAll() });
    }

    return res.json(user);
  },

  async removeTag(req, res) {
    const { userId } = req.params;
    const { name } = req.body;

    const user = await User.findByPk(userId);
    if (!user) {
      return res
        .status(400)
        .json({ error: "usuário não existe", user: await User.findAll() });
    }

    const tag = await Tag.findOne({
      where: { name },
    });

    await user.removeTag(tag);
  },
};
