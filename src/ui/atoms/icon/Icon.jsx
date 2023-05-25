const Icon = ({ icon: Icon, onClick, color }) => {
  return (
    <div
      className={`text-slate-400 cursor-pointer hover:${color}`}
      onClick={onClick}
    >
      <Icon />
    </div>
  );
};
export default Icon;
