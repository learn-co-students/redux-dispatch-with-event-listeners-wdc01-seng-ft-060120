let state
 
function reducer(state = {count: 0}, action){
  const typeObj = {
    'INCREASE_COUNT': {count: state.count + 1}
  }
  return newState = typeObj[action.type]
}

function dispatch(action){
  state = reducer(state, action);
}

function render(){
  let container = document.getElementById('container');
  container.textContent = state.count;
}
dispatch({type: '@@INIT'})

let button = document.getElementById('button');

button.addEventListener('click', () => dispatch(
  {type: 'INCREASE_COUNT'}
));