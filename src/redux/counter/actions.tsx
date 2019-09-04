export enum EnumAction {
  INCREASE, // 增加
  DECREASE, // 减少
}

interface IPayload {
  count: number
}

export interface IAction {
  type: EnumAction,
  payload: IPayload,
}
