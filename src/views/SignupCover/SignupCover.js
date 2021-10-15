import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Form } from './components';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { HeroShaped } from 'components/organisms';

import FormInput from './components/form-input/form-input.component';
import CustomButton from './components/custom-button/custom-button.component'
// import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

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

class SignupCover extends React.Component {
  // const classes = useStyles();

    constructor() {
      super();

      this.state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      };
    }

    handleSubmit = async event => {
      event.preventDefault();

      const { displayName, email, password, confirmPassword } = this.state;

      if (password !== confirmPassword) {
        alert("passwords don't match");
        return;
      }

      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          email,
          password
        );

        await createUserProfileDocument(user, { displayName });

        this.setState({
          displayName: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
      } catch (error) {
        console.error(error);
      }
    };

    handleChange = event => {
      const { name, value } = event.target;

      this.setState({ [name]: value });
    };

    render() {
      const { displayName, email, password, confirmPassword } = this.state;
      return (
    <div className={''
      // classes.root
    }>

    <div className='sign-up'>
       <h2 className='title'>I do not have a account</h2>
       <span>Sign up with your email and password</span>
       <form className='sign-up-form' onSubmit={this.handleSubmit}>
         <FormInput
           type='text'
           name='displayName'
           value={displayName}
           onChange={this.handleChange}
           label='Display Name'
           required
         />
         <FormInput
           type='email'
           name='email'
           value={email}
           onChange={this.handleChange}
           label='Email'
           required
         />
         <FormInput
           type='password'
           name='password'
           value={password}
           onChange={this.handleChange}
           label='Password'
           required
         />
         <FormInput
           type='password'
           name='confirmPassword'
           value={confirmPassword}
           onChange={this.handleChange}
           label='Confirm Password'
           required
         />
         <CustomButton type='submit'>SIGN UP</CustomButton>
       </form>
     </div>

     

      <HeroShaped
        leftSide={
          <div className={''
          // classes.formContainer
        }>
            <SectionHeader
              title="Sign up"
              subtitle="Create beautiful marketing websites in hours instead of weeks."
              titleProps={{
                variant: 'h3',
              }}
            />
            <Form />
          </div>
        }
        rightSide={
          <Image
            src="https://assets.maccarianagency.com/the-front/photos/account/cover-2.png"
            className={''
            // classes.image
          }
            lazy={false}
          />
        }
      />
    </div>
  )};
};

export default SignupCover;
