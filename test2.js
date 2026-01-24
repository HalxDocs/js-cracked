function userSystem(user) {
  // 1. Check if user is online
  if (user.isOnline) {
    console.log("User is online");
  } else {
    console.log("User is offline");
  }

  // 2. Add a new hobby
  user.hobbies.push("javascript");

  // 3. Increase age by 1
  let newAge = user.age + 1;

  // 4. Check wallet
  if (user.wallet === 0) {
    user.wallet = 500;
  } else {
    user.wallet += 1000;
  }

  // 5. Block scope test
  if (true) {
    let insideScope = "secret";
    console.log("Inside block:", insideScope); // works
  }

  // This MUST cause a ReferenceError if you try:
  // console.log(insideScope); // ❌ Do NOT uncomment (block scope)

  // BONUS: Add a Symbol key to the user object
  const secretId = Symbol("id");
  user[secretId] = "ULTRA-SECRET";

  // 6. Return updated object
  return {
    username: user.username,
    age: newAge,
    isOnline: user.isOnline,
    wallet: user.wallet,
    hobbies: user.hobbies,
    secretId: user[secretId] // can't be seen normally but included
  };
}



// ---------- TESTING THE FUNCTION ----------
const user = {
  username: "HalxDocs",
  age: 16,
  isOnline: true,
  wallet: 10 ,
  hobbies: ["coding", "gaming", "music"]
};

const updatedUser = userSystem(user);
console.log(updatedUser);
