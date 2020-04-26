export class Todo {
  id?: string;
  value: string;
  done: boolean;

  constructor(json: firebase.firestore.QueryDocumentSnapshot) {
    const jsonData = json.data();

    this.id = json.id;
    this.value = jsonData.value;
    this.done = jsonData.done || false;
  }
}
