import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    items2: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      const index = action.payload;
      const item = state.items[index];

      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items.splice(index, 1);
      }
    },

    addToWish: (state, action) => {
      const item = action.payload;
      const exists = state.items2.find(i => i.id === item.id);
      if (!exists) {
        state.items2.push(item);
      }
    },

    removeFromWish: (state, action) => {
      const idToRemove = typeof action.payload === 'string'
        ? Number(action.payload)
        : action.payload;

      state.items2 = state.items2.filter(item => item.id !== idToRemove);
    },
  },
});

export const { addToCart, removeFromCart, addToWish, removeFromWish } = cartSlice.actions;
export default cartSlice.reducer;