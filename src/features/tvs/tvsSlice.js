import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getTvs } from '../../api/tmdbApi'

const tvsSlice = createSlice({
   name: 'tvs',
   initialState: {
      loading: false,
      tvs: [],
      error: null,
   },
   reducers: {},
   extraReducers: (builder) => {},
})
