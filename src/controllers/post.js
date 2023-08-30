const { postService } = require('../services');

const createPost = async (req, res) => {
  try {
    const { status, data } = await postService.createPost(req.user, req.body);
    return res.status(status).json(data);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
    createPost,
};