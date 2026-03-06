import { useState } from "react";
import { useNavigate } from "react-router";
import { Logo } from "./Logo";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";

export function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");

  const formatCPF = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 11) {
      return numbers
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    }
    return cpf;
  };

  const handleCPFChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCpf(formatCPF(e.target.value));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-8 max-w-md">
        <Button
          onClick={() => navigate("/apresentacao")}
          variant="ghost"
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Button>

        <div className="flex flex-col items-center gap-6">
          <Logo size={80} />

          <div className="bg-white rounded-2xl shadow-lg p-8 w-full">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
              Bem-vindo de volta!
            </h2>
            <p className="text-center text-gray-600 mb-6 text-sm">
              Entre com seus dados para acessar
            </p>

            <div className="space-y-4">
              <div>
                <Label htmlFor="cpf" className="text-gray-700">
                  CPF
                </Label>
                <Input
                  id="cpf"
                  type="text"
                  placeholder="000.000.000-00"
                  value={cpf}
                  onChange={handleCPFChange}
                  maxLength={14}
                  className="mt-1 h-12 rounded-xl border-gray-300"
                />
              </div>

              <div>
                <Label htmlFor="senha" className="text-gray-700">
                  Senha
                </Label>
                <div className="relative mt-1">
                  <Input
                    id="senha"
                    type={showPassword ? "text" : "password"}
                    placeholder="Digite sua senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    className="h-12 rounded-xl border-gray-300 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <button className="text-sm text-blue-600 hover:underline">
                Esqueceu sua senha?
              </button>

              <Button
                onClick={() => navigate("/principal")}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 rounded-xl mt-2"
              >
                Entrar
              </Button>

              <div className="text-center pt-4">
                <p className="text-sm text-gray-600">
                  Não tem uma conta?{" "}
                  <button
                    onClick={() => navigate("/cadastro")}
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    Cadastre-se
                  </button>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 w-full">
            <p className="text-xs text-blue-800 text-center">
              🔒 Seus dados estão protegidos e são confidenciais
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
