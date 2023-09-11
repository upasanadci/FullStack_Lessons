import fs from "fs" // build-in

export const readTextFile = (req, res)=>{
    //structure: fs.readFile(path/file info, callback(err, data))
    fs.readFile('data/info.txt', (err, data)=>{
        if(err) {console.log('There is an error')}
        console.log(data.toString()) // shows data in console
        res.end(data)
    })
}

export const readInfo = (req, res)=>{
    let data = fs.readFileSync('data/info.txt')
    res.end(data)
}