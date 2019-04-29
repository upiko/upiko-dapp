import React from "react";
import { notify, notifyError } from "./../../common/Actions";

export default function ToastTest() {
  return (
    <div>
      <button
        onClick={() => {
          notify("tell me something ok");
        }}
      >
        Notify
      </button>

      <button
        onClick={() => {
          notify("tell me something good", true);
        }}
      >
        Success
      </button>

      <button
        onClick={() => {
          notifyError("tell me something bad");
        }}
      >
        Error
      </button>
    </div>
  );
}
