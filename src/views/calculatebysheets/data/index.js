import { colors } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { Grid, Avatar, Typography } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { DescriptionListIcon } from 'components/organisms';

export const partners = [
  {
    name: 'Airbnb',
    logo: 'https://assets.maccarianagency.com/the-front/logos/airbnb.svg',
  },
  {
    name: 'Coinbase',
    logo: 'https://assets.maccarianagency.com/the-front/logos/coinbase.svg',
  },
  {
    name: 'Dribbble',
    logo: 'https://assets.maccarianagency.com/the-front/logos/dribbble.svg',
  },
  {
    name: 'Instagram',
    logo: 'https://assets.maccarianagency.com/the-front/logos/instagram.svg',
  },
  {
    name: 'Netflix',
    logo: 'https://assets.maccarianagency.com/the-front/logos/netflix.svg',
  },
  {
    name: 'Pinterest',
    logo: 'https://assets.maccarianagency.com/the-front/logos/pinterest.svg',
  },
];

export const features = [
  {
    label: '',
    title: 'Drywall sheets installed on your project',
    description:
      'Slide the number selector to the number that matches the closest amount of drywall sheets that were used on your project',
    illustration: '',
  },

  {
    label: 'FULLY RESPONSIVE',
    title: 'Mobile Compatible Platform',
    description:
      'Introduce your brand-new mobile friendly website to your customers. Seamlessly integrates with WiFi hardware and marketing automation software.',
    illustration: 'https://assets.maccarianagency.com/the-front/illustrations/mobiles.svg',
  },
  {
    label: 'CLIENT PORTAL ACCESS',
    title: 'Simple Customer Dashboards',
    description:
      'Give sub-users access to a simplified dashboard with limited permission levels to offer remote management and real-time analytics.',
    illustration: 'https://assets.maccarianagency.com/the-front/illustrations/dashboard.svg',
  },
  {
    label: 'GO SOCIAL',
    title: 'Integrate With Social Media Platforms',
    description:
      'Build, customize any website your customers want and integrate in your socila media platforms.',
    illustration: 'https://assets.maccarianagency.com/the-front/illustrations/social-website.svg',
  },
];

export const browsers = [
  {
    name: 'Freedom Mobile',
    logo: 'images/freedomlogo.jpg',
    title: '3 day drywall finish renovation on their Thornhill unit.',
      },
  {
    name: 'Curiosa Society',
    logo: 'images/curiosaSlogo.jpeg',
    title:
      'Ceiling skimming repair on their Palmerston-Little Italy location.',
  },
  {
    name: 'Zauq restaurant',
    logo: 'images/zauqlogo1.png',
    title:
      'Full drywall finish renovation on their fine dining halal restaurant, at Missisauga.',
  },
  {
    name: 'King Square shopping Centre',
    logo: 'images/ks_logo.png',
    title:
      '2 custom offices drywall finish colaboration.',
  },
  {
    name: "Jimmy's coffe",
    logo: 'images/jimmysClogo.png',
    title:
      'Level 4 drywall finish repair on ground floor main hall at their riverside downtown Toronto location.',
  },
  {
    name: 'Dymon storage',
    logo: 'images/dymonlogo.png',
    title:
      'Extensive drywall finish colaboration on multiple sections on their office spaces at their etobicoke location.',
    },
];

export const advantages = [
  {
    title: 'Cost effective',
    icon: 'fas fa-money-bill-wave',
    color: colors.indigo,
  },
  {
    title: 'Competitive Finish Quality',
    icon: 'fas fa-trophy',
    color: colors.orange,
  },
  {
    title: 'Client Focused',
    icon: 'fas fa-heart',
    color: colors.red,
  },
  {
    title: 'Automated Finishing System',
    icon: 'fas fa-cog',
    color: colors.purple,
  },
  {
    title: 'Finish with high quality tools',
    icon: 'fas fa-plug',
    color: colors.blue,
  },
  {
    title: 'Strict system for uniform results',
    icon: 'fas fa-lock',
    color: colors.green,
  },
  {
    title: 'Customized budget alternatives',
    icon: 'fas fa-hand-holding-heart',
    color: colors.pink,
  },
  {
    title: 'Options for extra tasks on site',
    icon: 'fas fa-plus',
    color: colors.deepOrange,
  },
];

export const webinars = [
  {
    title: 'Manage Service Providers',
    description:
      'Add new recurring revenue streams to existing managed WiFi networks.',
    authorPhoto: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/veronica-adams.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/veronica-adams@2x.jpg 2x',
    },
    authorName: 'Veronica Adams',
  },
  {
    title: 'Value Added Resellers',
    description:
      'Add Social WiFi Marketing to your software bundles and suite of services.',
    authorPhoto: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/akachi-luccini.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/akachi-luccini@2x.jpg 2x',
    },
    authorName: 'Akachi Luccini',
  },
  {
    title: 'Digital Services Agencies',
    description:
      'Help local business owners generate leads and build customer loyalty.',
    authorPhoto: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/jack-smith.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/jack-smith@2x.jpg 2x',
    },
    authorName: 'Jack Smith',
  },
  {
    title: 'Internet Service Providers',
    description:
      'Upsell Social WiFi as a Service to business Internet subscribers.',
    authorPhoto: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/kate-segelson.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/kate-segelson@2x.jpg 2x',
    },
    authorName: 'Kate Segelson',
  },
  {
    title: 'SaaS Aplications',
    description:
      'A lightweight Social WiFi API solution integrate deep into existing platforms.',
    authorPhoto: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/alex-johnson.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/alex-johnson@2x.jpg 2x',
    },
    authorName: 'Alex Johnson',
  },
  {
    title: 'Advertising Network',
    description:
      'Generate affiliate commissions by referring new reseller partners to us.',
    authorPhoto: {
      src: 'https://assets.maccarianagency.com/the-front/photos/people/valeria-kogan.jpg',
      srcSet: 'https://assets.maccarianagency.com/the-front/photos/people/valeria-kogan@2x.jpg 2x',
    },
    authorName: 'Valeria Kogan',
  },
];

export const platforms = [
  {
    logo: 'https://assets.maccarianagency.com/the-front/logos/slack.svg',
    name: 'Slack',
  },
  {
    logo: 'https://assets.maccarianagency.com/the-front/logos/mailchimp.svg',
    name: 'Mailchimp',
  },
  {
    logo: 'https://assets.maccarianagency.com/the-front/logos/dropbox.svg',
    name: 'Dropbox',
  },
  {
    logo: 'https://assets.maccarianagency.com/the-front/logos/google-drive.svg',
    name: 'Google Drive',
  },
  {
    logo: 'https://assets.maccarianagency.com/the-front/logos/google-ad-manager.svg',
    name: 'Google Ad Manager',
  },
  {
    logo: 'https://assets.maccarianagency.com/the-front/logos/atlassian.svg',
    name: 'Atlassian',
  },
];
