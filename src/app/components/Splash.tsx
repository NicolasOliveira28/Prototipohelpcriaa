import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Logo } from "./Logo";

export function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/apresentacao");
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center">
      <div className="animate-fade-in">
        <Logo size={120} />
      </div>
    </div>
  );
}
