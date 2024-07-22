// Listas de pronombres, adjetivos y sustantivos
let pronoun = ['the', 'our', 'my', 'your'];
let adj = ['great', 'big', 'fast', 'smart'];
let noun = ['jogger', 'racoon', 'developer', 'car'];
let extensions = ['.com', '.net', '.us', '.io'];

// Generar combinaciones de nombres de dominio
for (let p of pronoun) {
  for (let a of adj) {
    for (let n of noun) {
      for (let ext of extensions) {
        console.log(p + a + n + ext);
      }
    }
  }
}

// Generar combinaciones con domain hacks
let domainHacks = ['es']; // Puedes agregar más hacks de dominio aquí
for (let p of pronoun) {
  for (let a of adj) {
    for (let n of noun) {
      for (let hack of domainHacks) {
        // Verificar si el sustantivo termina con las letras de la extensión hack
        if (n.endsWith(hack)) {
          let hackDomain = n.slice(0, -hack.length) + '.' + hack;
          console.log(p + a + hackDomain);
        }
      }
    }
  }
}
