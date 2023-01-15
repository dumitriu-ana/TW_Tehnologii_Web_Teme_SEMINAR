
// Apelare: console.log(addTokens("Subsemnatul ... cu domiciliul in ...",[{tokenName: "AnaDumitriu"},{tokenName: "Targoviste"}]));

function addTokens(input, tokens) {
  if (!verifica(input)) {
    throw new Error("Invalid input");
  }

  if (input.length < 6) {
    throw new Error("Input should have at least 6 characters");
  }

  if (!Array.isArray(tokens)) {
    throw new Error("Invalid array format");
  }

  for (var i = 0; i < tokens.length; i++) {
    if (!verifica(tokens[i].tokenName)) {
      throw new Error('Invalid array format');
    }
  }

  if (!input.includes("...")) {
    return input;
  }

  var cuvinte = input.split("...");
  var output = cuvinte[0];
  for (var i = 0; i < tokens.length; i++) {
    //output +=tokens[i].tokenName;
    output = output + "${" + tokens[i].tokenName + "}";
    if ((i + 1) < cuvinte.length) {
      output += cuvinte[i + 1];
    }
  }
  return output;
}

const app = {
  addTokens: addTokens,
};

module.exports = app;

function verifica(valoare) {
  return (typeof valoare === "string" || valoare instanceof String);
}


