
import { createSlice, current, PayloadAction } from '@reduxjs/toolkit'

interface Profile {
  accessToken: string,
  info: any,
  cart: {
    cartInfo: any[],
    selectedItems: any[]
  } | null
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
      state.cart = {
        cartInfo: action.payload,
        selectedItems: []
      }
    },
    selectAllProducts: (state, action: PayloadAction<boolean>) => {
      let checked = action.payload;
      if (state.cart) {
        state.cart.selectedItems = checked ? state.cart.cartInfo.reduce((acc, curr) => [...acc, ...curr.items], []) : []
      }
    },
    selectAllShopProducts: (state, action: PayloadAction<{ checked: boolean, index: number }>) => {
      let { checked, index } = action.payload;
      const items = state.cart?.cartInfo[index].items;
      if (state.cart) {
        let shop_id = state.cart?.cartInfo[index].id;
        const newA = state.cart.selectedItems.filter(i => +i.shop_id !== shop_id);
        if (checked) {
          newA.push(...items);
          state.cart.selectedItems = [...newA];
        } else {
          state.cart.selectedItems = [...newA];
        }
      }
    },
    selectItem: (state, action: PayloadAction<{ checked: boolean, id: number, shop_id: number }>) => {
      let { checked, id, shop_id } = action.payload;

      if (state.cart) {
        const shop = state.cart.cartInfo.find(s => s.id === shop_id);
        const item = shop.items.find((i: any) => i.id === id);
        if (checked) {
          state.cart.selectedItems.push(item);
        } else {
          state.cart.selectedItems = state.cart.selectedItems.filter(i => i.id !== id);
        }
      }
    },
    changeQuantity: (state, action: PayloadAction<{ quantity: number, index: number, subIndex: number }>) => {
      let { index, quantity, subIndex } = action.payload;
      if (state.cart) {
        state.cart.cartInfo[index].items[subIndex].quantity = quantity.toString()
      }
    },
    changeQuantity1: (state, action: PayloadAction<{ quantity: number, index: number, subIndex: number }>) => {
      let { index, quantity, subIndex } = action.payload;
      if (state.cart) {
        state.cart.cartInfo[index].items[subIndex].quantity = quantity.toString()
      }
    },
    changeQuantity2: (state, action: PayloadAction<{ quantity: number, index: number, subIndex: number }>) => {
      let { index, quantity, subIndex } = action.payload;
      if (state.cart) {
        state.cart.cartInfo[index].items[subIndex].quantity = quantity.toString()
      }
    }
  },
  extraReducers(builder) {
    builder
      .addMatcher((state) => true, (state, action) => {
        // console.log('-----------------------');
        // state.cart?.selectedItems.forEach(i => {
        //   console.log(i.id);
        // })
        // console.log('-----------------------');

      })
      .addDefaultCase((state, action) => {
      })
  },
})

export const {
  addAccessToken,
  addInfo,
  addCart,
  selectAllProducts,
  selectAllShopProducts,
  selectItem,
  changeQuantity
} = profileSlice.actions

export default profileSlice.reducer;