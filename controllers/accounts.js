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