
import { createAsyncThunk, createSlice, current, PayloadAction } from '@reduxjs/toolkit'

export type Category = {
  id: number
  name: string
  parentId?: number | null
  children: Category[]
}

interface InitialState {
  data: Category[]
}

const fetchCategories = async (): Promise<Category[]> => {
  const a = [
    {
      "id": 1, "name": "Thời trang nam", "parentId": null,
      children: [
        {
          "id": 2, "name": "Quần jean", "parentId": 1, children: []
        },
        { "id": 3, "name": "Quần đùi", "parentId": 1, children: [] },
        {
          "id": 12, "name": "Áo", "parentId": 1, children: [
            { "id": 4, "name": "Áo polo", "parentId": 2, children: [] },
            { "id": 5, "name": "Áo thun", "parentId": 2, children: [] },
          ]
        },
      ]
    },

    {
      "id": 7, "name": "Giày dép nam", "parentId": null, children: [
        { "id": 8, "name": "Giày tây lười", "parentId": 7, children: [] },
      ]
    },
    { "id": 11, "name": "Máy tính và Laptop", "parentId": null, children: [] },
  ]
  return a;
}

export const getCategoryList = createAsyncThunk(
  'shopListProduct/getCategoryList',
  async (_, thunkAPI) => {
    const response = await fetchCategories();
    return response
  }
)

const initialState: InitialState = {
  data: []
}

const shopListProductSlice = createSlice({
  name: 'shopListProduct',
  initialState,
  reducers: {
    getCategories: (state, action: PayloadAction<any>) => {

    }
  },
  extraReducers(builder) {
    builder
      .addCase(getCategoryList.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addDefaultCase((state, action) => {

      })
  },
})

export const {

} = shopListProductSlice.actions

export default shopListProductSlice.reducer;