import { createSlice, configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const categorySlice = createSlice({
    name: 'categories',
    initialState: {
        allCategories: [],
        currentCategory: null
    },
    reducers: {
        setCategories: (state, action) => {
            state.allCategories = action.payload;
        },
        setCurrentCategory: (state, action) => {
            state.currentCategory = action.payload;
        }
    }
})

const subcategorySlice = createSlice({
    name: 'subcategories',
    initialState: {
        allSubcategories: [],
        currentSubcategory: null
    },
    reducers: {
        setSubcategories: (state, action) => {
            state.allSubcategories = action.payload;
        },
        setCurrentSubcategory: (state, action) => {
            state.currentSubcategory = action.payload;
        }
    }
});

const companySlice = createSlice({
    name: 'companies',
    initialState: {
        allCompanies: [],
        currentCompany: 'All'
    },
    reducers: {
        setCompanies: (state, action) => {
            state.allCompanies = action.payload;
        },
        setCurrentCompany: (state, action) => {
            state.currentCompany = action.payload;
        }
    }
});

const productSlice = createSlice({
    name: 'products',
    initialState: {
        allProducts: [],
        currentProduct: null
    },
    reducers: {
        setProducts: (state, action) => {
            state.allProducts = action.payload;
        },
        setCurrentProduct: (state, action) => {
            state.currentProduct = action.payload;
        }
    }
});

//Config for redux-persist
const combinedReducers = combineReducers({
    products: productSlice.reducer,
    categories: categorySlice.reducer,
    subcategories: subcategorySlice.reducer,
    companies: companySlice.reducer
})
const persistConfig = { key: 'root', storage, version: 1 };
const persistedReducer = persistReducer(persistConfig, combinedReducers);

export const store = configureStore({
    reducer: persistedReducer
});

export const persistor = persistStore(store);

export const { setCategories, setCurrentCategory } = categorySlice.actions;
export const { setSubcategories, setCurrentSubcategory } = subcategorySlice.actions;
export const { setCompanies, setCurrentCompany } = companySlice.actions;
export const { setProducts, setCurrentProduct } = productSlice.actions;
