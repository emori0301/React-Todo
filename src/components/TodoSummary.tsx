type Props = {
  deleteAllCompleted: () => void;
};

export const TodoSummary = ({ deleteAllCompleted }: Props) => {
  return (
    <div className="flex align-center justify-end">
      <button
        onClick={deleteAllCompleted}
        className="text-red-500 text-sm"
      >
        完了したTodoを削除
      </button>
    </div>
  );
};
