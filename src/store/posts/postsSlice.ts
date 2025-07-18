import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import {Post} from "../../utils/interfaces";

interface PostsState {
    items: Post[];
    status: 'loading' | 'success' | 'failed';
    error: string | null;
    skip: number;
    hasMore: boolean;
}

const initialState: PostsState = {
    items: [],
    status: 'loading',
    error: null,
    skip: 0,
    hasMore: true,
};

export const fetchPosts = createAsyncThunk<Post[], number>(
    'posts/fetchPosts',
    async (skip) => {
        const response = await axios.get<{ posts: Post[] }>(
            `https://dummyjson.com/posts?limit=10&skip=${skip}`
        );
        return response.data.posts;
    }
);

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
                state.status = 'success';
                state.items = [...state.items, ...action.payload];
                state.skip += 10;
                state.hasMore = action.payload.length === 10;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch posts';
            });
    },
});

export default postsSlice.reducer;