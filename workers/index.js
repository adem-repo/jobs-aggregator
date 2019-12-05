const CronJob = require('cron').CronJob;
const getGitHubJobs = require('./getGitHubJobs');
new CronJob('* * * * * ', getGitHubJobs, null, true);