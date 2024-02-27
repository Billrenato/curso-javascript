let nome = "renato"

for(let i = 0; i < 10; i = i  + 1){
  if( i == 3){
    nome = "joão"
  }
  if(i == 5 && nome == "joão" ){
    console.log("o nome é joão, pode parar o loop");
    break;
  }
  console.log(i)

}







