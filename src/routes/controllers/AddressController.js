const Address = require("../../database/models/Address");
const User = require("../../database/models/User");

module.exports = {
  async addAddress(req, res) {
    const { userId } = req.params;
    const { zipcode, number, street } = req.body;

    const user = await User.findByPk(userId);

    if (!user) {
      return res
        .status(400)
        .json({ error: "usuário não existe", user: await User.findAll() });
    }

    const address = await Address.create({
      zipcode,
      street,
      number,
      userId,
    });

    return res.json({ user: user, address: address });
  },
  async getAddress(req, res) {
    const { id } = req.params;
    const user = await User.findByPk(id, {
      include: { association: "addresses" },
    });
    if (!user) {
      return res
        .status(400)
        .json({ error: "usuário não existe", user: await User.findAll() });
    }

    return res.json({ user });
  },
};
