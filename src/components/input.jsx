function Input({query, qlength}) {

    const user1 = {
        name: "Jane",
        age: 28,
        city: "Budapest",
        country: "Hungary",
        address: {
            street: "Havas",
            number: 2,
        }
    }

    // let userName = user.name;
    // let userAge = user.age;
    // console.log(userName);
    // console.log(userAge);

    const {name, age} = user1; //the destructured elements(name, age in the brackets) need to be named exactly as the keys in the object 
    console.log("Name: ", name)
    console.log("Age: ", age)

    const user2 = {...user1};

    user2.country = "Magyarorszag";
    user2.address.number = 111;
    console.log("user1: ", user1)
    console.log("user2: ", user2)

    const array1 = ["a", "b", "c"];
    const arrayX = ["x", "y", "z"];
    const array2 = [...array1, ...arrayX]; //spread operator - creates a copy of array1 and places it in a new memory space, but only for the first level (object of object will remain as a reference)

    array2.push("d")
    
    console.log("Array1: ", array1)
    console.log("Array2: ", array2)

    //destructuring an array
    const [a, b, c] = array1; //a,b,c here are just random names, it can be anything, the destructuring takes elements in order, so a becomes first element, b becomes second etc
    console.log(a)
    console.log(b)
    console.log(c)

    const [firstvalue, ...leftover] = array2; //in thsis one the firstvalue is the first value, everything after that becomes an array
    console.log("first value",firstvalue)
    console.log("leftover ", leftover)

    // in case we want to ignore the first value in an array when we destructure, we can just use " ," instead of naming the element more here: https://www.samanthaming.com/tidbits/13-skip-values-in-destructuring/


    
    let string1="abc";
    let string2=string1;
    string2 += "d"

    console.log("String 1: ", string1);
    console.log("String 2: ", string2)

    return (
        //<input type="text" className="inputElement" id="first-input" value={props.data.value} maxLength={props.data.length}/>
        <input type="text" className="inputElement" value={query} maxLength={qlength}/>
    )
}

export default Input
