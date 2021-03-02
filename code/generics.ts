type numOrStr = number | string;

function useState<S extends numOrStr = number>() {
  let state: S;

  function getState() {
    return state;
  }

  function setState(newState: S) {
    state = newState;
  }

  return { getState, setState };
}

const newState = useState<string>();

// newState.setState(true)
// console.log(newState.getState())

// newState.setState(123)
// console.log(newState.getState())

newState.setState('foo')
console.log(newState.getState())