import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Navbar from "./components/Navbar";
import "./App.css";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import AnimatedCursor from "react-animated-cursor";
import "nprogress/nprogress.css";

function App() {
  const [loading, setLoading] = useState(true);

  const isLoading = () => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  useEffect(() => {
    isLoading();
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="bg">
      <AnimatedCursor
        innerSize={0}
        outerSize={40}
        color="255, 165, 0"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />

      <Navbar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" exact />
        <Route component={Project} path="/Project" exact />
      </Switch>
    </div>
  );
}

export default App;
