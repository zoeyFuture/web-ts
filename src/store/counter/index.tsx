import Actions from './actions'

interface IPayload {
  count: number
}

export interface IAction {
  type: string,
  payload: IPayload,
}

interface IState {
  count: number,
}

// 初始化的State
const initialState: IState = {
  count: 0,
}

const counterReducer = (state: IState = initialState, { type, payload }: IAction): IState => {
  switch (type) {
  case Actions.INCREASE:
    return {
      count: state.count + payload.count,
    }
  case Actions.DECREASE:
    return {
      count: state.count - payload.count,
    }
  default:
    return state
  }
}

export default counterReducer
