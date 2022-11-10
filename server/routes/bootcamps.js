const express = require('express');
const {getBootCamps, getBootCamp, createBootCamp, updateBootCamp, deleteBootCamp} = require('../controllers/bootcamps')

const router = express.Router();

router
    .route('/')
    .get(getBootCamps)
    .post(createBootCamp);

router
    .route('/:id')
    .get(getBootCamp)
    .patch(updateBootCamp)
    .delete(deleteBootCamp);

// //GET ALL BOOTCAMPS
// router.get('/', (req, res) => {
//     res.status(200).json({success: true, msg: 'Show all bootcamps'});
// });

// //GET A BOOTCAMP
// router.get('/:id', (req, res) => {
//     res.status(200).json({success: true, msg: 'Show Single Bootcamp'});
// });

// //CREATE BOOTCAMP
// router.post('/', (req, res) => {
//     res.status(200).json({success: true, msg: 'Create a New Bootcamp'});
// });

// //UPDATE A BOOTCAMP
// router.patch('/:id', (req, res) => {
//     res.status(200).json({success: true, msg: 'Update Bootcamp'});
// });

// //DELETE A BOOTCAMP
// router.delete('/:id', (req, res) => {
//     res.status(200).json({success: true, msg: 'Delete Bootcamp'});
// });

module.exports = router; 