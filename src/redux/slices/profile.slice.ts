
import { createSlice, current, PayloadAction } from '@reduxjs/toolkit'

interface Profile {
  accessToken: string,
  info: any
}

const initialState = {
  accessToken: '',
  info: {}
} as Profile

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    addAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    addInfo: (state, action: PayloadAction<any>) => {
      state.info = action.payload;
    }
  },
  extraReducers(builder) {
    builder.addDefaultCase((state, action) => {

    })
  },
})

export const {
  addAccessToken,
  addInfo
} = profileSlice.actions

export default profileSlice.reducer;