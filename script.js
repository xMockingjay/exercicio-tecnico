//import da funcao quue le o arquivo
const fileSystem = require("fs");
const jsonData = fileSystem.readFileSync("./data.json", "utf8");

// transformando o texto em JSON
let parsedData = JSON.parse(jsonData);

//Manipulacao de dados
const products = parsedData.products;
const categories = parsedData.categories;
const establishments = parsedData.establishments;

const queryResult = establishments.map((e) => {
    // Cria um novo objeto com base nos Establishments
    const establishment = new Object();
    //Atribui os nomes dos establishments
    establishment.name = e.name;

    //Cria a propriedade products e atribui a ela os produtos com base nos ids
    establishment.products = e.productsId.map((id) => {
        return products[id-1].name;
    });
    return establishment;
});
console.log(queryResult);