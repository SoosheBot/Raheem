const { FakeFirestore } = require('firestore-jest-mock');
const { mockCollection } = require('firestore-jest-mock/mocks/firestore');

const db = new FakeFirestore({
    test: [
      { id: '1a2z', Fname: 'Homer', Lname: 'Simpson', age: 39 },
      { id: '2e3a', Fname: 'Marge', Lname: 'Simpson', age: 36 },
    ],
  });

  test('it can fetch a single record', async () => {
    const record = await db
      .collection('test')
      .doc('2e3a')
      .get();
    expect(record.exists).toBe(true);
    expect(record.id).toBe('2e3a');
    const data = record.data();
    expect(data).toHaveProperty('Fname', 'Marge');
    expect(data).toHaveProperty('Lname', 'Simpson');
  });