import { createBrowserRouter } from "react-router";
import { Splash } from "./components/Splash";
import { Apresentacao } from "./components/Apresentacao";
import { Login } from "./components/Login";
import { Cadastro } from "./components/Cadastro";
import { DadosPessoais } from "./components/DadosPessoais";
import { TelaPrincipal } from "./components/TelaPrincipal";
import { TelaAguardo } from "./components/TelaAguardo";
import { TelaChat } from "./components/TelaChat";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Splash,
  },
  {
    path: "/apresentacao",
    Component: Apresentacao,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/cadastro",
    Component: Cadastro,
  },
  {
    path: "/dados",
    Component: DadosPessoais,
  },
  {
    path: "/principal",
    Component: TelaPrincipal,
  },
  {
    path: "/aguardo",
    Component: TelaAguardo,
  },
  {
    path: "/chat",
    Component: TelaChat,
  },
]);