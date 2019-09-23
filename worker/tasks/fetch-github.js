const fetch = require('node-fetch')
var redis = require("redis"),
client = redis.createClient();
const {promisify} = require('util');

//const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

const baseUrl = `https://jobs.github.com/positions.json`


const fetchGithubJobs = async () => {

    let resultPageCount = 1; 
    let onPage=0
    allJobs = []

    while(resultPageCount > 0){
        const res = await fetch(`${baseUrl}?page=${onPage}`) 
        const jobs = await res.json()
        allJobs.push(jobs)
        resultPageCount = jobs.length; 
        console.log('got', resultPageCount, 'jobs','onPage', onPage)
        onPage ++;
    }

    console.log('got', resultPageCount, 'jobs','onPage', onPage)

    const juniorDeveloper = allJobs.filter(job =>{
        const jobTitle = job.title.toLowerCase();

        if(
            jobTitle.includes("senior") ||
            jobTitle.includes("manager")||
            jobTitle.includes("sr")
        ){
            return false
        }
        return true

    })

    console.log('filtered down to', juniorDeveloper.length)
    const success = await setAsync('github', JSON.stringify(juniorDeveloper))
    console.log(success)

}

fetchGithubJobs()


module.exports = fetchGithubJobs