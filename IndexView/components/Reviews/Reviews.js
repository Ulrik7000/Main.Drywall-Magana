import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Card, CardContent, List, ListItem, ListItemText, makeStyles } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import { Box, colors } from '@material-ui/core';
import { CardReview } from 'components/organisms';
import { IconAlternate } from "components/molecules";

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(2),
  },
  fontWeight900: {
    fontWeight: 900,
  },
  disablePadding: {
    paddingTop: 0,
    paddingBottom: 0,
  },
}));



export default function Example() {
  return (
    <div>
    <div>
    <SectionHeader
      id="reviews"
      title={<>My private clients have had fantastic experiences hiring my services.<br />Here’s what they have to say.</>}
      titleProps={{
        variant: 'h4',
      }}
      align="left"
    />
    </div>

    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">

    <a target="_blank" href='https://www.google.com/search?q=drywall+magana&oq=dry&aqs=chrome.0.69i59l3j69i57j0i67j69i61l2j69i60.1022j0j7&sourceid=chrome&ie=UTF-8#lrd=0x882b3709f6801567:0x61028bbce4892394,1,,,'>
    <img src='images/grev.jpg' title='Google Reviews'
    alt='Google Reviews' />
    </a>

    <a target="_blank" href='https://goo.gl/maps/UKzyMTpSYHmCvdaR6'>
    <CardReview
      liftUp
      withShadow
      icon={<IconAlternate fontIconClass="fas fa-quote-right" size="medium" color={colors.indigo} />}
      text="Ulrik was contracted to do taping and mudding for our entire house- 3 floors. He was able to answer questions all my questions and provided us with a competitive quote. He was always on time and worked efficiently and neatly. He did walls, ceilings, bulk heads, vaulted ceiling’s etc. We enjoyed having him on site and the work he did. He was hard working and professional and we will definitely hope to use him again in the future.."
      authorName="Julie Lewis"
      authorTitle="Etobicoke"
      authorPhoto={{ src: '', srcSet: '' }}
      />
      </a>

      <a target="_blank" href='https://www.google.com/maps/contrib/110839046538004182777/reviews/@43.7353753,-79.63237,16z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en-CA'>
      <CardReview
        liftUp
        withShadow
        icon={<IconAlternate fontIconClass="fas fa-quote-right" size="medium" color={colors.indigo} />}
        text="We had very good experience with Ulrik. The job was done quickly, priced reasonably and we are overall very happy with the quality. Will definitely recommend to friends and family!"
        authorName="Bran Zeko"
        authorTitle="Missisauga"
        authorPhoto={{ src: '', srcSet: '' }}
        />
        </a>

    <a target="_blank" href='https://homestars.com/companies/2928674-drywall-magana'>
    <img src='https://homestars.com/toolkit/seals/read-our-reviews/web/100x60.png' title='HomeStars Review Our Work'
    alt='HomeStars Review Our Work' />
    </a>


    <a target="_blank" href='https://homestars.com/companies/2928674-drywall-magana/reviews/837952'>
      <CardReview
        liftUp
        withShadow
        icon={<IconAlternate fontIconClass="fas fa-quote-right" size="medium" color={colors.indigo} />}
        text="Ulrik, did a fantastic job with the taping, mudding and sanding. He was constantly asking us to take a look at his job to make sure we were happy. He was quick and tidy. I will be calling him very shortly for our next project as we are renovating room by room. He was able to give us a quote by sending him a picture. He stuck to his quote. We are very happy."
        authorName="Maria"
        authorTitle="Beaches Toronto"
        authorPhoto={{ src: '', srcSet: '' }}
      />
      </a>

      <a target="_blank" href='https://homestars.com/companies/2928674-drywall-magana/reviews/832135'>
      <CardReview
        liftUp
        withShadow
        icon={<IconAlternate fontIconClass="fas fa-quote-right" size="medium" color={colors.indigo} />}
        text="Ulrik responded quickly and completed the mudding and taping work along with completion of a skim coat on a plaster repair patch very efficiently at a reasonably cost."
        authorName="Paul"
        authorTitle="Toronto"
        authorPhoto={{ src: '', srcSet: '' }}
      />
      </a>

      <a target="_blank" href='https://homestars.com/companies/2928674-drywall-magana/reviews/828175'>
      <CardReview
        liftUp
        withShadow
        icon={<IconAlternate fontIconClass="fas fa-quote-right" size="medium" color={colors.indigo} />}
        text="Excellent service, kept in contact through the entire process, I was very happy with the results, highly recommend him."
        authorName="Axel"
        authorTitle="Toronto"
        authorPhoto={{ src: '', srcSet: '' }}
      />
      </a>

      <a target="_blank" href='https://homestars.com/companies/2928674-drywall-magana/reviews/826470'>
      <CardReview
        liftUp
        withShadow
        icon={<IconAlternate fontIconClass="fas fa-quote-right" size="medium" color={colors.indigo} />}
        text="He did this proyect among other sections in the same jobsite downtown in Toronto, he finished with a better quality than I would expect and on time. I'd recommend this taper for proyects regarding renovations or new commercial, residential or offices since he delivers with the best ratio quality/price"
        authorName="Ivan Aguilera"
        authorTitle="Downtown Toronto"
        authorPhoto={{ src: '', srcSet: '' }}
      />
      </a>

      </Box>
        </div>
  );
}
