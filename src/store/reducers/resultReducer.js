const defaultState = {
  percent: 0,
  suggests: [], // [{content:'低流量吸氧', level: '1C'}...]
  source: '', // '简化版的...'
}

function resultReduer(state = defaultState, action){
  console.log(action)
  const {type, result} = action;
  switch(type){
    case 'SET_RESULT':
      return result;
    default:
      return state;
  }
}

export default resultReduer;