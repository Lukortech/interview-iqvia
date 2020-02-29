/*
Given the following data answer the questions below

Look at test cases to help clarify questions.
*/

export const items = [
  {
    name: "item 1",
    id: 2,
    props: {
      a: "a prop1",
      b: "b prop1",
    },
    values: [1, 2, 3],
  },
  {
    name: "item 2",
    id: 3,
    props: {
      a: "a prop2",
      b: "b prop2",
    },
    values: [6, 1, 2, 3, 4],
  },
  {
    name: "item 3",
    id: 4,
    props: {
      a: "a prop3",
      c: "c prop3",
    },
    values: [10, 1, 2, 3, 4, 5],
  },
];

// Create a function that returns one array of all item 'names'.
export function getNames(items) {
  // write code here
  const nameArray = [];
  items.forEach(element => {
    nameArray.push(element.name);
  });

  return nameArray;
}

// Create a function that returns one array of 'values'
// (it should not be an array of arrays).
export function getValues(items) {
  // write code here
  const valueArray = [];
  items.forEach(element => {
    valueArray.push(element.values);
  });

  return valueArray.flat();
}

// Create a function that returns an array of 'values' that is
// unique and sorted (default javascript sort).
export function getSortedUniqueValues(items) {
  // write code here
  const valueArray = [];
  items.forEach(element => {
    valueArray.push(element.values);
  });
  const newArray = valueArray.flat();
  const temp = {};

  newArray.forEach(element => {
    if (temp[element]) {
      temp[element] = temp[element] + 1;
    } else {
      temp[element] = 1;
    }
  });

  var uniqueArray = [];
  Object.keys(temp).forEach(element => {
    uniqueArray.push(temp[element])
  });

  return uniqueArray;
}

// Create a function that returns an array of all the values
// of 'props' with key 'b'.
export function getPropsB(items) {
  // write code here
  const propsB = [];
  items.forEach(element => {
    if (element.props.b) {
      propsB.push(element.props.b);
    }
  });

  return propsB;
}

// Create a function that returns a plain javascript object that
// is indexed by 'name', and contains all the 'props'.
export function getIndexedObject(items) {
  // write code here
  const obj = {};
  items.forEach(element => {
    obj[element.name] = element.props
  });

  return obj;
}


// Create a function that returns an array of all the keys returned
// by getIndexedObject (from previous exercise)
export function getNamesFromObjects(items) {
  // write code here
  let nameArray = [];
  nameArray = Object.keys(items)

  return nameArray;
}

// Create a function that returns an array of 'values' that is
// unique but sorted in descending numeric order.
export function getSortedDescNumeric(items) {
  // write code here
  const valueArray = [];
  items.forEach(element => {
    valueArray.push(element.values);
  });
  const newArray = valueArray.flat();
  const temp = {};

  newArray.forEach(element => {
    if (temp[element]) {
      temp[element] = temp[element] + 1;
    } else {
      temp[element] = 1;
    }
  });

  var uniqueArray = [];
  Object.keys(temp).forEach(element => {
    uniqueArray.push(temp[element]);

  });

  return uniqueArray.sort().reverse();
}
