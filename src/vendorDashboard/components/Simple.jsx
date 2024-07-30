// TestToast.jsx
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TestToast = () => {
  const notify = () => {
    console.log("Test notify function called");
    toast.success("Please Save Sanatan !");
  };

  return (
    <div>
      <button onClick={notify}>Please Save Sanatan ! </button>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
};

export default TestToast;
