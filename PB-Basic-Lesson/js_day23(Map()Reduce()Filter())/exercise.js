function vowelCount(string){
    const vowelArray = "AaEeIiOoUu";
    const newObj = {}
    vowelArray.forEach(vowel => {
        let count = currentArray.filter(letter => letter === vowel);
        if(count.length >0){
            newObj[vowel] = count.length;
        }
    })
    return newObj;
}