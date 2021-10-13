import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Grid,
  Typography,
  Divider,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
} from '@material-ui/core';
import { SectionHeader, DescriptionCta } from 'components/molecules';
import { Section, CardBase } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
    '& .description-cta__button-group': {
      flexWrap: 'nowrap',
    },
  },
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
    },
  },
  fontWeightBold: {
    fontWeight: 'bold',
  },
  divider: {
    margin: theme.spacing(3, 0),
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(5, 0),
    },
  },
  textWhite: {
    color: 'white',
  },
  cardHighlighted: {
    background: theme.palette.primary.dark,
  },
  checkBox: {
    background: 'transparent',
    borderRadius: 0,
    width: 30,
    height: 30,
  },
  list: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(4),
    },
  },
  link: {
    color: theme.palette.primary.main,
  },
}));

const CompanyTerms = () => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={classes.root}>
      <Section className={classes.pagePaddingTop}>
        <>
        <DescriptionCta
          title="Terms of Service"
          subtitle="Updated on 07.17.2021"
          align={'left'}
          titleProps={{
            className: classes.fontWeightBold,
            color: 'textPrimary',
          }}
          subtitleProps={{
            color: 'textSecondary',
          }}
        />
        <Divider className={classes.divider} />
        <Grid container spacing={isMd ? 4 : 2}>
          <Grid item xs={12} md={8}>
            <SectionHeader
              title="Summary"
              subtitle="Here’s an overview of what each service includes to make it easy to have an idea of what you will get:"
              align="left"
              titleProps={{
                className: classes.fontWeightBold,
                color: 'textPrimary',
              }}
              subtitleProps={{
                variant: 'body1',
                color: 'textPrimary',
              }}
            />
            <SectionHeader
              title="About the service"
              subtitle= "These terms and conditions (our Terms and Conditions) apply in respect of any work carried out by us for you, except to the extent that we otherwise agree with you in writing. These Terms and Conditions and our Quotation constitute the entire contract between Drywall Magana, and you, as customer for the work specified in the Quotation. ."
              align="left"
              titleProps={{
                className: classes.fontWeightBold,
                color: 'textPrimary',
              }}
              subtitleProps={{
                variant: 'body1',
                color: 'textPrimary',
              }}
              disableGutter
            />
            <List className={classes.list}>
              <ListItem disableGutters>
                <ListItemAvatar>
                  <Avatar
                    src="https://assets.maccarianagency.com/the-front/illustrations/check-icon-yellow.svg"
                    className={classes.checkBox}
                  />
                </ListItemAvatar>
                <Typography variant="body1" color="textPrimary">
                  '"CONTRACT” means the Quotation and these Terms and Conditions and any other document which sets out the terms upon which the painting work is provided to you.'
                        </Typography>
              </ListItem>
              <ListItem disableGutters>
                <ListItemAvatar>
                  <Avatar
                    src="https://assets.maccarianagency.com/the-front/illustrations/check-icon-yellow.svg"
                    className={classes.checkBox}
                  />
                </ListItemAvatar>
                <Typography variant="body1" color="textPrimary">
                  “CUSTOMER”, “YOU”, “YOUR” means the person contracting with us whether as principal or as agent for another{' '}
                  <a href="https://material-ui.com/store/" target="blank" className={classes.link}>

                  </a>
                  .
                </Typography>
              </ListItem>
              <ListItem disableGutters>
                <ListItemAvatar>
                  <Avatar
                    src="https://assets.maccarianagency.com/the-front/illustrations/check-icon-yellow.svg"
                    className={classes.checkBox}
                  />
                </ListItemAvatar>
                <Typography variant="body1" color="textPrimary">
                  “US”, “WE” “OUR” means Drywall Magana and includes its officers, employees, agents and subcontractors.
                </Typography>
              </ListItem>
              <ListItem disableGutters>
                <ListItemAvatar>
                  <Avatar
                    src="https://assets.maccarianagency.com/the-front/illustrations/check-icon-yellow.svg"
                    className={classes.checkBox}
                  />
                </ListItemAvatar>
                <Typography variant="body1" color="textPrimary">
                  “WORK” means the work we undertake as set out in the Quotation or variations.

                </Typography>
              </ListItem>
            </List>
            <SectionHeader
              title="Levels of drywall finish"
              subtitle="Drywall Magana grants you alternatives to make your quality and budget expectations match every time with my service provided, the most common levels of finish are those stated bellow, you can access a copy of the drywall finish official reference guide by clicking the link:"
              align="left"
              titleProps={{
                className: classes.fontWeightBold,
                color: 'textPrimary',
              }}
              subtitleProps={{
                variant: 'body1',
                color: 'textPrimary',
              }}
              disableGutter
            />
            {' '}
            <a href="https://material-ui.com/store/" className={classes.link}>
            https://www.pabcogypsum.com/sites/default/files/GA-214-17.pdf
            </a>{' '}
            <List className={classes.list}>
              <ListItem disableGutters>
                <ListItemAvatar>
                  <Avatar
                    src="https://assets.maccarianagency.com/the-front/illustrations/check-icon-yellow.svg"
                    className={classes.checkBox}
                  />
                </ListItemAvatar>
                <Typography variant="body1" color="textPrimary">
                  Level 2, level3: for areas where surface appearance is not of primary importance.
                </Typography>
              </ListItem>
              <ListItem disableGutters>
                <ListItemAvatar>
                  <Avatar
                    src="https://assets.maccarianagency.com/the-front/illustrations/check-icon-yellow.svg"
                    className={classes.checkBox}
                  />
                </ListItemAvatar>
                <Typography variant="body1" color="textPrimary">
                  Level 4, level 5: most effective methods to provide a uniform surface and minimize the possibility of joint photographing and of fasteners showing through the final decoration
                </Typography>
              </ListItem>
            </List>
            <SectionHeader
              title="Additional terms"
              subtitle="I will endeavour to meet the reasonable target completion date made known to us or agreed by us, and in the absence of any agreed target date will complete our work within a reasonable time. I will not be liable for liquidated or other damages for completion delays. The time for completion shall be extended for any event directly or indirectly causing delay including but not limited to: access, weather conditions, labour disputes, strikes, accidents, fire, changed work sequence, lack of information or approvals, or for any suspension of work. A variation of the drywall finishing work may be agreed between the parties. Variations include, without limitation: any change to the scope, quality or timing of the work, any circumstance that changes the cost of performing our work from that reasonably foreseeable at the time of the Quotation arising from a written instruction from you or your representative by way of a signed Work Order; or any other circumstance which is stated in these Terms and Conditions to be a variation arising from your acceptance of these Terms and Conditions. I will advise you as soon as practicable of any change to our Quotation price arising out of any variation. We may at our sole discretion on written notice withhold performance of any work that we reasonably consider to be a variation until we have received your written instruction, or where we have submitted a price for a variation, your agreement to that submitted price. Should it be necessary due to circumstances beyond my reasonable control to engage other resources or to do work outside ordinary working hours (8 am to 4pm), I will endeavour to meet your completion date but any extra cost so incurred will be a variation."
              align="left"
              titleProps={{
                className: classes.fontWeightBold,
                color: 'textPrimary',
              }}
              subtitleProps={{
                variant: 'body1',
                color: 'textPrimary',
              }}
              disableGutter
            />
            <List className={classes.list}>
              <ListItem disableGutters>
                <ListItemAvatar>
                  <Avatar
                    src="https://assets.maccarianagency.com/the-front/illustrations/check-icon-yellow.svg"
                    className={classes.checkBox}
                  />
                </ListItemAvatar>
                <Typography variant="body1" color="textPrimary">
                  "Drywall Magana" is a legal entity located at 787 jane street and is owned by a sole proprietor "Ulrik Magana".
                </Typography>
              </ListItem>
              <ListItem disableGutters>
                <ListItemAvatar>
                  <Avatar
                    src="https://assets.maccarianagency.com/the-front/illustrations/check-icon-yellow.svg"
                    className={classes.checkBox}
                  />
                </ListItemAvatar>
                <Typography variant="body1" color="textPrimary">
                  “QUOTATION” means any offer or tender or specifications listed in the Quotation rendered in writing to you{' '}
                  <a href="https://material-ui.com/store/" target="blank" className={classes.link}>

                  </a>
                  .
                </Typography>
              </ListItem>
              <ListItem disableGutters>
                <ListItemAvatar>
                  <Avatar
                    src="https://assets.maccarianagency.com/the-front/illustrations/check-icon-yellow.svg"
                    className={classes.checkBox}
                  />
                </ListItemAvatar>
                <Typography variant="body1" color="textPrimary">
                  “WRITING” means any representation of words, figures or symbols capable of being rendered in visible form.
                </Typography>
              </ListItem>

            </List>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid container spacing={isMd ? 4 : 2} direction="column">
              <Grid item xs={12}>
                <CardBase withShadow className={classes.cardHighlighted}>
                  <SectionHeader
                    title="Have a question?"
                    subtitle="Not sure exactly what we’re looking for or just want clarification? We’d be happy to chat with you and clear things up for you. Anytime!"
                    ctaGroup={[<Button variant="contained" href="/contact-page" target="blank" >Contact us</Button>]}
                    disableGutter
                    align="left"
                    titleProps={{
                      variant: 'subtitle1',
                      className: clsx(
                        classes.textWhite,
                        classes.fontWeightBold,
                      ),
                    }}
                    subtitleProps={{
                      variant: 'body2',
                      className: classes.textWhite,
                    }}
                  />
                </CardBase>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        </>
      </Section>
      <Divider />
    </div>
  );
};

export default CompanyTerms;
