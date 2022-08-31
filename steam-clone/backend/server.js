import express from 'express';
import pg from 'pg';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

//configuration
const app = express();
const PORT = process.env.PORT || 4000;
const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    ...(process.env.NODE_ENV === "production" 
    ? {
        ssl: {
            rejectUnauthorized: false
        }
    }
    : {}),
});

//middleware for json data, cors, and static file
app.use(express.static("static"));
app.use(express.json());
app.use(cors());

//middleware for code 404 errors
const unknownHTTP = (req, res, next) => {
    res.sendStatus(404);
    next();
};








//middleware for code 404 errors
app.use(unknownHTTP);

//defines port
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});

//middleware for code 500 errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.sendStatus(500)
})
