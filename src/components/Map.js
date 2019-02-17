const listOfObjects = [
    {
        'name': 'max',
        'cat': 'cici'
    },
    {
        'name': 'luke',
        'cat': 'cookie'
    },
    {
        'name': 'john',
        'cat': 'bishop'
    },
]

console.log(listOfObjects.map((objr,mindex)=>mindex + " " + objr.name + " has a cat named " + objr.cat));
// this is the missing link of understanding I had in learning React