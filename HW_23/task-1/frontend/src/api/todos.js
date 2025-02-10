export class TodoAPI {
  static prefix = "todos";
  static async getAll(url) {
    try {
      const resp = await fetch(`${url}/${TodoAPI.prefix}`);

      if (!resp.ok) {
        console.error("Filed to get todos fetch error.");
      }

      return await resp.json();
    } catch (e) {
      console.error(e);
      throw new Error("Filed to get todos.");
    }
  }

  static async save(url, data) {
    try {
      const resp = await fetch(`${url}/${TodoAPI.prefix}`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!resp.ok) {
        console.error("Filed to upload todo fetch error.");
      }
    } catch (e) {
      console.error(e);
      throw new Error("Filed to upload todos.");
    }
  }

  static async delete(url, id) {
    try {
      const resp = await fetch(`${url}/${TodoAPI.prefix}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!resp.ok) {
        console.error("Failed to delete todo.");
        throw new Error("Failed to delete todo.");
      }
    } catch (e) {
      console.error(e);
      throw new Error("Error deleting todo.");
    }
  }

  static async edit(url, id, data) {
    try {
      const resp = await fetch(`${url}/${TodoAPI.prefix}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!resp.ok) {
        console.error("Failed to edit todo.");
        throw new Error("Failed to edit todo.");
      }
    } catch (e) {
      console.error(e);
      throw new Error("Error editing todo.");
    }
  }

  constructor(title, description = "", completed = false) {
    this.title = title;
    this.description = description;
    this.completed = completed;
  }
}
