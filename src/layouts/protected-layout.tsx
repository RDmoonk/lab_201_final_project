import { Outlet } from "react-router-dom";
import { useAuth } from "@/contexte/authContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";




export const ProtectedLayout: React.FC = () => {

  const navigate = useNavigate();
  const { user, loading } = useAuth()

  useEffect(()=> {
  if (!user && !loading ){
    navigate('/AdminLogin');
  }
  },[user,loading, navigate]);

  if (loading) return <div>Loading...</div>
 

  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
