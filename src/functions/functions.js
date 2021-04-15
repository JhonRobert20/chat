function checkName(name) {
  if(name === null || name === "null"  ||  typeof name !== "string") {
    return "guess";
  }
  return name;
};


module.exports.checkName = checkName;