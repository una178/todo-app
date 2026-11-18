"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Task = {
  id: number;
  title: string;
  due_at: string | null;
  importance: number;
  is_done: boolean;
};

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");
  const [error, setError] = useState<string | null>(null);

  async function loadTasks() {
    const { data, error } = await supabase
      .from("tasks")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) setError(error.message);
    else {
      setError(null);
      setTasks(data ?? []);
    }
  }

  useEffect(() => {
    loadTasks();
  }, []);

  async function addTask() {
    const trimmed = title.trim();
    if (!trimmed) return;
    const { error } = await supabase.from("tasks").insert({ title: trimmed });
    if (error) setError(error.message);
    else {
      setTitle("");
      loadTasks();
    }
  }

  async function toggleDone(task: Task) {
    const { error } = await supabase
      .from("tasks")
      .update({ is_done: !task.is_done })
      .eq("id", task.id);
    if (error) setError(error.message);
    else loadTasks();
  }

  return (
    <main className="mx-auto max-w-xl p-8">
      <h1 className="mb-6 text-2xl font-bold">내 할 일</h1>

      <div className="mb-6 flex gap-2">
        <input
          className="flex-1 rounded border p-2"
          placeholder="할 일을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
        />
        <button
          className="rounded bg-black px-4 py-2 text-white"
          onClick={addTask}
        >
          추가
        </button>
      </div>

      {error && <p className="mb-4 text-red-500">에러: {error}</p>}

      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center gap-3 rounded border p-3"
          >
            <input
              type="checkbox"
              checked={task.is_done}
              onChange={() => toggleDone(task)}
            />
            <span className={task.is_done ? "text-gray-400 line-through" : ""}>
              {task.title}
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
}