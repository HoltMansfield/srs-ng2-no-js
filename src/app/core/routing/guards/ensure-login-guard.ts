import { Injectable } from '@angular/core'
import { CanActivate } from '@angular/router'
import { User } from '../../user/user-provider'

@Injectable()
export class EnsureLoginGuard implements CanActivate {

  constructor(private userService: User) {}

  canActivate() {
    return this.userService.isLoggedIn();
  }
}
