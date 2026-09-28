"use client";

import { useState, type FormEvent } from "react";

type Task = { id: string; text: string };

export default function Home() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  function addTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newText = text.trim();
    if (!newText) return;

    setTasks((current) => [
      ...current,
      { id: crypto.randomUUID(), text: newText },
    ]);
    setText("");
  }

  return (
    <main>
      <h1>Att göra-lista</h1>

      <form onSubmit={addTask}>
        <label htmlFor="task-input">Ny uppgift</label>
        <input
          id="task-input"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button type="submit">Lägg till</button>
      </form>

      {tasks.length === 0 && <p>Inga uppgifter än</p>}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>{task.text}</span>
            <button
              type="button"
              onClick={() =>
                setTasks((current) =>
                  current.filter((item) => item.id !== task.id),
                )
              }
            >
              Ta bort
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
