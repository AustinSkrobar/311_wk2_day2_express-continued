const comments = require("../data/comments");

const list = (req, res) => {
  res.json(comments);
};

const show = (req, res) => {
  let commentId = parseInt(req.params.commentId);
  let comment = comments.find((comment) => comment._id === commentId);

  res.send(comment);
};

const create = (req, res) => {
  let comment = req.body;
  comment._id = comments.length + 1;

  comments.push(comment);

  res.send(comments);
};

module.exports = { list, show, create };
