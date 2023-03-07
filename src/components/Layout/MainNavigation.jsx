import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

export function MainNavigation() {
  return (
    <nav className={classes.navigation}>
      <ul className={classes.list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/actions/test"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Speed test
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/actions/training"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Train typing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/actions/challenge"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Challenges
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
