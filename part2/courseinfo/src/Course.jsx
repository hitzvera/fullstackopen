/* eslint-disable react/prop-types */
const Course = ({ courses }) => {
  return (
    <div>
      <h1>Web Development curriculum</h1>
      {courses.map((course, i) => (
        <div key={i}>
          <Header name={course.name} />
          <Content parts={course.parts} />
          <Total parts={course.parts} />
        </div>
      ))}
    </div>
  );
};

const Header = ({ name }) => {
  return <h1>{name}</h1>;
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part, i) => (
        <Part name={part.name} exercises={part.exercises} key={i} />
      ))}
    </div>
  );
};

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

const Total = ({ parts }) => {
  const sum = parts.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.exercises;
  }, 0);
  return <strong>total of {sum} exercises</strong>;
};

export default Course

