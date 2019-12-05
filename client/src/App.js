import React, {ReactElement, useReducer, useMemo, useState} from 'react';
import './App.css';

import Header from "./components/Header/Header";
import JobsList from "./components/JobsList/JobsList";
import Job from "./components/Job/Job";
import ListControls from "./components/ListControls/ListControls";
import FullJob from "./components/JobModal/JobModal";

import jobsMock from './assets/mocks/jobs';
import JobContext from "./contexts/jobContext";
import Paper from "@material-ui/core/Paper";

function jobsReducer(state, { type, payload: {jobs, isNext}}) {
  switch (type) {
    case 'UPDATE':
      return { jobs, isNext };
    default:
      return state;
  }
}

const App = () => {

  const [openJob, setOpenJob] = useState(false);
  const [state, dispatch] = useReducer(jobsReducer, {
    jobs: [],
    isNext: false
  });
  let jobsComponents = [];
  if (state.jobs.length)
    jobsComponents = state.jobs.map(
        job => (
            <Paper className="job" onClick={() => {setOpenJob(true)}}>
              <Job key={job.id} jobInfo={job}/>
            </Paper>
        )
    );

  return (
      <div className="app">
        {/*<Header />*/}
        <JobsList>
          {jobsComponents}
        </JobsList>
        <JobContext.Provider value={{state, dispatch}}>
          <ListControls />
        </JobContext.Provider>
        <FullJob open={openJob} job={jobsMock[0]} clickClose={() => setOpenJob(false)}/>
      </div>
  );
};

export default App;
