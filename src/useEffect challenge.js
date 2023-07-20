import React, {useState} from 'react'

// const useEffects1 = () =>{
//     const [count,setCount]= useState(0);

    
//     useEffect(() => {
//         if (count >= 1){
//         document.title =`Chats (${count})`

//         }else{
//             document.title = `chats`
//         }
//     });

//     console.log("Hello outside");

//     return(
//         <>
//         <h1>{count}</h1>
//         <button className="btn" onClick={
//             () => setCount(count + 1)
//         }> Click UseEffect</button>
//         </>
//     )
// }
// export default useEffects1;




let i = 0;

export default function Use() {
  const [list, setList] = useState([]);

  const add = () => {
    setList(
        list.concat(
          <button 
            key={i} 
            onClick={add}>
            {i++}
          </button>
        )
    );
  };

  return (
    <div className="Use">
      <button onClick={add}>Add</button>
      {list.map(val => val)}
    </div>
  );
}

// const add = () => {
//     setList(
//       list.concat(
//         <button 
//           key={i} 
//           onClick={add}>
//           {i++}
//         </button>
//       )
//     );
//   };