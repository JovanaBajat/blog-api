import express from 'express';
import Article from '../model/article';
import multer from 'multer';
import fs from 'fs';

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, fille, cb)=> {
    cb(null, '../public/my_uploads')
  },
  filename:  (req, file, cb) => {
    cb (null, file.originalname);
  }
});

const upload = multer({ storage : storage})

// home

router.get('/', (req, res) => {
  Article.find({}, (err, articles) => {
    if(err) res.send(err)
    res.send(articles)
  });
});

// home/add

router.post('/add', upload.single('photo'), (req, res) => {
  let article = new Article(req.body);
  if (req.file) {
    article.photo = `${req.file.filename}`;
  }
  article.save((err) => {
    if (err) return res.redirect('http://localhost:3000/')
   res.redirect('http://localhost:3000/')

  });
});
// home/:id/update

router.post('/:id/update', (req, res) => {
  Article.findByIdAndUpdate(req.params.id, req.body, err => {
    if(err) res.send(err)
    res.json({
      "message" : "Article has been updated successcully"
    });
  });
});

// home/:id/delete

router.get('/:id/delete', (req, res) => {
  Article.findOne({ _id: req.params.id }, (err, article) => { //find id of the article
    if(article.photo) {//check if there is a photo
      fs.unlinkSync(`../public/my_uploads/${article.photo}`) //if yes than remove photo
    }
    Article.remove(article, err => err ? res.send(err) : res.redirect('http://localhost:3000/')); // remove article
  });
});

export default router;
