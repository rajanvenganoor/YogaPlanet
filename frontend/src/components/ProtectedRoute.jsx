
const ProtectedRoute = ({ allowedRoles, children }) => {
  const role = localStorage.getItem("role");
  return allowedRoles.includes(role)
    ? children
    : <h3>Access Denied</h3>;
};
export default ProtectedRoute;
