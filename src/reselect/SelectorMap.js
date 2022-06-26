import { createSelector } from 'reselect';

const selectMap = (state) => state.map;

export const getMap = createSelector([selectMap], (map) => map);
export const getSrcAddress = createSelector([selectMap], (map) => map.srcAddress);
export const getDstAddress = createSelector([selectMap], (map) => map.dstAddress);
