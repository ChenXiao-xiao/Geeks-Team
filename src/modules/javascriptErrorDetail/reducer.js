import { handleActions } from "redux-actions"

const initialState = {
  errorIndex: 0,
  errorAboutInfo: {},
  errorDetail: {},
  errorList: [],
  errorStackList: [],
  isIgnore: false
}

export default handleActions({

  updateJavascriptErrorDetailState: (state = initialState, { payload }) => {
    return {
      ...state,
      ...payload
    }
  },

  clearJavascriptErrorDetailState: () => {
    return {
      ...initialState
    }
  }
}, initialState)
