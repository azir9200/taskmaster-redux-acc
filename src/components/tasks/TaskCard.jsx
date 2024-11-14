import { ArrowRightIcon, TrashIcon } from "@heroicons/react/24/outline";
import { removeTask } from "../../redux/features/tasks/tasksSlice";
import { useUpdateTaskMutation } from "../../redux/api/taskApi";

const TaskCard = ({ task }) => {
  const [updateTask, { data, error }] = useUpdateTaskMutation();
  // console.log("update task", data, updateTask);
  const handleUpdate = (id, updatedStatus) => {
    const data = {
      status: updatedStatus,
    };
    const options = {
      id: id,
      data: data,
    };
    updateTask(options);
  };
  // console.log("updateTask", data);
  console.log("update error", error);
  // const dispatch = useDispatch();
  let updatedStatus;

  if (task.status === "pending") {
    updatedStatus = "running";
  } else if (task.status === "running") {
    updatedStatus == "done";
  } else {
    updatedStatus == "archive";
  }

  return (
    <div className="bg-secondary/10 rounded-md p-5">
      <h1
        className={`text-lg font-semibold mb-3  ${
          task.priority === "high" ? "text-purple-500" : " "
        } ${task.priority === "medium" ? "text-orange-500" : " "} ${
          task.priority === "low" ? "text-green-500" : ""
        }`}
      >
        {task?.title}
      </h1>
      <p className="mb-3">{task?.description}</p>
      <p className="text-sm">Assigned to - {task?.assignedTo}</p>
      <div className="flex justify-between mt-3">
        <p>{task?.date}</p>
        <div className="flex gap-3">
          <button onClick={() => console.log(removeTask)} title="Delete">
            <TrashIcon className="h-5 w-5 text-red-500" />
          </button>
          <button
            onClick={() => handleUpdate(task._id, updatedStatus)}
            title="Update Status"
          >
            <ArrowRightIcon className="h-5 w-5 text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
