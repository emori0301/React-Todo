import { Todo } from "../types/todo";
import { Trash2 } from 'lucide-react';

type Props = {
  todoList: Todo[];
  changeCompleted: (id: number) => void;
  deleteTodo: (id: number) => void;
};

export const TodoList = ({ todoList, changeCompleted, deleteTodo }: Props) => {  return (
    <div className="space-y-3">
      {todoList.map((todo) => (
        <div
          key={todo.id}
          className="p-2 flex items-center gap-3 rounded bg-white"
        >
          <label className="grow flex items-center gap-3 hover:cursor-pointer">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="size-5"
                checked={todo.completed}
                onChange={() => changeCompleted(todo.id)}
              />
            </div>
            {/* completedがtrueならクラスを適用、falseならクラスを適用しない */}
            <span
              className={todo.completed ? "line-through text-gray-400" : ""}
            >
              {todo.title}
            </span>
          </label>
          <button
            type="button"
            className="p-2 rounded bg-gray-200 hover:bg-gray-300 transition-colors"
            onClick={() => deleteTodo(todo.id)}>
            <Trash2 className="size-5 text-gray-500" />
          </button>

        </div>
      ))}
      {/* Todoが無い場合、表示する */}
      {todoList.length === 0 && (
        <p className="text-center text-sm">Todoがありません</p>
      )}
    </div>
  );
};
