import MenuActions from './actions'

// 初始化菜单信息
interface IMenu {
  name: string,
  path: string,
  children?: Array<IMenu>
}

interface IState {
  menus: Array<IMenu>,
}
// Action 类型
interface IAction {
  type: string,
  payload: IState,
}

// 初始化的State
const initialState: IState = {
  menus: [],
}

const menusReducer = (state: IState = initialState, { type, payload }: IAction): IState => {
  switch (type) {
  case MenuActions.INITIAL_MENU:
    return {
      menus: payload.menus,
    }
  case MenuActions.CLEAR_MENU:
    return {
      menus: [],
    }
  default:
    return state
  }
}

export default menusReducer
