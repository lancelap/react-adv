import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { reducer as reducerForm } from 'redux-form';

export default combineReducers({
  router, form: reducerForm
})


class LazyArray {
  constructor(data, func) { 
    this.data = data; 
    this.func = func;
  }
  map(callback) {
    return new MapOperator(this.getIterator(), callback);
  }
  filter(callback) {
    return new FilterOperator(this.getIterator(), callback);
  }
  *getIterator() { 
    for (let val of this.data) yield val; 
  }
  reduce(acc) { 
    const that = this; 
    return function(callback) { 
      let cur = acc; for (let val of that.data) {cur = callback(cur, val);}; return cur; 
    } 
  }
}

class MapOperator extends LazyArray {
  *getIterator() { 
    for (let val of this.data) yield this.func(val); 
  }
}

class FilterOperator extends LazyArray {
  *getIterator() { 
    for (let val of this.data) if (this.func(val)) yield val; 
  }
}