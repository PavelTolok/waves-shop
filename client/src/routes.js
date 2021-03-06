import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Layout from './hoc/layout'
import Auth from './hoc/auth';

import Home from './Components/Home';
import RegisterLogin from './Components/Register_login';
import Register from './Components/Register_login/Register';
import Shop from './Components/Shop';

import UserDashboard from './Components/User';
import Addproduct from './Components/User/Admin/add_product';
import ManageCategories from './Components/User/Admin/manage_categories';
import ProductPage from './Components/Product';
import UserCart from './Components/User/cart';
import UpdateProfile from './Components/User/update_profile';
import ManageSite from './Components/User/Admin/manage_site';

import PageNotFound from './Components/utils/page_not_found'

const Routes = () => {
  return (
  <Layout>
      <Switch>
          <Route path="/user/dashboard" exact component={Auth(UserDashboard, true)}/>
          <Route path="/user/cart" exact component={Auth(UserCart, true)}/>
          <Route path="/admin/add_product" exact component={Auth(Addproduct, true)}/>
          <Route path="/admin/manage_categories" exact component={Auth(ManageCategories, true)}/>
          <Route path="/user/user_profile" exact component={Auth(UpdateProfile, true)}/>
          <Route path="/admin/site_info" exact component={Auth(ManageSite,true)}/>

          <Route path="/product_detail/:id" exact component={Auth(ProductPage, null)}/>
          <Route path="/register" exact component={Auth(Register, false)}/>
          <Route path="/register_login" exact component={Auth(RegisterLogin, false)}/>
          <Route path="/shop" exact component={Auth(Shop, null)}/>
          <Route path="/" exact component={Auth(Home, null)}/>

          <Route  component={Auth(PageNotFound)}/>
      </Switch>
  </Layout>

  )
}

export default Routes
