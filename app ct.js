for(var i = 1; i < 10; i++){
    if (i === 5){
        break
    }
    console.log("Hello")
}

var cities = ["Lahor" , "Islamabad" , "Faislabad" , "Karachi"];
for(var i = 0; i < cities.length; i++){
    if(cities[i] === "Islamabad"){
        alert(cities[i] + "is a cleanest city!")
        break
    }
}


for(var i = 0; i < 5; i++){
    for (var j = 0; j < 3; j++){
        document.write(j +"Pakistan Zindabad" + "<br>")
    }
}


for
( var i = 1; i <= 5; i++){
    for (var j = 0; j < i; j++){
        document.write(  "*")
    }
    document.write("<br>")
}

var firstnames = ["Hammad" , "Arif" , "Nasreen"]
var lastnames = ["Shahid" , "Khan" , "Pathan"]

for(var i = 0; i < firstnames.length; i++){
    for(var x = 0; x <lastnames.length; x++){
        console.log(firstnames[i] + " " + lastnames[x])
    }
}

var word = prompt("Enter your word");
var check = " ";
for (var i = word.length - 1; i >= 0; i--){
    check += word[i]

}
if(word === check){
console.log(word + " is palindrome word")
}




var name = "arif";

name = name.toUpperCase();
console.log(name)



var names = "Hammad Shahid";

console.log(names.indexOf("S"))