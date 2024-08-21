import * as _ from 'lodash';

const a = {
  name: 'khang',
  age: 10
};
console.log(_.omit(a, 'name'));