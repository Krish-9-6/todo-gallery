const express = require('express');
const router = express.Router();
const Task = require('../models/Task');
const { upload } = require('../utils/cloudinary');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, upload.single('image'), async (req, res) =>{
    try{
        const {title, description} = req.body;

        const newTask = new Task({
            user: req.user.id,
            title,
            description,
            imageUrl: req.file.path,
        });

        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    }
    catch(err){
        console.error("Save Error:", err.message);
        res.status(500).json({message: err.message});
    }

});


router.get('/', auth, async(req, res) => {
    try{
        const tasks = await Task.find({ user: req.user.id }).sort({ createdAt: -1});
        res.json(tasks);
    }
    catch(err){
        console.error("Fetch Error:", err.message);
        res.status(500).json({message: err.message});
    }
});

module.exports = router;
