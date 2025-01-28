import Modal from "../ui/Modal";
import { useGetTasksQuery } from "../../redux/api/taskApi";

const TaskDetailsModal = ({ isOpen, setIsOpen, id }) => {
  const { data, isLoading, isError } = useGetTasksQuery(undefined);
  const tasks = data?.data || [];

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading tasks.</p>;
  const task = tasks.find((item) => item.id === id) || {};

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title={task?.title || "Task Details"}
    >
      {task?.description || "No description available"}
    </Modal>
  );
};

export default TaskDetailsModal;
