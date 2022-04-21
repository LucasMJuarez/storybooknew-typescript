import React from 'react';
import Banner from '.';

export default {
    title: 'Notifications/Banner',
    component: Banner,
};

export const BannerFull = () => (
    <Banner
        title='This is the title'
        description='This is the description. Max 3 lines.'
        buttons={{
            primaryAction: {text: 'Primary action', onClick: () => alert('PrimaryAction')},
            secondaryAction: {text: 'Secondary Action', onClick: () => alert('Secondary Action')},
        }}
    />
);

export const BannerPermanent = () => (
    <Banner
        title='This is the title'
        description='This is the description. Max 3 lines.'
        permanent={true}
        buttons={{
            primaryAction: {text: 'Primary action', onClick: () => alert('PrimaryAction')},
            secondaryAction: {text: 'Secondary Action', onClick: () => alert('Secondary Action')},
        }}
    />
);

export const BannerFullWithoutButtons = () => (
    <Banner title='This is the title' description='This is the description. Max 3 lines.' />
);

export const BannerPermanentWithoutButtons = () => (
    <Banner title='This is the title' description='This is the description. Max 3 lines.' permanent={true} />
);

export const BannerFullWithoutButtonsAndTitle = () => <Banner description='This is the description. Max 3 lines.' />;

export const BannerPermanentWithoutButtonsAndTitle = () => (
    <Banner description='This is the description. Max 3 lines.' permanent={true} />
);
