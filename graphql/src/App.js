import "./App.css";
import { ApolloProvider } from "@apollo/client";
import Login from "./Login";
import client from "./ApolloConfig";
import "antd/dist/antd.css";
import Home from "./Home";


function App() {
  const jwt = localStorage.getItem("jwt");

  return (
    <ApolloProvider client={client}>
      {jwt ? <Home /> : <Login />}
    </ApolloProvider>
  );
}

export default App;
