const express = require('express');
const dbConnect = require('./config/dbConnect')
const app = express();
const dotenv = require('dotenv').config();

const accountRouter = require('./routes/accountRoute');
const comicRouter = require('./routes/comicRoute');
const chapterRouter = require('./routes/chapterRoute');
const chapViewRouter = require('./routes/chapViewRoute');

const bodyParser = require('body-parser');
const { notFound, errorHandler } = require('./middleware/errolHandle');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors');
const PORT = process.env.PORT || 4000;
dbConnect();

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/account', accountRouter);
app.use('/api/comic', comicRouter);
app.use('/api/chapter', chapterRouter);
app.use('/api/chapview', chapViewRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
});