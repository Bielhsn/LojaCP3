export default (req, res) => {
  const dados = [
    {
      "id": 1,
      "nome": "Fuller Coelho",
      "email": "laoreet@aol.com",
      "senha": "tincidunt"
    }, {
      "id": 2,
      "nome": "Sybill Chagas",
      "email": "risus.donec@outlook.couk",
      "senha": "auctor"
    }, {
      "id": 3,
      "nome": "Lynn Freitas",
      "email": "iaculis.odio@aol.net",
      "senha": "tempus"
    }, {
      "id": 4,
      "nome": "Ariana Lemos",
      "email": "orci.luctus@yahoo.net",
      "senha": "non"
    }, {
      "id": 5,
      "nome": "Kyle Dias",
      "email": "nec.metus@yahoo.net",
      "senha": "mi."
    }, {
      "id": 6,
      "nome": "Plato Franco",
      "email": "arcu@outlook.ca",
      "senha": "nec,"
    }, {
      "id": 7,
      "nome": "Christian Nunes",
      "email": "malesuada.malesuada@yahoo.com",
      "senha": "In"
    }, {
      "id": 8,
      "nome": "Erich Siqueira",
      "email": "dictum.magna@outlook.ca",
      "senha": "fermentum"
    }, {
      "id": 9,
      "nome": "Dorothy Trindade",
      "email": "interdum.sed@protonmail.net",
      "senha": "Mauris"
    }, {
      "id": 10,
      "nome": "Inez Miranda",
      "email": "metus@protonmail.com",
      "senha": "scelerisque"
    }, {
      "id": 11,
      "nome": "Karina de Souza",
      "email": "tempor@icloud.couk",
      "senha": "Curae"
    }, {
      "id": 12,
      "nome": "Shad Camargo",
      "email": "dictum.ultricies@protonmail.couk",
      "senha": "convallis"
    }, {
      "id": 13,
      "nome": "Evelyn Martins",
      "email": "vitae.nibh@protonmail.edu",
      "senha": "tincidunt"
    }, {
      "id": 14,
      "nome": "Azalia Dantas",
      "email": "eu.elit@icloud.com",
      "senha": "mi"
    }, {
      "id": 15,
      "nome": "Josephine de Castro",
      "email": "ipsum.curabitur@aol.org",
      "senha": "sit"
    }, {
      "id": 16,
      "nome": "Abbot Aguiar",
      "email": "non.lobortis@protonmail.couk",
      "senha": "tempor"
    }, {
      "id": 17,
      "nome": "Veronica Diniz",
      "email": "sem.ut@icloud.edu",
      "senha": "turpis."
    }, {
      "id": 18,
      "nome": "Alfreda Das Gracas",
      "email": "sed@yahoo.com",
      "senha": "lacus."
    }, {
      "id": 19,
      "nome": "Anne Das Dores",
      "email": "molestie.sodales@aol.edu",
      "senha": "porttitor"
    }, {
      "id": 20,
      "nome": "Conan Menezes",
      "email": "mollis@aol.com",
      "senha": "natoque"
    }, {
      "id": 21,
      "nome": "Owen Messias",
      "email": "orci.phasellus.dapibus@outlook.com",
      "senha": "egestas"
    }, {
      "id": 22,
      "nome": "Ori Machado",
      "email": "montes.nascetur.ridiculus@icloud.net",
      "senha": "luctus"
    }, {
      "id": 23,
      "nome": "Phoebe Pereira",
      "email": "mattis.velit@yahoo.org",
      "senha": "auctor"
    }, {
      "id": 24,
      "nome": "Ulysses Marques",
      "email": "luctus.et.ultrices@outlook.couk",
      "senha": "molestie"
    }, {
      "id": 25,
      "nome": "Amber Carneiro",
      "email": "ut.semper@protonmail.com",
      "senha": "a,"
    }, {
      "id": 26,
      "nome": "Raven do Carmo",
      "email": "bibendum.ullamcorper@outlook.edu",
      "senha": "arcu."
    }, {
      "id": 27,
      "nome": "Ethan Lemos",
      "email": "integer.eu@google.com",
      "senha": "ipsum"
    }, {
      "id": 28,
      "nome": "Aileen Leite",
      "email": "sit@yahoo.couk",
      "senha": "eu"
    }, {
      "id": 29,
      "nome": "Fay Melo",
      "email": "risus.nulla.eget@protonmail.edu",
      "senha": "venenatis"
    }, {
      "id": 30,
      "nome": "Clark Duarte",
      "email": "ultrices.mauris.ipsum@hotmail.com",
      "senha": "Nulla"
    }, {
      "id": 31,
      "nome": "Hilel Santiago",
      "email": "venenatis.vel@aol.com",
      "senha": "Cum"
    }, {
      "id": 32,
      "nome": "Whilemina Moreira",
      "email": "suspendisse.aliquet@outlook.com",
      "senha": "Nulla"
    }, {
      "id": 33,
      "nome": "Maite Silva",
      "email": "egestas@google.org",
      "senha": "odio,"
    }, {
      "id": 34,
      "nome": "Justine Neves",
      "email": "cum.sociis.natoque@google.com",
      "senha": "orci"
    }, {
      "id": 35,
      "nome": "Samuel Almeida",
      "email": "vestibulum.accumsan.neque@hotmail.org",
      "senha": "ipsum"
    }, {
      "id": 36,
      "nome": "Colette Alves",
      "email": "mollis@hotmail.net",
      "senha": "nec,"
    }, {
      "id": 37,
      "nome": "Elvis Nogueira",
      "email": "quisque.purus@protonmail.couk",
      "senha": "congue."
    }, {
      "id": 38,
      "nome": "Aurelia Duarte",
      "email": "donec.consectetuer.mauris@hotmail.net",
      "senha": "tortor,"
    }, {
      "id": 39,
      "nome": "Dorian Maciel",
      "email": "in.aliquet.lobortis@yahoo.couk",
      "senha": "fringilla"
    }, {
      "id": 40,
      "nome": "Kylan Peixoto",
      "email": "integer.eu@protonmail.com",
      "senha": "eget"
    }, {
      "id": 41,
      "nome": "Rama de Carvalho",
      "email": "elementum.sem.vitae@outlook.net",
      "senha": "congue"
    }, {
      "id": 42,
      "nome": "Acton de Abreu",
      "email": "eu.tellus.phasellus@protonmail.org",
      "senha": "faucibus"
    }, {
      "id": 43,
      "nome": "Jelani dos Reis",
      "email": "lorem.lorem@outlook.ca",
      "senha": "ligula."
    }, {
      "id": 44,
      "nome": "Giselle Nonato",
      "email": "tellus@protonmail.org",
      "senha": "Nulla"
    }, {
      "id": 45,
      "nome": "Nora Feitosa",
      "email": "in.faucibus@yahoo.ca",
      "senha": "Cras"
    }, {
      "id": 46,
      "nome": "Oliver de Lima",
      "email": "orci@google.couk",
      "senha": "elit,"
    }, {
      "id": 47,
      "nome": "Alana Nogueira",
      "email": "aliquet@google.ca",
      "senha": "est"
    }, {
      "id": 48,
      "nome": "Camille Ferraz",
      "email": "in.consectetuer@protonmail.edu",
      "senha": "mollis"
    }, {
      "id": 49,
      "nome": "Rhoda Araujo",
      "email": "arcu.aliquam@google.org",
      "senha": "augue"
    }, {
      "id": 50,
      "nome": "Joshua Lopes",
      "email": "in@google.net",
      "senha": "condimentum."
    }
    // Adicione mais dados conforme necessário
  ];

  res.status(200).json(dados);
};
