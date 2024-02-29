const item = {
  name: "Emannoel",
  age: 24,
  toString() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
  valueOf() {
    return this.age;
  },

  [Symbol.toPrimitive](coercionType) {
    console.log("Trying to convert to", coercionType);
    const types = {
      string: JSON.stringify(this),
      number: this.age,
    };

    return types[coercionType] || types.string;
  },
};

console.log(item + 10); // 34
console.log(String(item)); // Name: Emanoel, Age: 24
console.log(Number(item)); // 24
