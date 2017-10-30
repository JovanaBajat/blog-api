import express from 'express';
import Article from '../model/article';

const router = express.Router();

// home

router.get('/', (req, res) => {
  Article.find({}, (err, articles) => {
    if(err) res.send(err)
    res.send(articles)
  });
});

// home/add

router.post('/add', (req, res) => {
  const article = new Article(req.body);

  article.save((err) => {
    if (err) res.send(err)
    res.json({
      "message" : "New article successcully added"
    });
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
  Article.findByIdAndRemove(req.params.id, err => {
    if(err) res.send(err)
    res.json({
      "message" : "Article has been successcully removed"
    });
  });
});

export default router;
