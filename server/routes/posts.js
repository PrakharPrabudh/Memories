const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth")
const { getPostsBySearch,getPosts, createPost,updatePost,deletePost,likePost,getPost,commentPost } = require("../controllers/posts");

router.get("/search", getPostsBySearch);
router.get("/", getPosts);
router.get('/:id',getPost)
router.post("/", auth, createPost);
router.patch("/:id",auth,updatePost);
router.delete("/:id",auth,deletePost);
router.patch("/:id/likePost",auth,likePost);
router.post("/:id/commentPost",auth,commentPost);
module.exports = router;
