import { CanDeactivateFn, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export const canDeactivateGuard: CanDeactivateFn<CanComponentDeactivate> = (
  _component: CanComponentDeactivate,
  _currentRoute,
  _currentState,
  nextState: RouterStateSnapshot,
) => {
  console.log("canDeactivateGuard");

  return nextState.url.includes('hello') || confirm('Are you sure you want to leave?');
};
