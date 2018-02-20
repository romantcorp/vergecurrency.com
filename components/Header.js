import React from 'react';
import { slide as Menu } from 'react-burger-menu';

import VergeLogoWhite from '../static/img/verge-logo-white.svg';

import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';

import NProgress from 'nprogress';

import Navbar from './Navbar';
import MenuItems from './MenuItems';

import { translate } from 'react-i18next';
import i18n from '../i18n';

Router.onRouteChangeStart = (url) => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Header = ({ t }) => (
  <header id="header">
    <Head>
      <style type="text/css">
        @import url(/static/css/ngprogress.css);
      </style>
    </Head>
    <div className="container container--with-gutter">
      <div className="row between-xs around-sm middle-xs">
        <div className="col-xs-5 col-sm-1 col-md-2 start-xs middle-xs">
          <Link href="/">
            <a>
              <VergeLogoWhite />
            </a>
          </Link>
        </div>
        <nav className="col-xs-5 col-sm end-xs menu">
          <div className="hidden-xs">
            <MenuItems t={t} />
          </div>
          <div className="visible-xs">
            <Menu right>
              <MenuItems t={t} />
            </Menu>  
          </div>
        </nav>
      </div>
    </div>
    <Navbar />
  </header>
);

export default Header;
