import { Route, Switch } from "react-router-dom";
import ROUTES from "./const/routes";
import { Dashboard, Question } from "./Pages";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />
      <Route path={ROUTES.QUESTION} component={Question} />
    </Switch>
  );
};
export default Routes;
