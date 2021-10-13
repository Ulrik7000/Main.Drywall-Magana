import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';

// import './directory.styles.css';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  image: {
    width: 60,
    height: 60,
    objectFit: 'contain',
    marginBottom: theme.spacing(5),
  },
  descriptionListIcon: {
    '& .description-list-icon__title': {
      fontWeight: 400,
      fontSize: 16,
    },
  },
  cardBase: {
    borderRadius: theme.spacing(2),
    background: theme.palette.alternate.main,
  },
}));


const Directory = ({ sections }) => {

  // const { data, className, ...rest } = props;
  const classes = useStyles();

  return (
  <div >
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
