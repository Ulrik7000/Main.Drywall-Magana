/**
 * Caution: Consider this file when using react-scripts
 *
 * You may delete this file and its occurrences from the project filesystem if you are using GatsbyJS or NextJS version
 */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import WithLayout from 'WithLayout';
import { Main as MainLayout, Minimal as MinimalLayout, DocsLayout } from './layouts';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  Home as HomeView,
  IndexView,
  Agency as AgencyView,
  CareerListing as CareerListingView,
  CareerListingMinimal as CareerListingMinimalView,
  CareerOpening as CareerOpeningView,
  ContactPage as ContactPageView,
  Coworking as CoworkingView,
  Elearning as ElearningView,
  Enterprise as EnterpriseView,
  Service as ServiceView,
  WebBasic as WebBasicView,
  DesktopApp as DesktopAppView,
  Expo as ExpoView,
  Startup as StartupView,
  DesignCompany as DesignCompanyView,
  MobileApp as MobileAppView,
  JobListing as JobListingView,
  Rental as RentalView,
  CloudHosting as CloudHostingView,
  Logistics as LogisticsView,
  Ecommerce as EcommerceView,
  Pricing as PricingView,
  About as AboutView,
  HelpCenter as HelpCenterView,
  HelpCenterArticle as HelpCenterArticleView,
  PortfolioPage as PortfolioPageView,
  PortfolioMasonry as PortfolioMasonryView,
  PortfolioGrid as PortfolioGridView,
  CompanyTerms as CompanyTermsView,
  ContactPageSidebarMap as ContactPageSidebarMapView,
  ContactPageCover as ContactPageCoverView,
  AboutSideCover as AboutSideCoverView,
  BlogSearch as BlogSearchView,
  BlogNewsroom as BlogNewsroomView,
  BlogArticle as BlogArticleView,
  BlogReachView as BlogReachViewView,
  PasswordResetCover as PasswordResetCoverView,
  PasswordResetSimple as PasswordResetSimpleView,
  SigninSimple as SigninSimpleView,
  SigninCover as SigninCoverView,
  SignupSimple as SignupSimpleView,
  SignupCover as SignupCoverView,
  Account as AccountView,
  Documentation as DocumentationView,
  NotFound as NotFoundView,
  NotFoundCover as NotFoundCoverView,
} from './views';

import HomePage from './views/Ecommerce/pages/homepage/homepage.component';
import storePage from './views/Ecommerce/pages/store/store.component';
import Header from './views/Ecommerce/components/header/header.component';
import CheckoutPage from './views/Ecommerce/pages/checkout/checkout.component';
import CollectionsOverview from './views/Ecommerce/components/collections-overview/collections-overview.component'
import CollectionPage from './views/Ecommerce/pages/collection/collection.component';

//import { auth, createUserProfileDocument } from './firebase/firebase.utils'
// import { setCurrentUser } from './redux/user/user.actions';
// import { selectCurrentUser } from './redux/user/user.selectors';
import Services from './views/Ecommerce/components/Services/Services.component';
import Materials from './views/Ecommerce/components/Materials/Materials.component';
import AutomaticTools from './views/Ecommerce/components/AutomaticTools/AutomaticTools.component';
import HandTools from './views/Ecommerce/components/HandTools/HandTools.component';
import Apparel from './views/Ecommerce/components/Apparel/Apparel.component';
import BestDeals from './views/Ecommerce/components/BestDeals/BestDeals.component';


class Routes extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
      const { setCurrentUser } = this.props;

      this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot(snapShot => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
          });
        }

        setCurrentUser(userAuth);
      });
    }

    componentWillUnmount() {
      this.unsubscribeFromAuth();
    }


  render() {
  return (

    <div>
    <Switch>

      <Route
        exact
        path="/"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={IndexView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/home"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={HomeView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/career-listing"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={CareerListingView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/career-listing-minimal"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={CareerListingMinimalView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/career-opening"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={CareerOpeningView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/contact-page"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={ContactPageView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/coworking"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={CoworkingView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/e-learning"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={ElearningView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/calculatebysheets"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={EnterpriseView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/calculatebyrepair"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={ServiceView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/web-basic"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={WebBasicView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/desktop-app"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={DesktopAppView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/expo"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={ExpoView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/calculatebysqft"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={AgencyView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/startup"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={StartupView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/design-company"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={DesignCompanyView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/mobile-app"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={MobileAppView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/job-listing"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={JobListingView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/rental"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={RentalView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/cloud-hosting"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={CloudHostingView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/logistics"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={LogisticsView}
            layout={MainLayout}
          />
        )}
      />


      <Route
        exact
        path="/shop"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={EcommerceView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/shop/home"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={HomePage}
            layout={MainLayout}
          />
        )}
      />
      <Route

        path="/shop/store"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={storePage}
            layout={MainLayout}
          />
        )}
      />


      <Route
        path="/shop/services"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={Services}
            layout={MainLayout}
          />
        )}
      />
      <Route
        path="/shop/materials"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={Materials}
            layout={MainLayout}
          />
        )}
      />  <Route
          path="/shop/automatictools"
          render={matchProps => (
            <WithLayout
              {...matchProps}
              component={AutomaticTools}
              layout={MainLayout}
            />
          )}
        />  <Route
            path="/shop/manualtools"
            render={matchProps => (
              <WithLayout
                {...matchProps}
                component={HandTools}
                layout={MainLayout}
              />
            )}
          />  <Route
              path="/shop/apparel"
              render={matchProps => (
                <WithLayout
                  {...matchProps}
                  component={Apparel}
                  layout={MainLayout}
                />
              )}
            />  <Route
                path="/shop/bestdeals"
                render={matchProps => (
                  <WithLayout
                    {...matchProps}
                    component={BestDeals}
                    layout={MainLayout}
                  />
                )}
              />


      <Route
        exact
        path="/shop/checkoutpage"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={CheckoutPage}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/pricing"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={PricingView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/about"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={AboutView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/help-center"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={HelpCenterView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/help-center-article"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={HelpCenterArticleView}
            layout={MainLayout}
          />
        )}
      />

      <Route
        exact
        path="/portfolio-page"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={PortfolioPageView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/portfolio-masonry"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={PortfolioMasonryView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/portfolio-grid"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={PortfolioGridView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/company-terms"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={CompanyTermsView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/contact-sidebar-map"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={ContactPageSidebarMapView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/contact-page-cover"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={ContactPageCoverView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/about-side-cover"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={AboutSideCoverView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/blog-search"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={BlogSearchView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/blog-newsroom"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={BlogNewsroomView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/blog-article"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={BlogArticleView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/drywallfinishingblog"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={BlogReachViewView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/password-reset-cover"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={PasswordResetCoverView}
            layout={MinimalLayout}
          />
        )}
      />
      <Route
        exact
        path="/password-reset-simple"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={PasswordResetSimpleView}
            layout={MinimalLayout}
          />
        )}
      />
      <Route
        exact
        path="/signin-simple"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={SigninSimpleView}
            layout={MinimalLayout}
          />
        )}
      />
      <Route
        exact
        path="/signin-cover"
        // render={() =>
        //       this.props.currentUser ? (
        //         <Redirect to='/shop/home' />
        //       ) : (
        //
        //         <SigninCoverView />
        //     )}
            // render={matchProps => (
            //     <WithLayout
            //       {...matchProps}
            //       component={SigninCoverView}
            //       layout={MinimalLayout}
            //     />
            //   )}

              render={(matchProps) =>
                    this.props.currentUser ? (
                      <Redirect to='/' />
                    ) : (
                      <WithLayout
                            {...matchProps}
                            component={SigninCoverView}
                            layout={MinimalLayout}
                          />
              )}
      />

      <Route
        exact
        path="/signup-simple"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={SignupSimpleView}
            layout={MinimalLayout}
          />
        )}
      />
      <Route
        exact
        path="/signup-cover"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={SignupCoverView}
            layout={MinimalLayout}
          />
        )}
      />
      <Route
        exact
        path="/account"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={AccountView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/documentation"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={DocumentationView}
            layout={DocsLayout}
          />
        )}
      />
      <Route
        exact
        path="/not-found"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={NotFoundView}
            layout={MinimalLayout}
          />
        )}
      />
      <Route
        exact
        path="/not-found-cover"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={NotFoundCoverView}
            layout={MinimalLayout}
          />
        )}
      />
      <Redirect to="/not-found-cover" />
    </Switch>
    </div>
  )};
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Routes);
