console.log("============for++=============");
for(let i = 10; i <= 50; i++){
    if(i%5 === 0){
        console.log(i);
    }
}

console.log("============for+5=============");
for(let i = 10; i <= 50; i += 5){
        console.log(i);
}

console.log("============while++============");
let i = 10;
while(i <= 50){
    if(i%5 === 0){
        console.log(i);
    }
    i++;
}

console.log("============while+5============");
i = 10;
while(i <= 50){
    console.log(i);
    i += 5;
}

console.log("============Do while++=========");
i = 10;
do {
  if(i%5 === 0){
        console.log(i);
    }
    i++;
} while (i <= 50);

console.log("============Do while+5=========");
i = 10;
do {
    console.log(i);
    i +=5 ;
} while (i <= 50);