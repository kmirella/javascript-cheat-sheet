Call an external JavaScript file : <script src="script.js"></script>

JavaScript comments: 
    - single line comment: //  Ctrl + ü
    - multiline comment: /* */  Shift+ Alt + A


JavaScript variables:
    -var
    -const
    -let

    SCOPES - determines the visibility of the variables
        - block scope: let, const : the variables declared inside a {} block, cannot be accessed from outside the block // var can not have block scope
        - local scope: variables declared inside a function, become local to the function. Function arguments (parameters) work as local variables inside functions.
        - function scope: variables declared inside a function, are not visible from outside the function 
        - global scope: a variable declared outside a function, becomes global - they are accessible from anywhere in the js 

JavaScript data types:
    -Primitive values:
        - string
        - number
        - boolean
        - undefined: a variable without a value (undefined value = undefined type) // a variable can be emptied by setting a value to undefined 
        - null : expresses a lack of identification
        - Symbol
        - bigInt
    - Objects : collection of properties

    Objects
        const person = {
            firstName: "xy",
            lastName: "zk",
            age: 20,
            hobby: "eating"
        };

    Arrays
        const fruits = ["banana", "apple", "strawberry"]


    
ARRAY METHODS

        - toString() : return an array as a comma separated string: pl. fruits.toString()
        - join() : joins all array elements into a string (same as toString, but here you can specify   the separator) - pl. fruits.join(" - ")
        -pop() : removes the last element from an array - pl. fruits.pop()
        -push() : adds a new element to the end of the array - pl. fruits.push("orange")
        -shift() : removes the first array element - the other elements will be on a lower index
        -unshift() : adds a new element to the beginning of an array
        -concat() : merges two arrays and creates a new array 
            pl.1: 
            const myGirls = ["Cecilie", "Lone"];
            const myBoys = ["Emil", "Tobias", "Linus"];
            const myChildren = myGirls.concat(myBoys);

            pl.2: 
            const arr1 = ["Cecilie", "Lone"];
            const arr2 = ["Emil", "Tobias", "Linus"];
            const arr3 = ["Robin", "Morgan"];
            const myChildren = arr1.concat(arr2, arr3);

        -splice() : adds new items to an array  / can remove elements without leaving a hole 
            pl.: 
            const fruits = ["Banana", "Orange", "Apple", "Mango"];
            fruits.splice(2, 0, "Lemon", "Kiwi");

            --> The first parameter (2) defines the position where new elements should be added (spliced in).

            The second parameter (0) defines how many elements should be removed.

        -slice() : slices out a piece of an array into a new array --> creates a new array with the deleted elements 
            pl.: 
            const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
            const citrus = fruits.slice(1); 

            --> slices out a piece of the array from the element 1 ("orange")

            you can give two arguments: the first argument will be the starting point and it will not include the last argument 
            pl.:
            const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
            const citrus = fruits.slice(1, 3); --> the new array will be: ["orange", "lemon"]

        -sort() : sorts an array alphabetically // for strings
        -reverse() : reverses the elements of the array
        -numeric sort : with a compare function: // for numbers 
            pl.: 
            const points = [40, 100, 1, 5, 25, 10];
            points.sort(function(a, b){return a - b});

/*         -find the highest or lowest array value
            pl.:
            const points = [40, 100, 1, 5, 25, 10];
            points.sort(function(a, b){return a - b});
            // now points[0] contains the lowest value
            // and points[points.length-1] contains the highest value
 */

        -Math.max(): finds the highest number in an array
            pl.:
            Math.max(1, 2, 3)  =  Math.max.apply(null, [1, 2, 3])
/*             function myArrayMax(arr) {
                return Math.max.apply(null, arr);
              }
 */

        -Math.min(): finds the lowest number in an array
              pl.:
              Math.min(1, 2, 3)  =  Math.min.apply(null, [1, 2, 3])

        -Sort arrays with objects included : 
              pl.: cars.sort(function(a, b){return a.year - b.year});

        -length property : same as .push() --> fruits[fruits.length] = "orange"



ARRAY FUNCTIONS


HIGHER ORDER FUNCTIONS: - mindegyikhez szükséges egy callback function

        -forEach(): // olyan for ciklus, ami hof-ként előre meg van írva

        -map() : performs a function on each array element --> creates a new array
              pl.: 
                const numbers1 = [45, 4, 9, 16, 25];
                const numbers2 = numbers1.map(myFunction); // callback function: egy függvénynek átadunk egy függvényt argumentumként

                function myFunction(value) {
                return value * 2;
                }

        -filter() : with array elements that passes the test --> creates a new array 
                pl.:
                const numbers = [45, 4, 9, 16, 25];
                const over18 = numbers.filter(myFunction);

                function myFunction(value) {
                return value > 18;
                }
        
        -reduce() : runs a function on each array element to reduce it to a single value // from left to right

        -every() : checks if all array values pass a test 
                pl.: 
                const numbers = [45, 4, 9, 16, 25];
                let allOver18 = numbers.every(myFunction);

                function myFunction(value) {
                return value > 18;  // checks if all array values are larger than 18
                }

        -some() : checks if some array values pass the test
                pl.: 
                const numbers = [45, 4, 9, 16, 25];
                let someOver18 = numbers.some(myFunction);

                function myFunction(value) {
                return value > 18;
                }

        -indexOf() : searches an array for an element value and returns its position
                pl.:
                const fruits = ["Apple", "Orange", "Apple", "Mango"];
                let position = fruits.indexOf("Apple") + 1;  // if the item is present more than once, it returns the position of the first occurrence

        -lastIndexOf() : returns the position of the last occurrence of the specified element

        -find() : returns the value of the first array element that passes a test function
                pl.:
                const numbers = [4, 9, 16, 25, 29];
                let first = numbers.find(myFunction);

                function myFunction(value, index, array) {
                return value > 18;
                }
        
        -findIndex() : returns the index of the first array element that passes a test function
                pl.:
                const numbers = [4, 9, 16, 25, 29];
                let first = numbers.findIndex(myFunction);

                function myFunction(value, index, array) {
                return value > 18;
                }

        -Array.from() : returns an Array object from any object with a length property or any iterable object
                pl.: Array.from("ABCDEFG")

        -Array.keys() : returns an Array Iterator object with the keys of an array
                pl.:
                const fruits = ["Banana", "Orange", "Apple", "Mango"];
                const keys = fruits.keys();

                for (let x of keys) {
                text += x + "<br>";
                }

/*                 --> result:  0
                                1
                                2
                                3 */

        -Array.entries() : returns an Array Iterator object with key/value pairs
                pl.:
                const fruits = ["Banana", "Orange", "Apple", "Mango"];
                const f = fruits.entries();

                for (let x of f) {
                document.getElementById("demo").innerHTML += x;
                }


/*                  --> result: [0, "Banana"]
                                [1, "Orange"]
                                [2, "Apple"]
                                [3, "Mango" */

            
        -Array.includes() : allows us to check if an element is present in an array
                pl.:
                const fruits = ["Banana", "Orange", "Apple", "Mango"];
                fruits.includes("Mango"); // is true



    MATH METHODS // syntax: Math.method(number)
                
        
        -Math.round() : returns the nearest integer // 4.4 will be 4, and 4.5 will be 5
        -Math.ceil(x) : returns the value of x rounded up to its nearest integer // 4.2 will be 5
        -Math.floor(x) : returns the value of x rounded down to its nearest integer // 4.7 will be 4
        -Math.trunc(x) : returns the integer part of x // 4.9 will be 4
        -Math.sign(x) : returns if x is negative, null or positive // 5 will be 1, -5 will be -1, 0 will be 0
        -Math.pow(x) : returns the value of x to the power of y // pl. Math.pow(4,2) --> the result will be 16
        -Math.sqrt(x) : returns the square root of x // pl. Math.sqrt(16) --> the result will be 4
        -Math.abs(x) : returns the absolute (positive) value of x // -4.4 will be 4.4



    BOOLEANS // find out if an expression is true

        -Operators:
                - == equal to
                - === strict operator // equal value and equal type 
                - > greater than
                - >= greater than or equal to
                - <= less than or equal to 
                - < less than
                - != not equal 
                - && and
                - || or
                - ! not

                - ternary operator: a conditional operator that assigns a value to a variable based on some condition
                    - syntax: variablename = (condition) ? value1:value2 
                    - pl.: let voteable = (age < 18) ? "Too young":"Old enough";  // --> result: If the variable age is a value below 18, the value of the variable voteable will be "Too young", otherwise the value of voteable will be "Old enough"

        -Truthy values: a value that is considered true when encountered in a Boolean context. All values are truthy, unless they are defined as falsy

        -Falsy values: a value that is considered false when encountered in a Boolean context. (0, -0 null, undefined, false, NaN, "", '', ``)

    
    IF ELSE 
            syntax: 
                if (condition1) {
                //  block of code to be executed if condition1 is true
              } else if (condition2) {
                //  block of code to be executed if the condition1 is false and condition2 is true
              } else {
                //  block of code to be executed if the condition1 is false and condition2 is false
              }

    SWITCH STATEMENT 
            syntax: 
                switch(expression) {
                case x:
                  // code block
                  break;
                case y:
                  // code block
                  break;
                default:
                  // code block
              }


    FOR LOOP  - loops through a block of code a number of times
        -pl:
        const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

        let text = "";
        for (let i = 0; i < cars.length; i++) {
        text += cars[i] + "<br>";
        }


    FOR OF LOOP - loops through the values of an iterable object. It lets you loop over iterable data structures such as Arrays, Strings, Maps.

        - syntax: for (variable of iterable) {
            // code block to be executed
          }

        -pl.: 
        const cars = ["BMW", "Volvo", "Mini"];

        let text = "";
        for (let x of cars) {
          text += x + "<br>";
        }
        
    
JAVASCRIPT THIS KEYWORD
        -refers to an object - Which object depends on how this is being invoked (used or called).

ARROW FUNCTIONS
         hello = function() {
            return "Hello World!";
          }

          --> 

          hello = () => {
            return "Hello World!";
          }

          If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword:

                hello = () => "Hello World!";

          WITH PARAMETERS: hello = (val) => "Hello " + val;

          If you have only one parameter, you can skip the parentheses as well:

                hello = val => "Hello " + val;