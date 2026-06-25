// function App(){
//   return <h1>Hello world</h1>
// }


// const App = ()=>{
//   return (
//     <nav>
//       <h3>Logo</h3>
//       <div><a href="">A</a></div>
//       <div><a href="">A</a></div>
//       <div><a href="">A</a></div>
//       <div><a href="">A</a></div>
//     </nav>
//   )
// }



function App(){
  return(
    <>
      <Navbar/>
      {/* {Navbar()} */}
      <MainContent />
      <Footer />
    </>
  )
}


function Navbar(){
  let name = "shubham";
  return <nav>Welcome,{name}</nav>
}

function MainContent(){
  return <main>Lorem ipsum dolor sit amet.</main>
}

function Footer(){
  return <footer>this is my footer</footer>
}
export default App