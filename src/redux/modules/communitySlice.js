import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:3001";

/* InitialState */
// data, isLoading, error로 상태관리
const initialState = {
  community: [],
  isLoading: false,
  error: null,
};

/* Thunk function */
// [GET - 데이터 전체 조회]
export const getCommunity = createAsyncThunk(
  "GET_ALL_COMMUNITY",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/community`);
      return thunkAPI.fulfillWithValue([...data]);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// [GET - 데이터 전체 조회]
export const getEachCommunity = createAsyncThunk(
  "GET_EACH_COMMUNITY",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/community`);
      return thunkAPI.fulfillWithValue([...data]);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// [POST]
export const addCommunity = createAsyncThunk(
  "POST_COMMUNITY",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/community`, payload);
      console.log("data", data);
      return thunkAPI.fulfillWithValue(data);
    } catch (errer) {
      return thunkAPI.rejectWithValue(errer);
    }
  }
);

// [UPDATE]
export const updateCommunity = createAsyncThunk(
  "UPDATAE_COMMUNITY",
  async (payload, thunkAPI) => {
    try {
      console.log(payload);
      const response = await axios.put(
        `${BASE_URL}/community/${payload.id}`,
        payload
      );
      console.log("response", response);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// [DELETE]
export const deleteCommunity = createAsyncThunk(
  "DELETE_COMMUNITY",
  async (payload, thunkAPI) => {
    try {
      await axios.delete(`${BASE_URL}/community/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const communitySlice = createSlice({
  // 모듈 이름
  name: "community",
  // 초기 상태값
  initialState,
  // reducers
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCommunity.fulfilled, (state, action) => {
      // Add user to the state array
      state.community = [action.payload];
    });
    builder.addCase(getEachCommunity.fulfilled, (state, action) => {
      // Add user to the state array
      state.community = [action.payload];
    });
    builder.addCase(addCommunity.fulfilled, (state, action) => {
      // Add user to the state array
      console.log(current(state))
      console.log(action)
      state.community[0].push(action.payload);
      return state;
    });
    builder.addCase(updateCommunity.fulfilled, (state, action) => {
      // Add user to the state array
      console.log(current(state));
      console.log(action);
      const newState = state.community[0].data.map((item) =>
        action.meta.arg.id === item.comment_id
          ? { ...item, content: action.meta.arg.content }
          : item
      );
      state.community[0].data = newState;
      state.community.push(action.payload);
      return state;
    });
    builder.addCase(deleteCommunity.fulfilled, (state, action) => {
      // Add user to the state array
      const newState = state.community[0].filter(
        (item) => item.id !== action.payload
      );
      state.community[0] = newState;
      // state.community.push(action.payload);
      return state;
    });
  },
});

export default communitySlice.reducer;
