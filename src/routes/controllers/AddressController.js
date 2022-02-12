const Address = require("../../database/models/Address");
const User = require("../../database/models/User");
module.exports = {
  async addAddress(req, res) {
    const { userId } = req.params;
    const { zipcode, number, street } = req.body;
    console.log(userId);
    const user = await User.findByPk(userId);

    if (!user) {
      return res.json("error");
    }

    const address = await Address.create({
      zipcode,
      street,
      number,
      userId,
    });

    return res.status(200).json({ user: user, address: address });
  },
  async getAddress(req, res) {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      return res.json("error");
    }
    return res.json({
      user: user,
      address: await Address.findAll({ where: { userId: id } }),
    });
  },
};
