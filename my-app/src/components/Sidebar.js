import "./Sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <span className="material-symbols-outlined hover active">lightbulb</span>
      <span className="material-symbols-outlined hover">notifications</span>
      <span className="material-symbols-outlined hover">edit</span>
      <span className="material-symbols-outlined hover">archive</span>
      <span className="material-symbols-outlined hover">delete</span>
    </div>
  );
}

export default Sidebar;
