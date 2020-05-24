export function convertToArray(value) {
    let arr = [];
    if (Array.isArray(value)) return value;
    else arr.push(value);
    return arr;
  }
