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
  //   create: async (req, res) => {
  //     try {
  //       const checkAccount = await accounts.findOne({
  //         where: { username: req.body.username },
  //       });
  //       console.log(checkAccount);
  //       if (checkAccount) {
  //         return res.status(400).send({
  //           success: false,
  //           message: "Account is Already Exist",
  //         });
  //       } else {
  //         const result = await accounts.create(req.body);
  //         return res.status(201).send(result);
  //       }
  //       //   return res.status(201).send(result);
  //     } catch (error) {
  //       console.log("test error", error);
  //       return res.status(500).send(error);
  //     }
  //   },
  // };

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
