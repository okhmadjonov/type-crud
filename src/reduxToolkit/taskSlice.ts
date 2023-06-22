import { createSlice } from "@reduxjs/toolkit";
import { getAllTasks } from "./extraTaskSlice";

const initialState = {
  loading: true,
  tasksData: [],
};

const taskReducer: any = createSlice({
  name: "tasks",
  initialState,
  reducers: {},

  extraReducers: (build) => {
    //Get All Tasks
    build
      .addCase(getAllTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasksData = action.payload;
      })
      .addCase(getAllTasks.rejected, (state, action) => {
        // state.error = action.error.message;
      });
  },
});

// export const {} = taskReducer.actions;
export default taskReducer.reducer;
