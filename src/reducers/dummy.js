import { DUMMY_QUESTS } from "../actions/dummy"

const dummy = (state=null, action) => {
  switch (action.type){
    case DUMMY_QUESTS:
      return Object.assign({},{
        quests: action.quests,
      })
    default:
      return state;
  }
}
export default dummy;