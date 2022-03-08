import express from 'express';

import filterJobs from "./helpers/filterJobs.js";
import {jobs} from "./data/mockedJobs.js";

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/jobs/all', (req, res) => {
    const isFullTime = req.query.fulltime || null;
    const location = req.query.location || null;
    let filteredJobs = filterJobs({ isFullTime, location });

    return res.json(filteredJobs);
})

app.get('/jobs/job/:id', (req, res, ctx) => {
    const { id } = req.params;
    const job = jobs.filter((job) => job.id.toString() === id);

    return res.json(job[0]);
})

app.get('/jobs', (req, res) => {
    const value = req.query.value || null;
    const isFullTime = req.query.fulltime || null;
    const location = req.query.location || null;
    let filteredJobs = filterJobs({ isFullTime, location, value });

    return res.json(filteredJobs);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})