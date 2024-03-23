import React from 'react'
import { useState } from 'react';

// можна ще так
// const Apple = () => {
// 	return <button onClick={() => alert("I'm a button!")}>Click me!</button>;
// };


// const Apple = () => {
//     const handleClick = () => {
//         alert("i am not button!!!!")
//     }
//     return <button onClick={handleClick} >Don't click me</button>
    
// }

// const Apple = () => {



	// const handleClick = (evt) => {
	// 	console.log(evt);
	// };

	// return (
	// 	 <>
    //        {/* ці дужки потрібні щоб уникнути проблем повязаних  з кросбраузерністю */}
	// 		<button onClick={handleClick}>First button</button>
	// 		<button onClick={evt => console.log(evt)}>Second button</button>
	// 	</>
	// );



   // let clicks = 0;  це неправильно так як к-ть кліків не запамятовується тому додаємо: import { useState } from 'react'; i
// 	const [ clicks, setClicks ] = useState(0);

//   const handleClick = () => {
//     // clicks = clicks + 1;
// 		setClicks(clicks + 1);
//   };

// 	return <button onClick={handleClick}>Current: {clicks}</button>





//   const [clicks, setClicks] = useState(0);
//   const [isOpen, setIsOpen] = useState(false);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <button onClick={handleClick}>Current: {clicks}</button>
//       <button onClick={handleToggle}>{isOpen ? "Hide" : "Show"}</button>
//       {isOpen && "Now you can see me!"}
//     </>
//   );

// };




// const CustomButton = ({ message, children }) => {
//     return (
//       <button onClick={() => alert(message)}>
//         {children}
//       </button>
//     );
//   };
  



// const Apple = () => {
//   const [values, setValues] = useState({
//     x: 0,
//     y: 0,
// 	  });
	
// 	const updateX = () => {
// 			setValues({
// 			...values,
// 			x: values.x + 1
// 		});
// 	};

// 	const updateY = () => {
// 		setValues({
// 			...values,
// 			y: values.y + 1
// 		});
// 	};

//   return (
//     <div>
//       <p>
//         x: {values.x}, y: {values.y}
//       </p>

//       <button onClick={updateX}>Update x</button>
//       <button onClick={updateY}>Update y</button>
//     </div>
//   );
// };



const Apple = () => {
  
    
  useEffect(() => {
		// Зберігаємо ідентифікатор інтервалу в змінну
    const intervalId = setInterval(() => {
      console.log(`Interval - ${Date.now()}`);
		  }, 2000);
		
		return () => {
			// Очищаємо інтервал за його ідентифікатором
			clearInterval(intervalId);
		};
  }, []);

  return <div>Modal</div>;
  
}


export default Apple 
// export default CustomButton