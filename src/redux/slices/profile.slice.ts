
import { createSlice, current, PayloadAction } from '@reduxjs/toolkit'

interface Profile {
  accessToken: string,
  info: any,
  cart: any
}

const initialState = {
  accessToken: '',
  info: {},
  cart: null
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
    },
    addCart: (state, action: PayloadAction<any>) => {
      state.cart = action.payload;
    }
  },
  extraReducers(builder) {
    builder.addDefaultCase((state, action) => {

    })
  },
})

export const {
  addAccessToken,
  addInfo,
  addCart
} = profileSlice.actions

export default profileSlice.reducer;