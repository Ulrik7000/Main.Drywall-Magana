import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Form } from './components';
import { Image } from 'components/atoms';
import { LearnMoreLink } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { HeroShaped } from 'components/organisms';

import FormInput from './components/form-input/form-input.component';
import CustomButton from './components/custom-button/custom-button.component'

// import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.css';


const useStyles = makeStyles(theme => ({
  root: {
    '& .hero-shaped': {
      borderBottom: 0,
    },
    '& .hero-shaped__wrapper': {
      [theme.breakpoints.up('md')]: {
        minHeight: `calc(100vh - ${theme.mixins.toolbar['@media (min-width:600px)'].minHeight}px)`,
      },
    },
  },
  // hero: {
  //   position: 'relative',
  //   width: '100%',
  //   height: '100%',
  //   display: 'flex',
  //   maxWidth: theme.layout.contentWidth,
  //   margin: '0 auto',
  //   [theme.breakpoints.down('sm')]: {
  //     flexDirection: 'column-reverse',
  //   },
  // },
  formContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      maxWidth: 500,
      margin: `0 auto`,
    },
  },
  image: {
    objectFit: 'cover',
  },
}));


class SigninCover extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
         email: '',
         password: ''
       };
     }

     handleSubmit = async event => {
       event.preventDefault();

       const { email, password } = this.state;

       try {
         await auth.signInWithEmailAndPassword(email, password);
         this.setState({ email: '', password: '' });
       } catch (error) {
         console.log(error);
       }
     };

     handleChange = event => {
       const { value, name } = event.target;

       this.setState({ [name]: value });
     };

render() {

  // const classes = useStyles();

  return (
    <div className={''
      // classes.root
    }
    >
      <HeroShaped
        leftSide={
          <div className={''
            // classes.formContainer
          }>
            <SectionHeader
              title="Sign in"
              subtitle={
                <span>
                  Don’t have an account?{' '}
                  <LearnMoreLink
                    title="Sign up."
                    href="/signup-cover"
                    typographyProps={{ variant: 'h6' }}
                  />
                </span>
              }
              titleProps={{
                variant: 'h3',
              }}
            />

            <form onSubmit={this.handleSubmit}>
            <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
            />

            <FormInput
            name="password"
            type="password"
            value={this.state.password}
            label='password'
            handleChange={this.handleChange}
            required
            />

            <div className='buttons'>
            <CustomButton type="submit"> Sign in </CustomButton>
            <CustomButton type="button" onClick={ signInWithGoogle } isGoogleSignIn>
            Sign in with Google
            </CustomButton>
           </div>

            </form>
            <br/>
            <Form />
          </div>
        }
        rightSide={
          <Image
            src="https://assets.maccarianagency.com/the-front/photos/account/cover-1.png"
            className={''
              // classes.image
            }
            lazy={false}
          />
        }
      />
    </div>
  )
}
};

export default SigninCover;
