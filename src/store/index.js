import Vuex from 'vuex';
import Vue from 'vue';
import shop from "../api/shop";
import { resolve } from 'url';
import { reject } from 'q';

import actions from './actions';
import mutations from './mutations';
import getters from './getters';

import cart from "./modules/cart";
import products from "./modules/products";

Vue.use(Vuex);

export default new Vuex.Store({

  modules: {
    cart,
    products
  },

state: { // data



},

getters: {


},

actions: {


},

mutations: {



}

})
