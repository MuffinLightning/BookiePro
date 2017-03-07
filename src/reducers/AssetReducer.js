import { ActionTypes } from '../constants';

const initialState = {
  assetList: []
};

export default function (state = initialState, action) {
  switch(action.type) {
    case ActionTypes.ASSET_RECEIVE_LIST: {
      const assetList = action.assetList;
      return Object.assign({}, state, { assetList });
    }
    default:
      return state;
  }
}
