// initializes an instance with one parameter and assigns it to `species`
class Tree {
    constructor(species) {
        this.species = species
    }  
    // has a static method `definition` that returns a sentence on trees
    static definition() {
        return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves."
    }
}
// initializes with two parameters, species and name, 
class Deciduous extends Tree {
    constructor(species, name) {
        // and uses `super` to set `species`
        super(species);
        this.name = name;
    }
    // has a static method `definition` that uses `super.definition` and expands on it
    static definition() {
        return `${super.definition()} Deciduous trees shed their leaves annually.`
    }
}
// initializes with two parameters, species and name, 
class Evergreen extends Tree {
    constructor(species, name) {
        // and uses `super` to set `species`
        super(species);
        this.name = name;
    }
    // has a static method `definition` that uses `super.definition` and expands on it
    static definition() {
        return `${super.definition()} Evergreens keep their leaves all year round.`
    }
}