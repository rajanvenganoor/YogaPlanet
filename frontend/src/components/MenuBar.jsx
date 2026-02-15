
const MenuBar = () => {
  const role = localStorage.getItem("role");
  return (
    <nav>
      <button disabled={!(role==='Admin'||role==='Editor')}>
        Data Entry
      </button>
    </nav>
  );
};
export default MenuBar;
