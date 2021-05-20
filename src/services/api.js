export class API_SERVICE {
  static getTodoList({ start = 0, limit = 10, callback }) {
    fetch(
      `${process.env.REACT_APP_API_URL}/todos?_start=${start}&_limit=${limit}`,
    )
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
        `${process.env.REACT_APP_API_URL}/todos?_start=${start}&_limit=${limit}`,
      );

      const result = await response.json();

      return result;
    } catch (error) {
      console.trace(error);
      return [];
    }
  }

  static async getTodoListItemAsync(todoId) {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/todos/${todoId}`,
      );

      const result = await response.json();

      return result;
    } catch (error) {
      console.trace(error);
      return [];
    }
  }
}

export default API_SERVICE;
