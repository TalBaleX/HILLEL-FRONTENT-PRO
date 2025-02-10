import $ from "jquery";
import { fetchTodos } from "../app.js";
import { TodoAPI } from "../api/todos.js";

$("#exampleModal .btn-primary").on("click", async function () {
  const newTitle = $("#recipient-name").val().trim();
  const newDescription = $("#message-text").val().trim();

  const taskId = $(this).data("task-id");

  if (!newTitle) return;

  const updatedData = {
    title: newTitle,
    description: newDescription,
  };

  try {
    await TodoAPI.edit(process.env.BASE_SERVICE_URL, taskId, updatedData);
    fetchTodos();

    $("#recipient-name").val("");
    $("#message-text").val("");

    $("#exampleModal").modal("hide");
  } catch (error) {
    console.error("Ошибка обновления задачи:", error);
  }
});

export class TodosManager {
  constructor(root) {
    this.root = root;
  }

  clearRoot() {
    this.root.empty();
  }

  renderData(data) {
    if (!data || !data.length) return;

    this.clearRoot();

    const $list = $("<ul>").addClass("list-group");

    data.forEach(({ _id, title, description, completed }) => {
      const $item = $("<li>")
        .addClass(
          "list-group-item d-flex justify-content-between align-items-center"
        )
        .append(
          $("<div>")
            .addClass("ms-2 me-auto")
            .text(description)
            .prepend($("<div>").addClass("fw-bold").text(title))
        );

      const $checkboxWrapper = $("<div>").addClass(
        "d-flex align-items-center me-3"
      );
      const $checkbox = $("<input>")
        .attr("type", "checkbox")
        .prop("checked", completed)
        .addClass("form-check-input")
        .on("change", async () => {
          const updatedData = { completed: $checkbox.prop("checked") };

          try {
            await TodoAPI.edit(process.env.BASE_SERVICE_URL, _id, updatedData);
            fetchTodos();
          } catch (error) {
            console.error("Ошибка обновления состояния completed:", error);
          }
        });

      $checkboxWrapper.append($checkbox);

      const $deleteButton = $("<button>")
        .addClass("btn btn-danger ms-2")
        .text("Delete")
        .on("click", async () => {
          try {
            await TodoAPI.delete(process.env.BASE_SERVICE_URL, _id);
            $item.remove();
          } catch (error) {
            console.error("Ошибка удаления:", error);
          }
        });

      const $editButton = $("<button>")
        .addClass("btn btn-success me-3")
        .text("Edit")
        .attr("data-bs-toggle", "modal")
        .attr("data-bs-target", "#exampleModal")
        .on("click", () => {
          $(".btn-primary").data("task-id", _id);
          $("#recipient-name").val(title);
          $("#message-text").val(description);
        });

      $item.append(
        $("<div>")
          .addClass("d-flex align-items-center")
          .append($checkboxWrapper)
          .append($editButton)
          .append($deleteButton)
      );

      $list.append($item);
    });

    this.root.append($list);
  }

  renderError(message) {
    this.clearRoot();
    const errorMessage = $("<h2>")
      .text(`Ups... ${message}`)
      .css("color", "coral");
    this.root.append(errorMessage);
  }

  renderLoader(status) {
    this.clearRoot();

    if (status === "loading") {
      const loader = $("<div>").addClass("lds-roller");
      for (let i = 0; i < 8; i++) {
        loader.append($("<div>"));
      }
      this.root.append(loader);
    } else {
      this.clearRoot();
    }
  }
}
