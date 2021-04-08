const baseUrl = 'https://jsonplaceholder.typicode.com';

export class API_SERVICE {
  url = 'https://jsonplaceholder.typicode.com/todos';

  static getTodoList({ start = 0, limit = 10, callback }) {
    fetch(baseUrl + `/todos?_start=${start}&_limit=${limit}`)
      .then((response) => response.json())
      .then((result) => {
        callback(result);
      })
      .catch((error) => {
        console.trace(error);
      });
  }

  static async getTodoListAsync({ start = 0, limit = 10 }) {
    try {
      const response = await fetch(
        baseUrl + `/todos?_start=${start}&_limit=${limit}`,
      );

      const result = await response.json();

      return result;
    } catch (error) {
      console.trace(error);
    }
  }

  static async getTodoListItemAsync(todoId) {
    try {
      const response = await fetch(baseUrl + `/todos/${todoId}`);

      const result = await response.json();

      return result;
    } catch (error) {
      console.trace(error);
    }
  }
}

export default API_SERVICE;
