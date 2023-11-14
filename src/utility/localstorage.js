const getStoredJobApplication = () =>{
    const storedJobApplication = localStorage.getItem('job_applications');
    if(storedJobApplication){
        return JSON.parse(storedJobApplication);
    }
    return [];
}

const saveJobApplication = id =>{
    const storedJobApplications = getStoredJobApplication();
    const exists = storedJobApplications.find(jobId => jobId === id);
    if(!exists){
        storedJobApplications.push(id);
        localStorage.setItem('job_applications', JSON.stringify(storedJobApplications))
    }
}

export { getStoredJobApplication, saveJobApplication}