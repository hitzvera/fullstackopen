/* eslint-disable react/prop-types */
const Notification = ({ message, isError }) => {
  return message === null ? null : (
    <div className={isError ? "error" : "success"}>{message}</div>
  );
};

export default Notification;
