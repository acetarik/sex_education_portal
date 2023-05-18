const Dahsboard = ({ date_time, consultant, time_slots }) => {
  return (
    <div className="flex flex-row text-center">
      <div className="bg-yellow-500 w-[30%]">{consultant}</div>
      <div className="bg-yellow-500 w-[30%]">{date_time}</div>
      <div className="bg-yellow-500 w-[30%]">{time_slots}</div>
    </div>
  );
};
export default Dahsboard;
