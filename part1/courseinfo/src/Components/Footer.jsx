/* eslint-disable react/prop-types */
const Footer = ({ parts }) => {
  const sum = parts.reduce((total, current) => total + current.exercises, 0);

  return <p>Number of exercises {sum}</p>;
};

export default Footer;
