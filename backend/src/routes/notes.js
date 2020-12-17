const Router = require('express');
const router = Router();
const {getNotes, createNotes , getNote, updateNote, deleteNotes} = require('../controllers/Notes.Controllers')

router.route('/')
    .get(getNotes)
    .post(createNotes)


router.route('/:id') 
.get(getNote)
.put(updateNote)
.delete(deleteNotes)


module.exports = router;