import { useState } from "react";
import { useNavigate } from "react-router";
import { Logo } from "./Logo";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";

export function Cadastro() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
          <Logo size={70} />

          <div className="bg-white rounded-2xl shadow-lg p-8 w-full">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
              Criar Conta
            </h2>
            <p className="text-center text-gray-600 mb-6 text-sm">
              Preencha os dados para se cadastrar
            </p>

            <div className="space-y-4">
              <div>
                <Label htmlFor="nome" className="text-gray-700">
                  Nome Completo
                </Label>
                <Input
                  id="nome"
                  type="text"
                  placeholder="Seu nome completo"
                  className="mt-1 h-12 rounded-xl border-gray-300"
                />
              </div>

              <div>
                <Label htmlFor="idade" className="text-gray-700">
                  Idade
                </Label>
                <Input
                  id="idade"
                  type="number"
                  placeholder="Sua idade"
                  className="mt-1 h-12 rounded-xl border-gray-300"
                />
              </div>

              <div>
                <Label htmlFor="telefone" className="text-gray-700">
                  Telefone (opcional)
                </Label>
                <Input
                  id="telefone"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  className="mt-1 h-12 rounded-xl border-gray-300"
                />
              </div>

              <div>
                <Label htmlFor="senha-cadastro" className="text-gray-700">
                  Senha
                </Label>
                <div className="relative mt-1">
                  <Input
                    id="senha-cadastro"
                    type={showPassword ? "text" : "password"}
                    placeholder="Crie uma senha"
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

              <div>
                <Label htmlFor="confirmar-senha" className="text-gray-700">
                  Confirmar Senha
                </Label>
                <div className="relative mt-1">
                  <Input
                    id="confirmar-senha"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Digite a senha novamente"
                    className="h-12 rounded-xl border-gray-300 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <Button
                onClick={() => navigate("/dados")}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 rounded-xl mt-2"
              >
                Continuar
              </Button>

              <div className="text-center pt-4">
                <p className="text-sm text-gray-600">
                  Já tem uma conta?{" "}
                  <button
                    onClick={() => navigate("/login")}
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    Fazer login
                  </button>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-4 w-full">
            <p className="text-xs text-green-800 text-center">
              ✨ Você está criando um espaço seguro para se proteger
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
