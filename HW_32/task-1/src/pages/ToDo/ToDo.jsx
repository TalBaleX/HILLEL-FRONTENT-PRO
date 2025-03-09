import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Checkbox,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleToggleTask = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <Container>
      <TextField
        label="New Task"
        variant="outlined"
        fullWidth
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") handleAddTask();
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddTask}
        sx={{ mt: 2 }}
      >
        Add Task
      </Button>
      <List sx={{ mt: 2 }}>
        {tasks.map((task, index) => (
          <ListItem key={index} dense>
            <Checkbox
              checked={task.completed}
              onChange={() => handleToggleTask(index)}
            />
            <ListItemText
              primary={task.text}
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" onClick={() => handleDeleteTask(index)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default ToDo;
