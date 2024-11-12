import { Dialog } from "@headlessui/react";

export default function Modal({ isOpen, setIsOpen, title, children }) {
  return (
    <div className="text-center justify-center items-center">
      {/* <button onClick={() => setIsOpen(true)}>Add Task</button> */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="fixed inset-0 overflow-y-auto bg-white  w-2/5 flex  items-center justify-center">
          <div className="flex  items-center justify-center p-4">
            <Dialog.Panel>
              <Dialog.Title>{title} </Dialog.Title>

              <p>{children} </p>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
