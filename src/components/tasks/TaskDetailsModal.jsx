import { useSelector } from "react-redux";
import Modal from "../ui/Modal";

const TaskDetailsModal = ({ isOpen, setIsOpen, id }) => {
  const { tasks } = useSelector((state) => state.tasksSlice);
  const task = tasks.find((item) => item.id === id);
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={task?.title}>
      <div>{task?.description}</div>
      <div>
        <p className="text-3xl text-red-800 p-8">modal aziiii</p>
      </div>
    </Modal>
  );
};

export default TaskDetailsModal;
