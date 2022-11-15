function Parent(parentNames, familyName) {
  this.parentNames = parentNames;
  this.familyName = familyName;
}

Parent.prototype.sayFamilyName = function () {
  return `Family name is ${this.familyName}`;
};

function Child(parentNames, familyName, name) {
  Parent.call(this, parentNames, familyName); //Constructor Object inheritance
  this.name = name;
}

Child.prototype = Object.assign(Parent.prototype); //Prototype inheritance

const child1 = new Child(['John', 'Jane'], 'xyz', 'jr');
console.log(child1);
console.log(child1.sayFamilyName9);
