export abstract class Item {
  constructor(private name: string) {}
  getNomeItem() {
    return this.name;
  }
}
