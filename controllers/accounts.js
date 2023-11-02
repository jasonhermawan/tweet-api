
const { account } = require("../models")
module.exports = {
    getData: async (req, res) => {
        try {
            const result = await account.findAll({
                where: req.query,
                attributes: { exclude: ["password"] },
                order: [["id", "ASC"]]

            });
            return res.status(200).send(result)
        } catch (error) {
            console.log(error);
            return res.status(500).send(error)
        }
    }, 
    update: async (req, res) => {
        try {
            const result = await account.update(
                {
                    username: req.body.username,
                }, 
                {
                where: {
                    id: req.params.id,
                },
            })
            return res.status(200).send({
                succes : true ,
                message : "Update succes",
                total : result 
            })
        } catch (error) {
            console.log(error);
            return res.status(error.rc || 500).send(error)
        }
    },
}

const { accounts } = require("../models");

module.exports = {
  getDataAccount: async (req, res, next) => {
    try {
      const result = await accounts.findAll();
      return res.status(200).send(result);
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  },

  create: async (req, res) => {
    try {
      const { username, password, confirmPassword } = req.body;

      if (password.length < 8) {
        return res.status(400).send({
          success: false,
          message: "Password Minimal 8",
        });
      }

    //   if(req.body.email.includes("@") < 0&& req.body.email.includes(".co") < 0){
    //     return res.status(400).send({
    //         success: false,
    //         message: "Email Salah",
    //       });
    //   }

      if (password !== confirmPassword) {
        return res.status(400).send({
          success: false,
          message: "Confirmation Password tidak cocok",
        });
      }

      const checkAccount = await accounts.findOne({
        where: { username },
      });

      if (checkAccount) {
        return res.status(400).send({
          success: false,
          message: "Account Sudah Ada",
        });
      } else {
        const result = await accounts.create(req.body);
        return res.status(201).send(result);
      }
    } catch (error) {
      console.log("test error", error);
      return res.status(500).send(error);
    }
  },
};
