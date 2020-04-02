const { FakeFirestore } = require("firestore-jest-mock");
const {
    mockCollection,
    mockGet,
    mockWhere,
  } = require('firestore-jest-mock/mocks/firestore');

const db = new FakeFirestore({
  test: [
    { id: "1a2z", Fname: "Homer", Lname: "Simpson", age: 39 },
    { id: "2e3a", Fname: "Marge", Lname: "Simpson", age: 36 }
  ]
});

test("it can fetch a single record in a collection", async () => {
  const record = await db
    .collection("test")
    .doc("2e3a")
    .get();
  expect(record.exists).toBe(true);
  expect(record.id).toBe("2e3a");
  const data = record.data();
  expect(data).toHaveProperty("Fname", "Marge");
  expect(data).toHaveProperty("Lname", "Simpson");
});

test('It can request all records in collection', async () => {
    // Assert we are looking at the right collection
    expect(mockCollection).toHaveBeenCalledWith('test');
    // Assert that we make no queries
    expect(mockWhere).not.toHaveBeenCalled();
    // Assert that we finally request the data
    expect(mockGet).toHaveBeenCalled();
  });



test("it adds a new record to the collection", async () => {
  const record = await db.collection("test").add({
    id: "3d2a",
    Fname: "Krusty",
    Lname: "the Clown",
    age: 53
  });
  const data = record.data();
  expect(data).toHaveProperty("Fname", "Krusty");
  expect(data).toHaveProperty("Lname", "the Clown");
  expect(data).toHaveProperty("age", 53);
});

test("it can edit a single record in a collection", async () => {
    const record = await db
      .collection("test")
      .doc("2e3a")
      .get();
    expect(record.exists).toBe(true);
    expect(record.id).toBe("2e3a");
    const data = record.data();
    expect(data).toHaveProperty("Fname", "Marge");
    expect(data).toHaveProperty("Lname", "Simpson");
  });