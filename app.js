import express from 'express';
import { posts } from './routers/posts.js';
const app = express();
const port = 3000;

app.use(express.static('public'));

app.use('/posts', posts);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});