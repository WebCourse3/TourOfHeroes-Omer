import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr.Poopybutthole' },
      { id: 12, name: 'Rick Sanches' },
      { id: 13, name: 'Morty Smith' },
      { id: 14, name: 'Flurbos' },
      { id: 15, name: 'BirdPerson' },
      { id: 16, name: 'Saar Ziv' },
      { id: 17, name: 'Fishi' },
      { id: 18, name: 'Goobi' },
      { id: 19, name: 'Deadpool' },
      { id: 20, name: 'Tornado' }
    ];
    return {heroes};
  }
}
