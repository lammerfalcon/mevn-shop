import { getProducts, getProduct } from "@/services/products.service";

const mutations = {
  setProduct(state, product) {
    state.prodcut = product;
  },
  setProducts(state, products) {
    state.products = products;
  },
  setProductError(state, error) {
    state.prodcutError = error;
  },
};
const actions = {
  async fetchProduct({ commit }, id) {
    try {
      const product = await getProduct(id);
      commit("setProduct", product);
    } catch (e) {
      commit("setProductError", e);
    }
  },
  async fetchProducts({ commit }) {
    try {
      const products = await getProducts();
      commit("setProducts", products);
    } catch (e) {
      commit("setProductError", e);
    }
  },
};
const getters = {
  product: ({ product }) => product,
  products: ({ products }) => products,
  productError: ({ productError }) => productError,
};

const state = () => ({
  product: {},
  products: [],
  productError: null,
});

export default {
  mutations,
  getters,
  actions,
  state,
};
