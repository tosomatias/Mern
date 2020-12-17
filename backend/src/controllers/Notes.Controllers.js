const notesControllers = {};

const { findByIdAndDelete } = require('../models/Notes');
const Note = require('../models/Notes');

notesControllers.getNotes = async(req,res) => {
    const notes = await Note.find();
    res.json(notes)
};

notesControllers.createNotes = async(req,res) => {
    const {title,content,date,author} = req.body;
    const newNote = new Note({
        title:title,
        content:content,
        date:date,
        author:author
    });
    await newNote.save();
    res.json({message:'Note  Saved'})
};

notesControllers.getNote =async (req,res) => {
    const note = await Note.findById(req.params.id);
    
    res.json({title:'Hola matute'})
};

notesControllers.updateNote = async(req,res) =>{
    const {title,content,author} = req.body;
    await Note.findOneAndUpdate({_id :req.params.id},{
        title,
        content,
        author
    });
    
    res.json({message:'Note Updated'})
};

notesControllers.deleteNotes =async (req,res) => {
    await Note.findByIdAndDelete(req.params.id);

    res.json({message:'Delete Request'}) 
};


module.exports = notesControllers;