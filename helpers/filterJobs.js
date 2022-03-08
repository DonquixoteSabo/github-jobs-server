import { jobs } from '../data/mockedJobs.js';

const filterJobs = ( {location, isFullTime,value = null} ) => {
    let filteredJobs = jobs;

    if (location) {
        filteredJobs = filteredJobs.filter((job) =>
            job.location.toLowerCase().includes(location.toLowerCase())
        );
    }

    if (isFullTime) {
        filteredJobs = filteredJobs?.filter((job) => job.type === 'Full Time');
    }

    if (value) {
        filteredJobs = filteredJobs.filter((job) =>
            job.title.toLowerCase().includes(value.toLowerCase())
    );
    }

    return filteredJobs;
};

export default filterJobs;