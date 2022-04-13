let Book=require('../model/Book')

module.exports.save=(req,res)=>{
    console.log("inside save")
    let book=req.body;
    console.log(req.body);
    let savedBook=new Book(null,book.title,book.ISBN,book.publishedDate,book.author).save();
    res.status(201).send(savedBook);
}

module.exports.getById=(req,res)=>{
    console.log("Get By ID")
    let id=req.params.id;
    console.log(req.params.id);
    let book=Book.getById(id);
    res.status(200).send(book);
}

module.exports.getAll=(req,res)=>{
    res.status(200).send(Book.getAll());
}

module.exports.delete=(req,res)=>{
    console.log("inside delete")
    res.status(200).send(Book.delete(req.params.id));
}

module.exports.update=(req,res)=>{
    console.log("inside update")
    let book=req.body;
    console.log(book);
    let toUpdateBook = new Book(req.params.id,book.title,book.ISBN,book.publishedDate,book.author).update();
    res.status(200).send(toUpdateBook);
}