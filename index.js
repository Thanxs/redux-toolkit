const store = require('./app/store');
const { cakeActions } = require('./features/cake/cakeSlice');
const { icecreamActions } = require('./features/icecream/icecreamSlice');
const { fetchUsers } = require('./features/user/userSlice');

console.log('initial state', store.getState());

const unsubscribe = store.subscribe(() => console.log('updated state', store.getState()));

store.dispatch(fetchUsers());

unsubscribe();