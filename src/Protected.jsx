import { Navigate } from "react-router-dom";

const Protected = ({ isAdmin, children }) => {
	if (!isAdmin) return <Navigate to={"/admin"} />;
	return children;
};

export default Protected;
