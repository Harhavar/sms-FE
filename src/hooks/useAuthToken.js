import { useAuthHeader } from "react-auth-kit";

const useAuthToken = () => {
  const authHeader = useAuthHeader();
  let token = authHeader().replace("string ", "");
  return token;
};

export default useAuthToken;
