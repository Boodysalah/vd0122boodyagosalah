import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map,take} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router){}



  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    
    return  this.auth.logInObs.pipe(

      take(1),
      map((user)=>{
        if (user){
          return true;
        }
        return this.router.createUrlTree(['/login']);

        
      })

  
    )


    // if( this.auth.isUserLoggedIn()){

    //   return true;
    // }

    

    // return this.router.createUrlTree(['/login'])



  }
  
}
