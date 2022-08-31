const Blog = require('../models/blog');
const Comment = require("../models/comment")

const createBlog = async (req, res) => {
  try {
    const blog = await new Blog(req.body)
    await blog.save()
    return res.status(201).json({
      blog,
    })
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find()
    return res.status(200).json({blogs})
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id)
    if (blog) {
      return res.status(200).json({ blog } );
    }
    return res.status(404).send('Item with the specified ID does not exist')

  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const updateBlog = (req, res) => {
  try {
    const { id } = req.params;
    Blog.findByIdAndUpdate(id, req.body, { new: true }, (err, blog) => {
      if (err) {
        res.status(500).send(err);
      }
      if (!blog) {
        res.status(500).send('Item not found!');
      }
      return res.status(200).json(blog);
    })
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Blog.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Item deleted');
    }
    throw new Error("Item not found");
  } catch (error) {
    return res.status(500).send(error.message);
}
}

const createComment = async (req, res) => {
  try {
    const comment = await new Comment(req.body)
    await comment.save()
    return res.status(201).json({
      comment,
    })
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}

const getCommentByBlog = async (req, res) => {
  try {
    const comments = await Comment.find(req.body)
    if (comments) {
      return res.status(200).json({ comments } );
    }
    return res.status(404).send('Comments with the specified blog do not exist')

  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const updateComment = (req, res) => {
  try {
    const { id } = req.params;
    Comment.findByIdAndUpdate(id, req.body, { new: true }, (err, comment) => {
      if (err) {
        res.status(500).send(err);
      }
      if (!blog) {
        res.status(500).send('Item not found!');
      }
      return res.status(200).json(comment);
    })
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const deleteComment = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Comment.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Item deleted');
    }
    throw new Error("Item not found");
  } catch (error) {
    return res.status(500).send(error.message);
}
}
module.exports = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
  createComment,
  getCommentByBlog,
  updateComment,
  deleteComment,
}