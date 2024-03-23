import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"
import { useState, useRef } from "react";

function App() {

  const [xRotation, setXRotation] = useState(0);
  const [yRotation, setYRotation] = useState(0);
  const cardRef = useRef(null);
  
  
  
   function handleMouseMove(event) {
    const card = cardRef.current;
    const { offsetWidth: width, offsetHeight: height } = card;
    const { clientX, clientY } = event;
    const x = clientX - card.offsetLeft - width / 2;
    const y = clientY - card.offsetTop - height / 2;
    var mult = 40;
    setXRotation((y / height) * mult);
    setYRotation((x / width) * mult);
  }
  function handleMouseLeave() {
    setXRotation(0);
    setYRotation(0);
  }
  
  return (
     <div className="flex justify-center items-center  ">
      
      <div className=" mt-8 p-9 bg-cyan-200 rounded-lg shadow-lg"
      ref={cardRef}
        style={{
          transform: `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        >
        <h1 className="text-3xl font-bold mb-4">Learn about redux toolkit</h1>
        <AddTodo />
        <Todos />
      </div>
    </div>
  )
}

export default App
