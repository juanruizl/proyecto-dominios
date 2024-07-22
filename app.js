let pronoun = ['the', 'our', 'my', 'your'];
let adj = ['great', 'big', 'fast', 'smart'];
let noun = ['jogger', 'racoon', 'developer', 'car'];
let extensions = ['.com', '.net', '.us', '.io'];

for (let p of pronoun) {
  for (let a of adj) {
    for (let n of noun) {
      for (let ext of extensions) {
        console.log(p + a + n + ext);
      }
    }
  }
}

let domainHacks = ['es']; 
for (let p of pronoun) {
  for (let a of adj) {
    for (let n of noun) {
      for (let hack of domainHacks) {
        if (n.endsWith(hack)) {
          let hackDomain = n.slice(0, -hack.length) + '.' + hack;
          console.log(p + a + hackDomain);
        }
      }
    }
  }
}
