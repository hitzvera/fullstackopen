import Content from "./Components/Content";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const App = () => {
   const course = {
     name: "Half Stack application development",
     parts: [
       {
         name: "Fundamentals of React",
         exercises: 10,
       },
       {
         name: "Using props to pass data",
         exercises: 7,
       },
       {
         name: "State of a component",
         exercises: 14,
       },
     ],
   };


  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Footer parts={course.parts} />
    </div>
  );
};

export default App;
