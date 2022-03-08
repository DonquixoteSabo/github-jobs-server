import express from 'express';

import filterJobs from "./helpers/filterJobs.js";

const app = express()
const port = 5000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/jobs/all', (req, res) => {
    const isFullTime = req.query.fulltime || null;
    const location = req.query.location || null;
    let filteredJobs = filterJobs({ isFullTime, location });

    return res.json(filteredJobs);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})