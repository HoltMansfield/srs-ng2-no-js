import { Component } from '@angular/core'

@Component({
  selector: 'home',
  template:
  `
    <form>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" class="form-control" name="email">
        </div>
        <div class="form-group">
          <label for="pwd">Password:</label>
          <input type="password" class="form-control" name="password">
        </div>
        <div class="checkbox">
          <label><input type="checkbox">Remember me</label>
        </div>
        <button type="submit" class="btn btn-default">Login</button>
    </form>
  `
})
export class LoginComponent { }
