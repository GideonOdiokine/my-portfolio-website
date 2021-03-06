import { Route } from "react-router-dom";
import PATHS from "../../config/constants/path";
import Home from "../../pages/Home/Home";
import Work from "../../pages/Work/Work";
import Blog from "../../pages/Blog/Blog";
import Contact from "../../pages/Contact/Contact";
import NotFoundPage from "../../pages/NotFound/NotFound";

export const commonRoutes = [
  <Route exact path={PATHS.HOME} component={Home} />,
  <Route exact path={PATHS.CONTACT} component={Contact} />,
  <Route exact path={PATHS.WORK} component={Work} />,
  <Route exact path={PATHS.BLOG} component={Blog} />,
  <Route path="*" component={NotFoundPage} />,
];
