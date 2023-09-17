import { useState } from 'react';
import './App.css'
import MovieTeam from './Component/MovieTeam/MovieTeam'
import Member from './Component/Member/Member';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [choses, setChoses] = useState([])
  const [cost,setCost] = useState(0)

  const handleRemoveChose = team => {
    const removed = choses.filter(item=> item.id !== team.id)
    setChoses(removed);
    setCost(cost - team.salary)
    toast.success(`Successfully Removed ${team.name}`, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }

  const handleChosenTeam = team => {
    const have = choses.find(item=> item.id === team.id)
    if(have){
        toast.error(`already have ${team.name}`, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
    }
    else{
      setChoses([...choses ,team]);
      setCost(cost + team.salary)
      toast.success(`Successfully added ${team.name}`, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
  }
console.log(choses);
  return (
    <>
      <div className='text-center bg-white py-2 sticky top-0 z-50 shadow'>
        <button className="btn btn-primary" onClick={()=>document.getElementById('my_modal_3').showModal()}>Movie Team</button>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box text-left">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 className="font-bold text-lg">Team members</h3>
            <h3 className="text-base">Total members {choses.length}</h3>
            <p className="py-4">
              {
                choses.map((item, index)=> 
                  <Member
                    key={index}
                    item={item}
                    index={index}
                    handleRemoveChose={handleRemoveChose}
                  />
                )
              }
            </p>
          </div>
        </dialog>
      </div>
      <MovieTeam handleChosenTeam={handleChosenTeam} cost={cost}/>
      <ToastContainer />
    </>
  )
}

export default App
