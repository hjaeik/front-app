import { createAction, handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

export const SET_SRC_POINT = 'frontApp/map/SET_SRC_POINT';
export const SET_DST_POINT = 'frontApp/map/SET_DST_POINT';
export const SET_DIRECTION = 'frontApp/map/SET_DERICTION';

const initState = {
  order: {},
  code: '',
  srcAddress: '',
  srcAddressDetail: '',
  srcCoordinate: { latitude: '', longitude: '' },
  dstAddress: '',
  dstAddressDetail: '',
  dstCoordinate: { latitude: '', longitude: '' },
  amount: '',
  reqTime: '',
  direction: [],
  reqDate: [],
  baggages: [],
  reqMsg: '',
};

const MapReducer = handleActions(
  {
    [SET_DST_POINT]: (state, action) => ({
      ...state,
      dstAddress: action.payload.address,
      dstAddressDetail: action.payload.addressDetail,
      dstCoordinate: action.payload.coordinate,
    }),
    [SET_SRC_POINT]: (state, action) => ({
      ...state,
      srcAddress: action.payload.address,
      srcAddressDetail: action.payload.addressDetail,
      srcCoordinate: action.payload.coordinate,
    }),
    [SET_DIRECTION]: (state, action) => ({
      ...state,
      direction: action.payload,
    }),
  },
  initState,
);

export const setSrcPoint = createAction(SET_SRC_POINT);
export const setDstPoint = createAction(SET_DST_POINT);

export default MapReducer;
