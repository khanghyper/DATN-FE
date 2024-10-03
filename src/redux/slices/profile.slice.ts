
import { createSlice, current, PayloadAction } from '@reduxjs/toolkit'


const initialState = {
  profile: {}
} as { profile: any }

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    getProfile: (state, action: PayloadAction<any>) => {
      state.profile = { ...action.payload };
    }
  },
  extraReducers(builder) {
    builder.addDefaultCase((state, action) => {

    })
  },
})

export const {
  getProfile
} = profileSlice.actions

export default profileSlice.reducer;