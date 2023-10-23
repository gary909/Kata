function duckDuckGoose(players, goose) {
<<<<<<< HEAD
    // ...
    let  count = 0;
    for(let i = 0; i < goose; i++){
        
    }
    return players[0];
=======
    return players[(goose-1)%players.length].name
>>>>>>> 4c569f67c41cae4f351d8c66a71a677d6433f90b
}

console.log(duckDuckGoose(["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"], 1)); // "a"
console.log(duckDuckGoose(["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"], 3)); // "c"
console.log(duckDuckGoose(["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"], 10)); // "z"
console.log(duckDuckGoose(["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"], 20)); // "z"
console.log(duckDuckGoose(["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"], 30)); // "z"
console.log(duckDuckGoose(["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"], 18)); // "g"
console.log(duckDuckGoose(["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"], 28)); // "g"
console.log(duckDuckGoose(["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"], 12)); // "b"
console.log(duckDuckGoose(["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"], 2)); // "b"
console.log(duckDuckGoose(["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"], 7)); // "f"