export class Entity {
  name: string;
  entityType: string;
  prob: number;

  constructor(name: string, entityType: string, prob: number) {
    this.name = name;
    this.entityType = entityType;
    this.prob = prob;
  }
}
