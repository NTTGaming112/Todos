
function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold my-5">Welcome to the Todo App - Demo for SE347.P12</h1>
      <span className="text-xl">This is a simple todo app build with React and Tailwind CSS</span>
      <span className='text-xl'><b>API Demo: </b><a href="http://dummyjson.com/docs/todos"><u>http://dummyjson.com/docs/todos</u></a></span>
    </div>
  );
};

export default Home;
