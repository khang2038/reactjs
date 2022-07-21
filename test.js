var course={
    name:"javascript",
    price:1000
}
 
var {name, ...rest}=course;

console.log(name);
console.log(rest);