import {Component} from 'angular2/core';
import {RouteConfig} from 'angular2/router';

import {NavigationComponent} from './Components/Navigation/navigationComponent';
import {BindingTests} from './Components/BindingTests/bindingTestsComponent';
import {FormularTestsComponent} from './Components/FormularTests/formularTestsComponent';
import {FormularSignupComponent} from './Components/FormularSignup/formularSignupComponent';
import {ObservableComponent} from './Components/Observables/observablesComponent';
import {ServiceTestsComponent} from './Components/ServiceTests/serviceTestsComponent';
import {PostComponent} from './Components/ServiceTests/postComponent';
import {UsersComponent} from './Components/Users/usersComponent';
import {AddUserComponent} from './Components/AddUser/addUserComponent';
import {PostsComponent} from './Components/Posts/postsComponent';


@RouteConfig([
    { path: "/bindingTests", name: "BindingTests", component: BindingTests, useAsDefault: true },
    { path: "/formularSignup", name: "FormularSignup", component: FormularSignupComponent },
    { path: "/formularTests", name: "FormularTests", component: FormularTestsComponent },
    { path: "/ObservableTests", name: "ObservableTests", component: ObservableComponent },
    { path: "/ServiceTests", name: "ServiceTests", component: ServiceTestsComponent },
    { path: "/Post/:id", name: "Post", component: PostComponent },
    { path: "/Users", name: "Users", component: UsersComponent },
    { path: "/Users/new", name: "AddUser", component: AddUserComponent },
    { path: "/Posts", name: "Posts", component: PostsComponent },
    { path: "/*other", name: "Other", redirectTo: ["Users"] },
])
@Component({
    selector: 'my-app',
    template: '<navigation></navigation>',
    directives: [NavigationComponent]
})
export class MainApp { }