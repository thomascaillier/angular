
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Tache } from '../modules/taches/shared/interfaces/tache';

export class DataMockService implements InMemoryDbService {

  createDb() {
    const taches: Tache[] = [
      { id: 0, name: "Acheter une voiture", isImportant: false },
      { id: 1, name: "Quitter ma femme", isImportant: true },
      { id: 2, name: "Boire une bière avec les potes", detail: "pour oublier ma femme", isImportant: false }
    ]
    return { taches }
  }

  constructor() { }
}
