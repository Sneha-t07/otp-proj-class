const verifyToken = require('../middleware/verifyToken');


router.get('/profile', verifyToken, authController.getProfile);
router.put('/profile', verifyToken, authController.updateProfile);