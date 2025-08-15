
const express = require('express');
const { registerUser, loginUser, updateUserProfile, getProfile } = require('../controllers/authController');
const {
  createProduct,
  updateProduct,
  deleteProduct,
  getProducts,
  getProductById,
} = require("../controllers/productController");
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', protect, getProfile);
router.put('/profile', protect, updateUserProfile);


router.get("/", getProducts);
router.get("/:id", getProductById);

router.post("/", protect, createProduct);
router.put("/:id", protect, updateProduct);
router.delete("/:id", protect, deleteProduct); 


module.exports = router;
