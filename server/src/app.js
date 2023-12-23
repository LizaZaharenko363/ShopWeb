import express from 'express';
import cors from 'cors';
import config from './config';
import productRoutes from './routes/products.routes';
import categoryRoutes from './routes/categories.routes';
import ordersRoutes from './routes/orders.routes';
import commentRoutes from './routes/comments.routes.js';

const app = express();

app.use(cors());
app.set('port', config.port);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use(productRoutes);
app.use(categoryRoutes);
app.use(ordersRoutes);
app.use(commentRoutes);

export default app;