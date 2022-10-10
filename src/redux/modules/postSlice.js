import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:3001";

/* InitialState */
// data, isLoading, error로 상태관리
const initialState = {
  posts: [],
  isLoading: false,
  error: null,
};

/* Thunk function */
// [GET - 데이터 전체 조회]
export const getPosts = createAsyncThunk(
  "GET_ALL_POSTS",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/posts`);
      return thunkAPI.fulfillWithValue([...data]);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// [POST]
export const addPosts = createAsyncThunk(
  "POST_POSTS",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/posts`, payload);
      console.log("data", data);
      return thunkAPI.fulfillWithValue(data);
    } catch (errer) {
      return thunkAPI.rejectWithValue(errer);
    }
  }
);

// [UPDATE]
export const updatePosts = createAsyncThunk(
  "UPDATAE_POSTS",
  async (payload, thunkAPI) => {
    try {
      console.log(payload);
      const response = await axios.put(
        `${BASE_URL}/posts/${payload.id}`,
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
export const deletePosts = createAsyncThunk(
  "DELETE_POSTS",
  async (payload, thunkAPI) => {
    try {
      await axios.delete(`${BASE_URL}/posts/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const postsSlice = createSlice({
  // 모듈 이름
  name: "posts",
  // 초기 상태값
  initialState,
  // reducers
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPosts.fulfilled, (state, action) => {
      // Add user to the state array
      state.posts = [action.payload];
    });
    builder.addCase(addPosts.fulfilled, (state, action) => {
      // Add user to the state array
      console.log(current(state))
      console.log(action)
      state.posts[0].push(action.payload);
      return state;
    });
    builder.addCase(updatePosts.fulfilled, (state, action) => {
      // Add user to the state array
      console.log(current(state));
      console.log(action);
      const newState = state.posts[0].data.map((item) =>
        action.meta.arg.id === item.comment_id
          ? { ...item, content: action.meta.arg.content }
          : item
      );
      state.posts[0].data = newState;
      state.posts.push(action.payload);
      return state;
    });
    builder.addCase(deletePosts.fulfilled, (state, action) => {
      // Add user to the state array
      const newState = state.posts[0].filter(
        (item) => item.id !== action.payload
      );
      state.posts[0] = newState;
      // state.posts.push(action.payload);
      return state;
    });
  },
});

export default postsSlice.reducer;
