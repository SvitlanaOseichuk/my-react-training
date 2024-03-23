// src/components/App.jsx




// 1
// import Cart from "./Cart";
// import { Product } from "./Product";
// import { HiUser } from "react-icons/hi";
// import { ImMusic } from "react-icons/im";

// const cartData = [
//   {id:'1_p', title : 'mina', ptitle :'se more', dis:false},
//   {id:'2_p', title : 'sina', dis:true},
//   {id:'3_p', title : 'dina', ptitle :'poild', dis:false},
//   {id:'4_p', title : 'zina', ptitle :'kigil', dis:false}
  
// ]




// 2
// import CustomButton from "./module_2/module2";
// import Apple from "./module_2/module2";
// // import { useState } from 'react';
// import { useState, useEffect } from "react";



/* 1................................................


// export default function App() {
//   return (
//     <>


       
       
       <h1>Best selling</h1> 

       <Cart title='mina' ptitle='se more' dis={false} />
      <Cart title='sina' dis={true} />
      <Cart title='mina' ptitle='poild' dis={false} />
      <Cart title='sina' ptitle='kigil' dis={true} /> 
 
<HiUser className="my-icon" size="24" />
    
<ImMusic color="teal" size="64"/>

      {cartData.map((cart) => {
        return (
          <Cart key={cart.id}
            title={cart.title}
            ptitle={cart.ptitle}
            dis={cart.dis}
          
          />
        )
      })} 

      <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error">
        There was an error during your last transaction
      </Alert>
      <Alert variant="success">
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning">
        Please update your profile contact information
      </Alert> 
  

       <Product
        name="Tacos With Lime"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="<https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640>"
        price={14.29}
      /> 
   

//     </>
//   );
// }




{/* 2.......................... */



// const App = () => {
//   const [clicks, setClicks] = useState(() => {
//     const savedClicks = window.localStorage.getItem("saved-clicks");
//     if (savedClicks !== null) {
//       return savedClicks;
//     }
//     return 0;
//   });

//   useEffect(() => {
//     window.localStorage.setItem("saved-clicks", clicks);
//   }, [clicks]);

//   return (
//     <div>
//       <button onClick={() => setClicks(clicks + 1)}>
//         You clicked {clicks} times
//       </button>
//       <button onClick={() => setClicks(0)}>Reset</button>
//     </div>
//   );
// };




// export default App
// ..............................2





// ....3.........................

// import React from 'react'
// // import LoginForm from './module_3/LoginForm'
// import SearchBar from './module_3/SearchBar';
// import { useState } from 'react';

// const App = () => {

//   const [lang, setLang] = useState("uk");

//   // Колбек-функція для обробки сабміту форми
//   // const handleLogin = (userData) => {
//   //   console.log(userData);
//   // }

//   return (
//     <div>
//       {/* <h1>Please login to your account!</h1>
//       {/* Передаємо колбек як пропс форми */}
//        {/* <LoginForm onSubmit={handleLogin} />  */} 

     
//       <p>Selected language: {lang}</p>
//       <SearchBar value={lang} onSelect={setLang} />
//     </div>
//   )
// }



// import React from 'react'
// import SearchBar from './module_3/SearchBar';
// import { useState } from 'react';
// const App = () => {
//   const [coffeeSize, setCoffeeSize] = useState("sm");

//   const handleSizeChange = (evt) => {
//     setCoffeeSize(evt.target.value);
//   };

//   return (
//     <>
//       <h1>Select coffee size</h1>
//       <label>
//         <input
//           type="radio"
//           name="coffeeSize"
//           value="sm"
//           checked={coffeeSize === "sm"}
//           onChange={handleSizeChange}
//         />
//         Small
//       </label>
//       <label>
//         <input
//           type="radio"
//           name="coffeeSize"
//           value="md"
//           checked={coffeeSize === "md"}
//           onChange={handleSizeChange}
//         />
//         Meduim
//       </label>
//       <label>
//         <input
//           type="radio"
//           name="coffeeSize"
//           value="lg"
//           checked={coffeeSize === "lg"}
//           onChange={handleSizeChange}
//         />
//         Large
//       </label>

//       <p>

//         <b>Selected size:</b> {coffeeSize}
//       </p>
//     </>
//   );
// };



// import React from 'react'
// import SearchBar from './module_3/SearchBar';
// import { useState } from 'react';
// import LoginForm from './module_3/LoginForm';

// const App = () => {
  
// const [hasAccepted, setHasAccepted] = useState(false)

// const handleChange = (evt) => {
//   setHasAccepted(evt.target.checked)
// }

// const handleHandle =(evt) =>{//це щоб кнопка переставала бути активною і очищався чекбокс
//   evt.preventDefault()
//   console.log(hasAccepted)
//   setHasAccepted(false)

// }

//   return (
//     <>

//     <LoginForm />
// <form onSubmit={handleHandle}>
//     <label>
//       <input 
//       type="checkbox" 
//       name="terms" 
//       checked={hasAccepted}
//       onChange={handleChange}
//       />
//         I accepted terms and conditions
//     </label>
//     <button type='submit' disabled={!hasAccepted}>Proceed</button>
//     </form>
//     </>
//   );
// };


// export default App

// import React from 'react'
// import { useState } from 'react';
// import tasksStete from './module_3/tasks.json'
// import Form from './module_3/Form'
// import TaskList from './module_3/TaskList';
// import Filter from './module_3/Filter';
// import { nanoid } from 'nanoid';
// import FeedbackForm from './module_3/Form';

// const App = () => {

// const [tasks, setTasks] = useState(tasksStete);
// const [filter, setFilter] = useState('')

// // const addTask = (newTask) => {
// //   setTasks((prevTasks) => {
// //     return[
// //       ...prevTasks,
// //       newTask
// //     ]
// //   })
// // }

// const addTask = (newTask) => {
// const finalTask = {
//   ...newTask,
//   id: nanoid(),
// }

//   setTasks(prevState=>[...prevState, finalTask])
// }
  
// const deleteTask= (taskId) => {
//   setTasks(prevTasks => {
//     return prevTasks.filter(task => task.id !== taskId)
//   })
//   console.log(taskId)
// }

// const visibleTasks = tasks.filter((task) => task.text.toLowerCase().includes(filter.toLowerCase()))


//   return (
//     <div>
//       {/* <Form onAdd={addTask} /> */}
//       <FeedbackForm />
//       <Filter value={filter} onFilter={setFilter} />
//       <TaskList tasks={visibleTasks} onDelete={deleteTask} />
//     </div>
//   )
// }

// export default App


// ..................3................


// .......4...................................

// import { useEffect, useState } from "react";
// import axios from "axios";
// import ArticleList from "./module_4/ArticleList"
// import { fetchArticlesWithTopic } from "./module_4/articles-api";
// import SearchForm from "./module_4/SearchForm";




// const App = () => {
// 	const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

// 	const handleSearch = async (topic) => {
//     try {
// 	  setArticles([]);
// 	  setError(false);
//       setLoading(true);
//       const data = await fetchArticlesWithTopic(topic);
//       setArticles(data);
//     } catch (error) {
//       setError(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <SearchForm onSearch={handleSearch} />
//       {loading && <p>wait  </p>}
//       {error && <p>error is here</p>}
//       {articles.length > 0 && <ArticleList items={articles} />}
//     </div>
//   );
// };


// // export default App
// import { requestProducts, requestProductsBySearch } from "./module_4/articles-api";

// import { useEffect, useState } from "react";
// import React from 'react'
// import ErrorMassage from "./module_4/ErrorMessage";
// import LoaderM from "./module_4/LoaderM";
// import ProductList from "./module_4/productList.jsx"
// import Search from "./module_4/Search";




// const App = () => {

//   const [products, setProducts] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const [search, setSearch] = useState(null);


//   useEffect(() => {
//     async function fetchData() {
//       try {
//         setLoading(true)
//         setError(false)
//         const data = await requestProducts();
//           setProducts(data.products)
//           console.log(data)
//       } catch (error) {
//           setError(true)
//       } finally {
//         setLoading(false)
//       }
//   }
//   fetchData()
// }, [])



// useEffect(() => {
//   if(search == null) 
//   return;

//   async function fetchDataSearch() {
//     try {
//       setLoading(true)
//       setError(false)
//       const data = await requestProductsBySearch(search);
//         setProducts(data.products)
//         console.log(data)
//     } catch (error) {
//         setError(true)
//     } finally {
//       setLoading(false)
//     }
// }
// fetchDataSearch()
// }, [search])


// const onSearchQuery = (query) => {
//   setSearch(query);
// }

//   return (
//     <div>
//       <Search onSearchQuery={onSearchQuery}/>
//       <h2>Phone Store</h2>
//       {error && <ErrorMassage />}
//       {loading && <LoaderM />}
//       <ProductList products={products}/>
//     </div>
//   )
// }

// export default App




import clsx from 'clsx';
import { Routes, Route, Link, } from "react-router-dom";
import About from "./module_5/About";
import NotFound from "./module_5/NotFound";
import Products from "./module_5/Products";
import Home from "./module_5/Home";
import css from './App.module.css';
import ProductDetails from './module_5/ProductDetails';



export const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App