// Define a Function That Uses a Parameter
function introduction(name) {
  return `Hi, my name is ${name}.`;
}

introduction("Aki");

// Define a Function That Uses Two Parameters
function introductionWithLanguage(name, language) {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

introductionWithLanguage("Douglas", "JavaScript");

// Define a Function That Uses an Optional Parameter
function introductionWithLanguageOptional(name, language = "JavaScript") {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

console.log(introductionWithLanguageOptional("daggy"));
