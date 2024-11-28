# router-deactivate-guard

Steps to reproduce:

1. Navigate from `home` to `hello/1`
   - Expected log:  
     - `HelloComponent.constructor`
2. Navigate from `hello/1 `to `hello/2`
   - Expected log:  
     - _nothing_   (note, also no `HelloComponent.ngOnDestroy`)
   - Actual log:  
     - `canDeactivateGuard`  (not expected, as component is not destroyed)

