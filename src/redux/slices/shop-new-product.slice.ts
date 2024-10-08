
import { combineVariants } from '@/helpers'
import { createAsyncThunk, createSlice, current, PayloadAction } from '@reduxjs/toolkit'

export enum CategoryTypeValue {
  SINGLE = 'SINGLE',
  MULTIPLE = 'MULTIPLE'
}

export type Category = {
  id: number
  name: string
  parentId?: number | null
}

export type CategoryAttribute = {
  id: number
  key: string,
  values: {
    value: string,
    label: string
  }[]
  categoryId: number
  categoryTypeValue: CategoryTypeValue
}

export type VariantItem = {
  name: string,
  values: {
    image: string,
    value: string,
  }[]
}

export type VariantProduct = {
  price: number,
  inStock: number,
  sku: string,
  image: string
  variants: {
    name: string,
    value: string
  }[]
}

interface InitialState {
  rootCategories: Category[]
  categories: { data: Category[] }[],
  selectedCategories: Category[]
  selectedCategories1: Category[]
  isConfirmCategories: boolean
  rootCategoryAttributes: CategoryAttribute[],
  categoryAttributesSelected: CategoryAttribute[],
  categoryAttributesIndex: null | number
  varriant: {
    isChangeVariantMode: boolean,
    variantItems: VariantItem[]
    variantProducts: VariantProduct[]
  }
}

const a: Category[] = [
  { "id": 1, "name": "Thời trang nữ", "parentId": null },
  { "id": 2, "name": "Quần jean", "parentId": 1 },
  { "id": 3, "name": "Quần đùi", "parentId": 1 },
  { "id": 12, "name": "Áo", "parentId": 1 },
  { "id": 4, "name": "Áo polo", "parentId": 12 },
  { "id": 5, "name": "Áo thun", "parentId": 12 },
  { "id": 7, "name": "Giày dép nam", "parentId": null },
  { "id": 8, "name": "Giày tây lười", "parentId": 7 },
  { "id": 11, "name": "Máy tính và Laptop", "parentId": null }
]

const b: CategoryAttribute[] = [
  { id: 0, key: 'Thương hiệu', values: [{ value: 'no-brand', label: 'No Brand' }, { value: 'adam-store', label: 'Adam Store' }], categoryId: 8, categoryTypeValue: CategoryTypeValue.MULTIPLE },
  { id: 1, key: 'Xuất xứ', values: [{ value: 'japan', label: 'Nhật Bản' }, { value: 'vietnam', label: 'Việt Nam' }, { value: 'china', label: 'Trung Quốc' }], categoryId: 8, categoryTypeValue: CategoryTypeValue.SINGLE }
]

export const fetchCategoriesByParentId = async (parentId: null | number): Promise<Category[]> => {
  return a.filter(item => item.parentId === parentId);
}

export const fetchCategories = async () => {
  return a;
}

export const findCategoryListById = createAsyncThunk(
  'shopListProduct/findCategoryListById',
  async (parentId: null | number, thunkAPI) => {
    const response = await fetchCategoriesByParentId(parentId);
    return response
  }
)
export const findCategoryList = createAsyncThunk(
  'shopListProduct/findCategoryList',
  async (_, thunkAPI) => {
    const response = await fetchCategories();
    return response
  }
)


const initialState: InitialState = {
  rootCategories: [],
  categories: [],
  selectedCategories: [],
  selectedCategories1: [],
  isConfirmCategories: false,
  rootCategoryAttributes: [],
  categoryAttributesSelected: [],
  categoryAttributesIndex: null,
  varriant: {
    isChangeVariantMode: false,
    variantItems: [
      // {
      //   name: 'Màu sắc',
      //   values: [
      //     {
      //       image: '',
      //       value: 'Đỏ',
      //     },
      //     {
      //       image: '',
      //       value: 'Xanh',
      //     }
      //   ]
      // },
    ],
    variantProducts: []
  }
}

const shopListProductSlice = createSlice({
  name: 'shopListProduct',
  initialState,
  reducers: {
    addToSelectedCategories: (state, action: PayloadAction<{ id: number, index: number }>) => {
      const { id: categoryId, index } = action.payload;
      const category = state.rootCategories.find(item => item.id === categoryId);
      if (category) {
        // danh sach cac danh muc con theo id danh muc
        const categoryChildList = (state.rootCategories as Category[]).filter(item => item.parentId === categoryId);
        // kiem tra danh muc co danh muc con hay ko
        state.categories.splice(index + 1, 10);
        state.categories[index + 1] = { data: [...categoryChildList] };
        state.selectedCategories.splice(index, 10);
        state.selectedCategories[index] = category;
        state.selectedCategories1.splice(index, 10);
        state.selectedCategories1[index] = category;
        if (categoryChildList.length > 0) {
          state.selectedCategories1.splice(index, 10);
          state.isConfirmCategories = false;
        } else {
          state.isConfirmCategories = true;
          state.selectedCategories1.forEach(it => console.log(it.name))
        }
      }
    },
    confirmCategory: (state, action: PayloadAction<number>) => {
      const categoryAttributes = b.filter(item => item.categoryId === action.payload);
      state.categoryAttributesSelected = [...categoryAttributes];
    },
    showAttributesByIndex: (state, action: PayloadAction<number>) => {
      state.categoryAttributesIndex = action.payload;
    },
    changeVariantMode: (state) => {
      if (!state.varriant.isChangeVariantMode) {
        state.varriant.isChangeVariantMode = true;
        state.varriant.variantItems.push({
          name: '',
          values: [
            {
              image: '',
              value: ''
            }
          ]
        })
      }
    },
    addVariant: (state) => {
      if (state.varriant.variantItems.length < 2) {
        state.varriant.variantItems.push({
          name: '',
          values: [
            {
              image: '',
              value: ''
            }
          ]
        })
      }
    },
    addValueInVariantItem: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      state.varriant.variantItems[index].values.push({
        image: '',
        value: ''
      })
    },
    changeInputNameVariant: (state, action: PayloadAction<{ index: number, name: string }>) => {
      const { index, name } = action.payload
      if (name) {
        state.varriant.variantItems[index].name = name;

      }
    },
    changeInputNameVariantValue: (state, action: PayloadAction<{ parentIndex: number, index: number, name: string }>) => {
      const { parentIndex, index, name } = action.payload;
      state.varriant.variantItems[parentIndex].values[index].value = name;
    },
    changeInputPriceVariantProduct: (state, action: PayloadAction<{ index: number, value: number }>) => {
      const { index, value } = action.payload;
      state.varriant.variantProducts[index].price = value;
    },
    changeInputInStockVariantProduct: (state, action: PayloadAction<{ index: number, value: number }>) => {
      const { index, value } = action.payload;
      state.varriant.variantProducts[index].inStock = value;
    },
    changeInputSkuVariantProduct: (state, action: PayloadAction<{ index: number, value: string }>) => {
      const { index, value } = action.payload;
      state.varriant.variantProducts[index].sku = value;
    },
    changePriceInStockSkuVariantProducts: (state, action: PayloadAction<{ price: number, inStock: number, sku: string }>) => {
      const { price, inStock, sku } = action.payload;
      state.varriant.variantProducts.forEach(item => {
        item.price = price;
        item.inStock = inStock;
        item.sku = sku;
      })
    },
    deleteVariant: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      state.varriant.variantItems.splice(index, 1);
      if (state.varriant.variantItems.length === 0) {
        state.varriant.isChangeVariantMode = false;
      }
    },
    deleteVariantValueInItem: (state, action: PayloadAction<{ parentIndex: number, index: number }>) => {
      const { parentIndex, index } = action.payload;
      if (state.varriant.variantItems[parentIndex].values.length > 1) {
        state.varriant.variantItems[parentIndex].values.splice(index, 1);
      }
    }
  },
  extraReducers(builder) {
    builder
      .addCase(findCategoryListById.fulfilled, (state, action) => {
        state.categories = [{ data: [...action.payload] }];
      })
      .addCase(findCategoryList.fulfilled, (state, action) => {
        state.rootCategories = action.payload;
      })
      .addMatcher((action) => {
        return ['changeInputNameVariantValue', 'deleteVariantValueInItem', 'addValueInVariantItem'].some(prefix => (action.type as string).endsWith(prefix))
      }, (state, action) => {
        state.varriant.variantProducts = combineVariants(state.varriant.variantItems);
        console.log({ a: state.varriant.variantProducts });
      })
      .addMatcher((state) => true, (state, action) => {
        if (!state.varriant.isChangeVariantMode) {
          state.varriant.variantProducts = []
        }
      })
      .addDefaultCase((state, action) => {
      })
  },
})

export const {
  addToSelectedCategories,
  confirmCategory,
  showAttributesByIndex,
  changeVariantMode,
  addVariant,
  addValueInVariantItem,
  changeInputNameVariant,
  changeInputNameVariantValue,
  changeInputInStockVariantProduct,
  changeInputPriceVariantProduct,
  changeInputSkuVariantProduct,
  changePriceInStockSkuVariantProducts,
  deleteVariant,
  deleteVariantValueInItem
} = shopListProductSlice.actions

export default shopListProductSlice.reducer;