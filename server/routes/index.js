var express = require('express');
var router = express.Router();
const axios = require("axios");

router.get('/posts', async (req, res) => {
  return await axios.get("https://jsonplaceholder.typicode.com/posts")
		.then(response => {
			res.status(200).json(response.data);
		})
		.catch((err) => {
			res.status(500).json({ message: err });
		});
});

module.exports = router;