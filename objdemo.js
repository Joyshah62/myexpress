userdata= {
    name: "joy",
    gender: "male",
}

console.log("My name is "+userdata.name)
console.log("Gender is "+userdata['gender']);
userdata.mobile = 7567717123;
console.log("My mobile is "+ userdata['mobile'])
userdata.mobile=123;
console.log("My mobile is "+userdata['mobile'])
console.log('name' in userdata)
console.log(userdata)
var a = JSON.stringify(userdata)
console.log(a)
console.log(JSON.parse(a))
