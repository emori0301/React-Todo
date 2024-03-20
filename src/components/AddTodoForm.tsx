import { useState } from 'react';
import { Plus } from 'lucide-react';

type Props = {
  addTodo: (title: string) => void;
};

export const AddTodoForm = ({ addTodo }: Props) => {
  const [inputValue, setInputValue] = useState('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // ページの更新を防ぐ
    e.preventDefault();

    // 親に値を渡す
    addTodo(inputValue);

    // 値を空に戻す
    setInputValue('');
  };

  return (
    <form
      className="flex"
      // +ボタンをクリックすると発火
      onSubmit={onSubmit}
    >
      <input
        type="text"
        placeholder="新しいTodoを入力してください"
        className="p-2 grow rounded-s bg-slate-200"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        type="submit"
        className="p-2 rounded-e bg-blue-600 hover:bg-blue-800 disabled:bg-gray-400 transition-colors"
        disabled={!inputValue}
      >
        <Plus className="text-white" />
      </button>
    </form>
  );
};
