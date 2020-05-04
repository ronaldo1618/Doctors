const createDoctor = (name, specialty, address) => {
    return {
        name: name,
        specialty: specialty,
        address: address
    }
}

const createPet = (name, breed) => {
    return {
        name: name,
        breed: breed
    }
}

const BowWowKennels = [];

const firstPet = createPet("Yara", "Golden Retriever")
const secondPet = createPet("Thor", "German Shepherd")
const thirdPet = createPet("Bert", "Lab")

BowWowKennels.push(firstPet, secondPet, thirdPet)

console.log("Animals at BowWowKennels", BowWowKennels)