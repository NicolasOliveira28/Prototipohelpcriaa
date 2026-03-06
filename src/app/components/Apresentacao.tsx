import { useNavigate } from "react-router";
import { Logo } from "./Logo";
import { Shield, Heart, Phone, Users } from "lucide-react";
import { Button } from "./ui/button";

export function Apresentacao() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-8 max-w-md">
        <div className="flex flex-col items-center gap-8">
          <Logo size={100} />
          
          <div className="bg-white rounded-2xl shadow-lg p-6 w-full">
            <h2 className="text-xl font-bold text-center text-gray-800 mb-6">
              Um espaço seguro para você
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Proteção</h3>
                  <p className="text-sm text-gray-600">
                    Seus dados são protegidos e confidenciais
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Cuidado</h3>
                  <p className="text-sm text-gray-600">
                    Estamos aqui para te ajudar e apoiar
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Phone className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Emergência</h3>
                  <p className="text-sm text-gray-600">
                    Acione o Conselho Tutelar rapidamente
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Suporte</h3>
                  <p className="text-sm text-gray-600">
                    Profissionais prontos para te ouvir
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full space-y-3">
            <Button 
              onClick={() => navigate("/login")}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 rounded-xl"
            >
              Ver Tela de Login
            </Button>
            <Button 
              onClick={() => navigate("/cadastro")}
              variant="outline"
              className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 py-6 rounded-xl"
            >
              Ver Tela de Cadastro
            </Button>
            <Button 
              onClick={() => navigate("/principal")}
              variant="outline"
              className="w-full border-2 border-green-600 text-green-600 hover:bg-green-50 py-6 rounded-xl"
            >
              Ver Tela Principal
            </Button>
          </div>

          <p className="text-xs text-center text-gray-500 max-w-xs">
            Este é um protótipo de apresentação do app Help CRIAA
          </p>
        </div>
      </div>
    </div>
  );
}
