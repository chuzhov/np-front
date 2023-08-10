export const getPackages = state => state.packageManager.packages.items;
export const getError = state => state.packageManager.packages.error;
export const getIsPackegesLoading = state =>
  state.packageManager.packages.isLoading;
