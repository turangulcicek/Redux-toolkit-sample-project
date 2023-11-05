import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mainJobs: [],
  jobs: [],
  initialised: false,
  isError: false,
};
const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setJobs: (state, action) => {
      (state.mainJobs = action.payload),
        (state.jobs = action.payload),
        ((state.initialised = true), (state.isError = false));
    },
    setError: (state) => {
      state.isError = true;
      state.initialised = true;
    },
    addJob: (state, action) => {
      state.jobs.push(action.payload);
    },
    filterBySearch: (state, action) => {
      const query = action.payload.toLowerCase();
      const filter = state.mainJobs.filter((job) =>
        job.company.toLowerCase().includes(query)
      );
      state.jobs = filter;
    },
    filterByStatus: (state, action) => {
      const filtered = state.mainJobs.filter(
        (job) => job.status === action.payload
      );
      state.jobs = filtered;
    },

    filterBytype: (state, action) => {
      const filtered = state.mainJobs.filter(
        (job) => job.type === action.payload
      );
      state.jobs = filtered;
    },
    sortJobs: (state, action) => {
      switch (action.payload) {
        case "a-z":
          state.jobs.sort((a, b) => a.company.localeCompare(b.company));
          return;
        case "z-a":
          state.jobs.sort((a, b) => b.company.localeCompare(a.company));
          return;
        case "En Yeni":
          state.jobs.sort((a, b) => new Date(b.date) - new Date(a.date));
          return;
        case "En Eski":
          state.jobs.sort((a, b) => new Date(a.date) - new Date(b.date));
          return;
      }
    },
    clearFilter: (state) => {
      state.jobs = state.mainJobs;
    },
  },
});

export const {
  setError,
  setJobs,
  sortJobs,
  filterBytype,
  filterByStatus,
  addJob,
  filterBySearch,
  clearFilter,
} = jobSlice.actions;

export default jobSlice.reducer;
