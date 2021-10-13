import React, { useState  } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent, CardMedia, CardActions, Collapse, Avatar, IconButton, Typography,  } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
  withShadow: {
    boxShadow: `0 2px 10px 0 ${theme.palette.cardShadow}`,
  },
  noShadow: {
    boxShadow: 'none',
  },
  noBorder: {
    border: 0,
  },
  noBg: {
    background: 'transparent',
  },
  liftUp: {
    transition:
      'box-shadow .25s ease,transform .25s ease,-webkit-transform .25s ease',
    '&:hover': {
      boxShadow:
        '0 1.5rem 2.5rem rgba(22,28,45,.1),0 .3rem 0.5rem -.50rem rgba(22,28,45,.05) !important',
      transform: 'translate3d(0,-5px,0)',
    },
  },
  media: {
    position: 'relative',
    height: 300,
  },
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(4, 2),
    '&:last-child': {
      padding: theme.spacing(4, 2),
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6, 3),
      '&:last-child': {
        padding: theme.spacing(6, 3),
      },
    },
  },
  left: {
    alignItems: 'flex-start',
  },
  right: {
    alignItems: 'flex-end',
  },
  center: {
    alignItems: 'center',
  },
  // root: {
  //   maxWidth: 345,
  // },
  // media: {
  //   height: 0,
  //   paddingTop: '56.25%', // 16:9
  // },
  // expand: {
  //   transform: 'rotate(0deg)',
  //   marginLeft: 'auto',
  //   transition: theme.transitions.create('transform', {
  //     duration: theme.transitions.duration.shortest,
  //   }),
  // },
  // expandOpen: {
  //   transform: 'rotate(180deg)',
  // },
  // avatar: {
  //   backgroundColor: red[500],
  // },
}));

/**
 * Component to display the product card
 *
 * @param {Object} props
 */
const CardProduct = props => {
  const {
    mediaClassName,
    withShadow,
    noShadow,
    noBorder,
    noBg,
    liftUp,
    cardContent,
    mediaContent,
    align,
    className,
    ...rest
  } = props;

  const classes = useStyles();
  const [search, setSearch] = useState(``);
  const [tags, setTags] = useState([
'freedom mobile', 'scissorlift', 'timely', 'commercial', 'scaffolding', 'high ceilings', 'curiosa society', 'purveyors of extraordinary things', 'store', 'level 5', 'zauq restaurant', 'custom design', 'restaurant', 'high end', "king's mall", 'high lighting', 'flawless surface', 'seamless finish', "jimmy's coffe", 'repairs', 'level3', 'DIY', 'dymon storage', 'commercial spaces', 'warehouse', 'etobicoke', 'level 5', 'popcorn removal', 'asbestos', 'rewarding renovations'  ]);
// const filteredArticle = tags.filter(li => li.toLowerCase().includes(search.toLowerCase()));

 const [expanded, setExpanded] = React.useState(false);
 const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
    <Card
      // tags={filteredArticle}
      className={clsx(
        'card-product',
        classes.root,
        withShadow ? classes.withShadow : {},
        noShadow ? classes.noShadow : {},
        noBorder ? classes.noBorder : {},
        noBg ? classes.noBg : {},
        liftUp ? classes.liftUp : {},
        className,
      )}
      {...rest}
    >


      <CardMedia
        className={clsx('card-product__media', classes.media, mediaClassName)}
      >
        {mediaContent}
      </CardMedia>

      <CardContent
        className={clsx(
          'card-product__content',
          classes.content,
          classes[align],
        )}
      >

        {cardContent}

      </CardContent>
    </Card>

    </div>


  );
};

CardProduct.defaultProps = {
  align: 'left',
};

CardProduct.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * External classes for the media
   */
  mediaClassName: PropTypes.string,
  /**
   * Whether to show custom shadow
   */
  withShadow: PropTypes.bool,
  /**
   * Whether to render the card without shadow
   */
  noShadow: PropTypes.bool,
  /**
   * Whether to hide the card borders
   */
  noBorder: PropTypes.bool,
  /**
   * Whether to show transparent background
   */
  noBg: PropTypes.bool,
  /**
   * Whether to lift up on hover
   */
  liftUp: PropTypes.bool,
  /**
   * The Card content
   */
  cardContent: PropTypes.any.isRequired,
  /**
   * The Card Media content
   */
  mediaContent: PropTypes.any.isRequired,
  /**
   * The content alignment
   */
  align: PropTypes.oneOf(['left', 'right', 'center']),
};

export default CardProduct;
