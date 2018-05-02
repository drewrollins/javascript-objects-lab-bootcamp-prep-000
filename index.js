var recipes = new Object({})

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var obj = {key: value};
  var newObj = Object.assign({}, object);
  delete newObj.key;
  return newObj
}