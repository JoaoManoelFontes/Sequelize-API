const User = require("../../database/models/User");

module.exports = {
  async addUser(req, res) {
    const { name, age } = req.body;
    const user = await User.create({
      name,
      age,
    });
    res.json({ user:user });
  },

  async deleteUser(req, res) {
    const isUser = await User.findByPk(req.params.id);
    if (!isUser) {
      return res
        .status(400)
        .json({ error: "Bad request", users: await User.findAll() });
    }

    const userDeleted = await User.findOne({ where: { id: req.params.id } });
    await User.destroy({ where: { id: req.params.id } });
    return res.status(200).json({
      status: "sucessfuly deleted",
      user_deleted: userDeleted,
      Users: await User.findAll(),
    });
  },

  async getUsers(_, res) {
    User.findAll()
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  },

};
