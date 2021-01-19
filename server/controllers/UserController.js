const { User } = require("../models");
const { comparePassword } = require("../helpers/bcrypt");
const { generateToken } = require("../helpers/jwt");

class UserController {
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({
        where: {
          email,
        },
      });
      let validPassword = comparePassword(password, user.password);
      if (!validPassword)
        throw {
          name: "AuthenticationFailed",
          message: "invalid email or password",
        };
      else {
        const payload = {
          id: user.id,
          email: user.email,
          username: user.username,
          img_url: user.img_url,
        };

        const token = generateToken(payload);
        res.status(200).json({ token });
      }
    } catch (error) {
      next(error);
    }
  }

  static async register(req, res, next) {
    try {
      const { username, email, password, img_url } = req.body;

      const newUser = await User.create({
        username,
        email,
        password,
        img_url,
      });

      res.status(201).json({
        id: newUser.id,
        email: newUser.email,
        username: newUser.username,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
