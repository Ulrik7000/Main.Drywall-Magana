import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Divider } from '@material-ui/core';
import { Topbar, Footer, Sidebar } from './components';

import { Grid } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { DescriptionListIcon, CardBase } from 'components/organisms';

import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
// import store
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
  },
}));

const Main = ({ linkUrl, data, className, item, children, themeToggler, themeMode }) => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const pages = {
    landings: {
      title: 'Quote your project',
      subtitle: 'Quote your project',
      id: 'landing-pages',
      children: {
        services: {
          groupTitle: 'Drywall finishing calculators',// groupTitle: 'Services',
          pages: [
            {
              title: 'Calculate by number of sheets installed',
              href: '/calculatebysheets',
              // title: 'Coworking',
              // href: '/coworking',
            },
            {
              title: 'Calculate by sq/ft',
              href: '/calculatebysqft',
              // title: 'Rental',
              // href: '/rental',
            },
            {
              title: 'Calculate by repair',
              href: '/calculatebyrepair',
              // title: 'Job Listing',
              // href: '/job-listing',
            },
            {
              // title: 'E-Learning',
              // href: '/e-learning',
            },
            {
              // title: 'E-commerce',
              // href: '/shop',
            },
            {
              // title: 'Expo',
              // href: '/expo',
            },
          ],
        },
        apps: {
          // groupTitle: 'Apps',
          pages: [
            {
              // title: 'Desktop App',
              // href: '/desktop-app',
            },
            {
              // title: 'Mobile App',
              // href: '/mobile-app',
            },
          ],
        },
        web: {
          // groupTitle: 'Drywall finishing calculators',
          pages: [

            {
              // title: 'Calculate by number of sheets installed',
              // href: '/calculatebysheets',
            },
            {
              // title: 'Calculate by sq/ft',
              // href: '/calculatebysqft',
            },
            {
              // title: 'Marketing',
              // href: '/',
            },
            {
              // title: 'Overview',
              // href: '/home',
            },
            {
              // title: 'Basic',
              // href: '/web-basic',
            },
            {
              // title: 'Service',
              // href: '/calculatebyrepair',
            },
            {
              // title: 'Startup',
              // href: '/startup',
            },
            {
              // title: 'Cloud Hosting',
              // href: '/cloud-hosting',
            },
            {
              // title: 'Design Company',
              // href: '/design-company',
            },
            {
              // title: 'Logistics',
              // href: '/logistics',
            },
          ],
        },
      },
    },
    pages: {
      title: 'Learn more about Drywall Magana',
      id: 'supported-pages',
      children: {
        career: {
          groupTitle: 'Help center',// groupTitle: 'Career',
          pages: [
            {
              title: 'FAQ article',
              href: '/help-center-article',
              //   title: 'Lising',
              // href: '/career-listing',
            },

          ],
        },
        helpCenter: {
          groupTitle: 'Company',  // groupTitle: 'Help center',
          pages: [
            {
              title: 'About',
              href: '/about',
            },
            {
              title: 'Pricing options',
              href: '/pricing',
            },
            {
              title: 'Terms',
              href: '/company-terms',
            },
            // {
            // title: 'Shop',
            // href: '/shop',
            // },
            // {
            // title: 'E-commerceHome',
            // href: '/shop/home',
            // },{
            // title: 'E-commercestore',
            // href: '/shop/store',
            // },

            ],
        },
        company: {
          groupTitle: 'Getting in touch',// groupTitle: 'Company',
          pages: [
            {
              title: 'Contact details',
              href: '/contact-page',
              // title: 'About',
              // href: '/about',
            },
            {
              title: 'Social networks',
              href: '/portfolio-page#socmed',
              // title: 'Pricing',
              // href: '/pricing',
            },
            {
              // title: 'Terms',
              // href: '/company-terms',
            },
          ],
        },
        contact: {
          groupTitle: 'Drywall finishing newsletter', // groupTitle: 'Contact',
          pages: [
            {
              title: 'Articles column',
              href: '/drywallfinishingblog',
              // title: 'Reach View',
              // href: '/contact-page',
            },
            {
              // title: 'Sidebar Map',
              // href: '/contact-sidebar-map',
            },
            {
              // title: 'Cover',
              // href: '/contact-page-cover',
            },
          ],
        },
        blog: {
          groupTitle: 'Projects portfolio',// groupTitle: 'Blog',
          pages: [
            {
              title: 'Colaborations and private clients',
              href: '/portfolio-page',
              // title: 'Newsroom',
              // href: '/blog-newsroom',
            },
            {
              // title: 'Reach View',
              // href: '/drywallfinishingblog',
            },
            {
              // title: 'Search',
              // href: '/blog-search',
            },
            {
              // title: 'Article',
              // href: '/blog-article',
            },
          ],
        },
        portfolio: {
          // groupTitle: 'Portfolio',
          pages: [
            {
              // title: 'Basic',
              // href: '/portfolio-page',
            },
            {
              // title: 'Masonry',
              // href: '/portfolio-masonry',
            },
            {
              // title: 'Grid View',
              // href: '/portfolio-grid',
            },
            {
              // title: 'Parallax Effect',
              // href: '/calculatebysqft',
            },
          ],
        },
      },
    },
    account: {
      title: 'Shop',
      id: 'account',
      children: {

        settings: {
          groupTitle: ' ',
          pages:  [

            {title: 'HOME',
              href: '/shop'},
              {title: 'CATEGORIES',
                href: '/shop#cats'},
                {title: 'FEATURED SERVICES',
                  href: '/shop#featuredservices'},

            // {
              // title: 'Security',
              // href: '/account/?pid=security',
            // },
            // {
              // title: 'Notifications',
              // href: '/account/?pid=notifications',
            // },
            // {
              // title: 'Billing',
              // href: '/account/?pid=billing',
            // },
          ],
        },
        signup: {
          // groupTitle: 'Categories',
          pages: [

            // {title: 'Services',
            // href: '/shop/services'},
            // {title: 'Materials',
            // href: '/shop/materials'},
            // {title: 'Automatic tools',
            // href: '/shop/automatictools'},
            // {title: 'Hand taping tools',
            // href: '/shop/manualtools'},
            // {title: 'Apparel',
            // href: '/shop/apparel'},
            // {title: 'Best deals',
            // href: '/shop/bestdeals'},
            {
              // title: 'Simple',
              // href: '/signup-simple',
            },
            {
              // title: 'Sign Up',
              // href: '/signup-cover',
            },
          ],
        },
        signin: {
          // groupTitle: 'Welcome back',
          pages: [
            {
              // title: 'Simple',
              // href: '/signin-simple',
            },
            {
              // title: 'Sign in',
              // href: '/signin-cover',
            },
          ],
        },
        password: {
          // groupTitle: 'Password reset',
          pages: [
            {
              // title: 'Simple',
              // href: '/password-reset-simple',
            },
            {
              // title: 'Cover',
              // href: '/password-reset-cover',
            },
          ],
        },
        error: {
          // groupTitle: 'Error',
          pages: [
            {
              // title: 'Simple',
              // href: '/not-found',
            },
            {
              // title: 'Cover',
              // href: '/not-found-cover',
            },
          ],
        },
      },

    },
  };

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;

  return (
    <div
      className={clsx({
        [classes.root]: true,
      })}
    >
      <Topbar onSidebarOpen={handleSidebarOpen} pages={pages} themeMode={themeMode} themeToggler={themeToggler} />
      <Sidebar
        onClose={handleSidebarClose}
        open={open}
        variant="temporary"
        pages={pages}
      />
      <main>
        <Divider />
        {children}
      </main>
      <Footer pages={pages} />

    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node,
  themeToggler: PropTypes.func.isRequired,
  themeMode: PropTypes.string.isRequired,
};

export default Main;
