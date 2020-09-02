
 const {new: _new, index, show, create, comment, edit, update, delete: _delete} = require('../controllers/TradesController');

 //to check for loged in status
 function auth (req, res, next) {    
     if(!req.isAuthenticated()){
        
        return res.status(401).json({message: "You must authenticate before using this API call"})
     }
     next();
 }
 
  module.exports = router => {
     router.get('/trades', index); //public       
     router.get('/trades/new', auth, _new); //authenticated
          
     router.post('/trades', auth, create); //authenticated
     router.post('/trades/update', auth, update); //authenticated
     router.post('/trades/delete', auth, _delete);//authenticated
       
     router.post('/trades/comment', auth, comment);
     router.get('/trades/:id/edit', auth, edit); //authenticated   
     router.get('/trades/:id', show); //public
 };