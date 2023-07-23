import React from "react";

export const Form = () => {
  return (
    <form className="bg-slate-900 text-zinc-200">
      <div className="w-18 h-18 ">
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            User Name
          </label>
          <input id="name" type="text" className="form-control" />
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Password
            </label>
            <input id="password" type="text" className="form-control" />
          </div>
        </div>
      </div>
    </form>
  );
};
