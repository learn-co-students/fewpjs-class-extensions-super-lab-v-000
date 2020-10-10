// Write your classes here

//Define a Tree class that will act as our parent.
class Tree { 
    //initializes an instance with one parameter and assigns it to `species`
    constructor(species) {
        this.species = species
    }

    //has a static method `definition` that returns a sentence on trees
    static definition() {
        return 'A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.'
    }
}

//Define a Deciduous class that extends Tree
class Deciduous extends Tree { 
    //initializes with two parameters, species and name, and uses `super` to set `species`
    constructor(species,name) {
        super(species)
        this.name = name
      }
    
    //has a static method `definition` that uses `super.definition` and expands on it
    static definition() {
        return `${super.definition()} Deciduous trees shed their leaves annually.`
    }
}

class Evergreen extends Tree {
    constructor(species,name) {
        super(species)
        this.name = name
    }

    static definition() {
        return `${super.definition()} Evergreens keep their leaves all year round.`
    }

}