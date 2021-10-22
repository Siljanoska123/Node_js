const Post = require('../models/post');

module.exports = {
  create: async (req, res) => {
    try {
      const post = await Post.create(req.body);

      res.send({
        error: false,
        message: `User with id #${req.body.user} has just created a new post!`,
        post: post
      });
    } catch (error) {
      res.send({
        error: true,
        message: error.msg
      });
    }
  },

  getAll: async (req, res) => {
    try {
      const posts = await Post.find().populate('user');

      res.send({ posts: posts })
    } catch (error) {
      res.send({
        error: true,
        message: error.msg
      })
    }
  },

  getOne: async (req, res) => {
    try {
      const post = await Posts.findById(req.params.id);

      res.send({
        error: false,
        message: `User with id #${req.body.user} has get!`,
        post: post
      });
    } catch (error) {
      res.send({
        error: true,
        message: error.msg
      })
    }
  },

  delete: async (req, res) => {
    try {
      await Post.findByIdAndDelete(req.params.id);

      res.send({
        error: false,
        message: `User with id #${req.body.user} was delete!`
      });
    } catch (error) {
      res.send({
        error: true,
        message: error.msg,
      })
    }

  }
}