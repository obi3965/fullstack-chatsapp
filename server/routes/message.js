const express = require('express');
const { sendMessage, allMessages } = require('../controllers/messageController');
const { protectedUser } = require('../middleware/auth');




const router = express.Router()


router.get('/:chatId', protectedUser, allMessages);
router.post('/', protectedUser, sendMessage);




module.exports = router