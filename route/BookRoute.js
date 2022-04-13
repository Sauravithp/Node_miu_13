const express=require('express');
const router=express.Router();

const book=require('../controller/BookController');

router.post('/',book.save);
router.get('/:id',book.getById);
router.get('/',book.getAll);
router.delete('/:id',book.delete);
router.put('/:id',book.update);


module.exports=router;