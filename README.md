Associated DB url = https://cosmoknotserver.herokuapp.com/
<br>
Models:
1) { 
    "user":{
      "username": STRING,
      "password": STRING,
      "is_admin": BOOLEAN,
      "adminID": STRING(admin email) 
      }
    }
                  
2) { 
    "content":{
       "creator": STRING (user or admin that made userpost), 
       "label":STRING,
       "content_text":STRING 
       }
   }


Unprotected end-points:
    register new admin: `${DB_url}/user/register/admin`;
    login as admin/user: `${DB_url}/user/login`;
    
Protected end-points:
    create new user: `${DB_url}/user/register/new_user`;
    create new post: `${DB_url}/myaccount/new_post`;
    get all user's posts: `${DB_url}/myaccount/userposts`;
    get one of user's posts: `${DB_url}/myaccount/userposts/:id`;
    get all users created by admin: `${DB_url}/user/sub-users`;
    get one user created by admin: `${DB_url}/user/sub-users/:id`;
    update user account info: `${DB_url}/user/update_account/:id`;
    delete user account: `${DB_url}/user/delete_account/:id`;

<hr />

# RbClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
