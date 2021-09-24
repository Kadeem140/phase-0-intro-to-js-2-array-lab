// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(){
    return cats.push("Ralph") //.push() adds an element to the end of the array.
}

function destructivelyPrependCat(){
    return cats.unshift("Bob") //.unshift() adds an element to the start of the array.
}

function destructivelyRemoveLastCat(){
     return cats.pop() //.pop() removes an element from the end of the array.
}


function destructivelyRemoveFirstCat(){
    return cats.shift()
}

function appendCat(){
    //.unshift() adds an element to the start of the array.
    const copyOfCats = [...cats]
    copyOfCats.push("Broom")
    return copyOfCats 
}

function prependCat(){
    const copyOfCats = [...cats]
    copyOfCats.unshift("Arnold")
    return copyOfCats

}

function removeLastCat(){
    const copyOfCats = [...cats]
    copyOfCats.pop()
    return copyOfCats

}

function removeFirstCat(){
    const copyOfCats = [...cats]
    copyOfCats.shift()
    return copyOfCats
}



