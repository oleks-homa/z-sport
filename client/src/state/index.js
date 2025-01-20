import { createSlice, configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const categorySlice = createSlice({
    name: 'category',
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
    name: 'subcategory',
    initialState: {
        currentSubcategory: null
    },
    reducers: {
        setCurrentSubcategory: (state, action) => {
            state.currentSubcategory = action.payload;
        }
    }
});

const companySlice = createSlice({
    name: 'company',
    initialState: {
        currentCompany: ''
    },
    reducers: {
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

const userSlice = createSlice({
    name: 'user',
    initialState: {
        email: '',
        picturePath: '',
        isSignedIn: false
    },
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload;
        }, 
        setPicturePath: (state, action) => {
            state.picturePath = action.payload;
        },
        setIsSignedIn: (state, action) => {
            state.isSignedIn = action.payload;
        }
    }
})

//Config for redux-persist
const combinedReducers = combineReducers({
    products: productSlice.reducer,
    category: categorySlice.reducer,
    subcategory: subcategorySlice.reducer,
    company: companySlice.reducer,
    user: userSlice.reducer
})
const persistConfig = { key: 'root', storage, version: 1 };
const persistedReducer = persistReducer(persistConfig, combinedReducers);

export const store = configureStore({
    reducer: persistedReducer
});

export const persistor = persistStore(store);

export const { setCategories, setCurrentCategory } = categorySlice.actions;
export const { setCurrentSubcategory } = subcategorySlice.actions;
export const { setCurrentCompany } = companySlice.actions;
export const { setProducts, setCurrentProduct } = productSlice.actions;
export const { setEmail, setPicturePath, setIsSignedIn } = userSlice.actions;
