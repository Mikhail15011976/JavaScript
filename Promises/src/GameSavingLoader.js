import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    return read()
      .then(data => json(data))
      .then(jsonData => JSON.parse(jsonData));
  }
}
