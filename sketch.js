var string = "this is a string";
console.log(string);

var num = 100;
console.log(num);

var bool = true;
console.log(bool);

var object;
console.log(object);

object = null;
console.log(object);

var arr1 = [1,2,3,4,5];
console.log(arr1);

var arr2 = [1,"abc",false,null];
console.log(arr2)

var arr3 = [[1,2],[2,3],[3,4]]
console.log(arr3)

console.log(arr3[0])

console.log(arr3[0][0])

console.log(arr3[0][1])

arr3.push("Ranvir");

console.log(arr3);

arr3.pop();

console.log(arr3);

var sprite;
var sprite2;
var sprite3;
var sprite4;

function setup() {
  createCanvas(600,600);
 
  

  sprite = createSprite(400, 590, 800, 20);
  sprite.shapeColor="red";
  
  sprite2 = createSprite(4, 400, 10, 820);
  sprite2.shapeColor="green";
  
  sprite3 = createSprite(596, 400, 10, 820);
  sprite3.shapeColor="green";
  
  sprite4 = createSprite(200, 2, 820, 10);
  sprite4.shapeColor="green";
  
  sprite5 = createSprite(300, 598, 820, 10);
  sprite5.shapeColor="green";

}






function draw() {
  background(0);
      

  drawSprites();


}

