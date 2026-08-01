const cat = {   
    name: 'Murka',
    color: 'black',
    isMale: false,
    isFurnitureDemage: true,
}

for(let key in cat){
    console.log(`${key} >> ${typeof cat[key] === 'boolean' ?  cat[key] ? 'да' : 'нет' : cat[key] }`)
}