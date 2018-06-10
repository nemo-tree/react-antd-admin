const userState = {
  token: '',
  userInfo:{
    roles: '',
    introduction: '',
    name: '',
    avatar: '',
    message:''
  }
}

const user = (state = userState, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.playload
      }
      break

    case 'DELETE_TOKEN':
      return {
        ...state,
        token: null
      }
      break
    case 'SET_USERINFO':
      return {
        ...state,
        userInfo: action.playload
      }
      break

    default:
      return state
      break
  }
}


const UIState = {
  collapsed: false,
  isMobile: false,
  taglist:[]
}
const UI = (state = UIState, action) => {
  switch (action.type) {
    case 'CHANGE_ISMOBILE':
      return {
        ...state,
        isMobile: action.playload
      }
      break

    case 'CHANGE_COLLAPSED':
      return {
        ...state,
        collapsed: action.playload
      }
      break

    case 'ADD_TAGLIST':
      return {
        ...state,
        taglist: [...state.taglist,action.playload]
      }
      break
    case 'CUT_TAGLIST':
      return {
        ...state,
        taglist: [...state.taglist.filter(ele=>ele.path!==action.playload)]
      }
      break
      case 'EMPTY_TAGLIST':
      return {
          ...state,
          taglist: []
        }
      break

    default:
      return state
      break
  }
}


export {
  UI,
  user
}