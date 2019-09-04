import { EnumAction, IAction } from "./actions";

interface IState {
  count: number,
}

// 初始化的State
const initialState: IState =  {
  count: 0,
}

const counterReducer = (state: IState = initialState, { type, payload }: IAction): IState => {
  switch (type) {
    case EnumAction.INCREASE:
      return {
        count: state.count + payload.count
      }
    case EnumAction.DECREASE:
      return {
        count: state.count - payload.count
      }
    default:
      return state
  }
}

export default counterReducer
