import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

const baseUrl = "http://localhost:1009/tasks";

export const getAllTasks = createAsyncThunk("tasks/getAllTasks", async () => {
  return await axios.get(baseUrl).then((res) => res.data);
});

