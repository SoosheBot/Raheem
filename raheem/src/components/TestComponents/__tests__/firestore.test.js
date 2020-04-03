const { FakeFirestore } = require("firestore-jest-mock");


const db = new FakeFirestore({
  users: [
    { id: "1abc", Fname: "Homer", Lname: "Simpson", age: 39 },
    { id: "2def", Fname: "Marge", Lname: "Simpson", age: 36 }
  ]
});

test("it can fetch a single record in a collection", async () => {
  const record = await db
    .collection("users")
    .doc("2def")
    .get();
  expect(record.exists).toBe(true);
  expect(record.id).toBe("2def");
  const data = record.data();
  expect(data).toHaveProperty("Fname", "Marge");
  expect(data).toHaveProperty("Lname", "Simpson");
});

test("it can fetch an entire collection", () => {
  db
  .collection("users")
  .get()
  .then(querySnapshot => {
    expect(querySnapshot.forEach).toBeTruthy();
    expect(querySnapshot.docs.length).toBe(2);
    querySnapshot.forEach(doc => {
      expect(doc.exists).toBe(true);
      expect(doc.data()).toBeTruthy();
    console.log("users data is:", doc.data())
    })  
  });
   
});

test("it adds a new record to the collection", async () => {
  const record = await db.collection("users").add({
    id: "3ghi",
    Fname: "Krusty",
    Lname: "the Clown",
    age: 53
  });
  expect(record.exists).toBe(true);
  const data = record.data();
  expect(data).toHaveProperty("Fname", "Krusty");
  expect(data).toHaveProperty("Lname", "the Clown");
  expect(data).toHaveProperty("age", 53);
});

test("it deletes a record", () => {
  db.collection("users")
    .doc("1abc")
    .delete()
    .then(function() {
      console.log("Record successfully deleted");
    });
});

test("it updates a record", () => {
  db
    .collection("users")
    .doc("2def")
    .update({
      Lname: "Bouvier"
    })
    .then(function() {
      console.log("Successfully updated");
    })
    .catch(err => {
      console.log("error", err);
    });
});
