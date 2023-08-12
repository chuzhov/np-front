import { createSlice } from '@reduxjs/toolkit';
import {
  addPackageOp,
  fetchPackagesOP,
  deletePackageOP,
  updateContactOp,
} from '../operations/packageOps';

const pendingRoutine = state => {
  state.packages.isLoading = true;
};

const onRejectRoutine = (state, { payload }) => {
  state.packages.isLoading = false;
  state.packages.error = payload;
};

const packageManagerSlice = createSlice({
  name: 'packages',
  initialState: {
    packages: { items: [], isLoading: false, error: null },
    filter: '',
  },
  reducers: {
    updateFilter(state, { payload }) {
      state.filter = payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(addPackageOp.pending, pendingRoutine)
      .addCase(addPackageOp.fulfilled, (state, { payload }) => {
        state.packages.isLoading = false;
        state.packages.error = null;
        state.packages.items.push(payload);
      })
      .addCase(addPackageOp.rejected, onRejectRoutine)
      .addCase(fetchPackagesOP.pending, pendingRoutine)
      .addCase(fetchPackagesOP.fulfilled, (state, { payload }) => {
        state.packages.isLoading = false;
        state.packages.error = null;
        state.packages.items = payload;
      })
      .addCase(fetchPackagesOP.rejected, onRejectRoutine)
      .addCase(deletePackageOP.pending, pendingRoutine)
      .addCase(deletePackageOP.fulfilled, (state, { payload }) => {
        const id = payload.id;

        state.packages.isLoading = false;
        state.packages.error = null;
        state.packages.items = state.packages.items.filter(
          tender => tender.id !== id
        );
      })
      .addCase(deletePackageOP.rejected, onRejectRoutine)
      .addCase(updateContactOp.pending, pendingRoutine)
      .addCase(updateContactOp.fulfilled, (state, { payload }) => {
        const index = state.packages.items.findIndex(
          item => item.id === payload.id
        );
        state.packages.items[index] = payload;
      })
      .addCase(updateContactOp.rejected, onRejectRoutine),
});

export default packageManagerSlice.reducer;
export const { updateFilter } = packageManagerSlice.actions;
