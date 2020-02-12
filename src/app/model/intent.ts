export class Intent {
  description: string;
  name: string;
  prob: number;

  constructor(name: string, description: string, prob: number = 0) {
    this.name = name;
    this.description = description;
    this.prob = prob;
  }
}
