function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = collection.filter(function(item){
    for (var i in source){
      if(source[i]!=item[i]){
        return false;
      }
    }
    return true;
  });
  // Only change code below this line
  
  
  
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
