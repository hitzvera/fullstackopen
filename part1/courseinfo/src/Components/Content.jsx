/* eslint-disable react/prop-types */

import Part from "./Part";

const Content = ({ parts }) => {
  return (
    <section>
      {parts.map((part, index) => (
        <Part name={part.name} exercise={part.exercises} key={index} />
      ))}
    </section>
  );
};

export default Content;
