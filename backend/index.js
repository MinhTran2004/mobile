const express = require('express');
const cors = require('cors');

const connectDB = require('./config');
const accountRoute = require('./routers/Router_Account');
const addressRoute = require('./routers/Router_Address');
const productRoute = require('./routers/Router_Product');
const categoryRoute = require('./routers/Router_Category');
const cartRoute = require('./Routers/Router_Cart');

const app = express();
const port = 5000;

connectDB();

app.use(cors());
app.use(express.json());

app.use('/account', accountRoute);
app.use('/address', addressRoute);
app.use('/product', productRoute);
app.use('/category', categoryRoute);
app.use('/cart', cartRoute);

app.listen(port, () => {
  console.log(`Ứng dụng đang lắng nghe trên cổng ${port}`);
  
});