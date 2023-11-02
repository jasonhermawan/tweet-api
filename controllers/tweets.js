const {tweets} = require("../models")
module.exports = {
  postTweet: async(req, res, next) => {
    try {
      if (req.body.content.length < 151) {
        const result = await tweets.create(req.body);
        return res.status(200).send(result);
      } else {
        return res.status(200).send("<h1>Max 10</h1>");
      }
    } catch (err) {
      console.log(err);
      return res.status(500).send(err);
    }
  },
  getTweet: async(req, res, next) => {
    try {
      const result = await tweets.findAll({
        where: req.query,
        attributes: {exclude: ["createdAt", "updatedAt"]},
        order: [["id", "DESC"]]
      });
      return res.status(200).send(result)
    } catch (err) {
      console.log(err);
      return res.status(500).send(err)
    }
  },
  updateTweet: async(req, res, next) => {
    try {
      const result = await tweets.update({
        content: req.body.content,
      }, {
        where: {
          id:req.params.id
        }
      }
    )
    return res.status(200).send({
      success: true,
      message: "Update success"
    });
    } catch (err) {
      console.log(err);
      return res.status(500).send(err);
    }
  },
  deleteTweet: async(req, res, next) => {
    try {
      const result = await tweets.destroy({
        where: {
          id: req.params.id,
        },
      });
      return res.status(200).send({
        success: true,
        message: "Delete success"
      })
    } catch (err) {
      console.log(err);
      return res.status(500).send(err)
    }
  }
}