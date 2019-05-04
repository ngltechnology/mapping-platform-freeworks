import { DUMMY_QUESTS } from "../actions/dummy"

const initialState = [
  {"key": "Ei8qnzPeAOLgexP9t1Sq", "location": {"lat": 35.6671141, "lng": 139.7401657}, "name": "ArkHillsでカフェスタッフ！",reward: 3000, photoURL: "https://media-cdn.tripadvisor.com/media/photo-s/0c/0e/61/91/cafe-amore.jpg"},
  {"key": "1ypiZ4bfopN5nxEA7kC8", "location": {"lat": 35.7056396, "lng": 139.7518913}, "name": "東京ドームのお手伝いスタッフ！",reward:6000,photoURL: "https://www.tokyo-dome.co.jp/dome/img/ogp.jpg" }
]

const dummy = (state=initialState, action) => {
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