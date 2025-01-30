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
        authData: null,
        email: '',
        picturePath: 'nature.jpg',
        fullName: '',
        isSignedIn: false,
        loading: false,
        errors: null
    },
    reducers: {
        auth: (state, action) => {
            state.authData = action.payload;
            state.email = action.payload?.result?.email || '';
            state.picturePath = action.payload?.result?.picturePath || 'nature.jpg';
            state.fullName = action.payload?.result?.name || '';
            state.isSignedIn = true;
            state.loading = false;
            state.errors = null;
            localStorage.setItem('profile', JSON.stringify(action.payload));
        },
        logout: (state) => {
            state.authData = null;
            state.email = '';
            state.picturePath = 'nature.jpg';
            state.isSignedIn = false;
            state.loading = false;
            state.errors = null;
            localStorage.clear();
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setErrors: (state, action) => {
            state.errors = action.payload;
        }
    }
});

const languageSlice = createSlice({
    name: 'language',
    initialState: {
        currentLang: 'pl'
    },
    reducers: {
        setCurrentLang: (state, action) => {
            state.currentLang = action.payload;
        }
    }
})

//Config for redux-persist
const combinedReducers = combineReducers({
    products: productSlice.reducer,
    category: categorySlice.reducer,
    subcategory: subcategorySlice.reducer,
    company: companySlice.reducer,
    user: userSlice.reducer,
    language: languageSlice.reducer
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
export const { setCurrentLang } = languageSlice.actions;
export const { auth, logout, setLoading, setErrors } = userSlice.actions;
