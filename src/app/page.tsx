"use client"
import {  useState, FormEvent } from "react";
export default function Todo () {
    const [task, addtask] = useState("");
    const [des, adddes] = useState("");
    const [handle, taskhandle] = useState<{ task: string; des: string }[]>([]);
    const onclicking = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (task.trim() === "" || des.trim() === "") {
            alert("Please fill in both the task and description fields.");
            return;
        }
        taskhandle([...handle, { task, des }]);
        addtask("");
        adddes("");
        console.log(handle);
    }
    const deletehandler = (index: number) => {
        taskhandle(handle.filter((_, i) => i !== index)); // Remove task by index
    };
    let rendertask1: JSX.Element | JSX.Element[] = (
      <h2>
        Add your todos <button className="plus">+</button>
      </h2>
    );
       if(handle.length>0){
              rendertask1 = handle.map((t,i) => {
            return(
                <div key={i} className="newtodo">
                    <p className="p">{t.task}</p>
                    <p className="p">{t.des}</p>
                    <button onClick={()=> deletehandler(i)} className="delete">Delete</button>
                </div>
            )
          })
    }
    return (
        <>
        <div className="form">
        <h1 className="heading">TO-DO-LIST</h1>
        <form onSubmit={onclicking} className="form1">
            <input 
              className="value"
              type="text" 
              placeholder="Add a new task"
              value={task}
              onChange={(e)=> {
                addtask(e.target.value);
              }}
            />
            <input 
              className="value1"
              type="text" 
              placeholder="Enter Description"
              value={des}
              onChange={(e)=>{
                adddes(e.target.value);
              }}
            />
            <button type="submit" className="task">Add task</button>
        </form>
        <div className="addtodo">
            <ul>
                {rendertask1}
            </ul>
        </div>
    </div>
        </>
    )
}