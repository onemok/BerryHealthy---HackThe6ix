import { useState } from "react";
import AuthProvider from "./components/Auth/AuthProvider";
import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import AppTest from "./components/AppTest";
import Home from "./components/Home";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import { GemsContext } from "./components/Auth/GemContext";
function App() {
  return (
    <AuthProvider>
      <GemsContext>
        <BrowserRouter>
          <div className="min-h-screen w-screen p-2 lg:p-6 ">
            <Header />
            <BrowserRouter>
              <Switch>
                <Route path="/app" component={AppTest} />

                <Route path="/login" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route path="/" component={Home} />
              </Switch>
            </BrowserRouter>
          </div>
          <Footer />
        </BrowserRouter>
      </GemsContext>
    </AuthProvider>
  );
}

export default App;
