import { useState } from "react";
import AuthProvider from "./components/Auth/AuthProvider";
import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import AppTest from "./components/AppTest";
import Home from "./components/Home";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import GemProvider, { GemsContext } from "./components/Auth/GemContext";
import CheckPoints from "./components/App/CheckPoints";
import RecordMeal from "./components/App/RecordMeal";
function App() {
  return (
    <AuthProvider>
      <GemProvider>
        <BrowserRouter>
          <div className="min-h-screen w-screen p-2 lg:p-6 ">
            <Header />
            <BrowserRouter>
              <Switch>
                <Route path="/app/record" component={RecordMeal} />

                <Route path="/app/points" component={CheckPoints} />
                <Route path="/app" component={AppTest} />

                <Route path="/login" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route path="/" component={Home} />
              </Switch>
            </BrowserRouter>
          </div>
          <Footer />
        </BrowserRouter>
      </GemProvider>
    </AuthProvider>
  );
}

export default App;
