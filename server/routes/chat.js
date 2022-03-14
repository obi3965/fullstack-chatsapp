const express = require('express');
const { accessChat, fetchChats, createGroupChat, 
removeFromGroup, addToGroup, renameGroup } = require('../controllers/chatController');
const { protectedUser } = require('../middleware/auth');




const router = express.Router()



 router.post('/', protectedUser, accessChat)
 router.get('/',protectedUser, fetchChats)
 router.post('/group', protectedUser, createGroupChat)

 router.put('/groupRemove', removeFromGroup)
 router.put('/groupadd', protectedUser, addToGroup)
 router.put('/rename', protectedUser, renameGroup)



module.exports = router