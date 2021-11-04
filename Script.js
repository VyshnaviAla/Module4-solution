// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:


(function() {
    var names = ["Yaakov", "John", "Joe", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLocaleLowerCase();

        if (firstLetter === "j") {
            byeSpeaker(names[i]);
        }
        else {
            helloSpeaker(names[i]);
        }
    }
}) ();