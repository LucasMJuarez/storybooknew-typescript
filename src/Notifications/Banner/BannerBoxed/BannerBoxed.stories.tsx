import React from 'react';
import Banner from './BannerBoxed';

export default{
    title: 'Notifications/Banner/BannerBoxed',
    component: Banner
}

export const BannerOneButton = (args) =>( <Banner {...args}/>)

BannerOneButton.argType={
    title:{control: 'text'},
    buttons:{control: {
        primaryAction:{
           text:{control: 'text'},
        },
        secondaryAction:{
            text:{control: 'text'},
         }
    }}
}
BannerOneButton.args={
    title:'This is the title',
    buttons:{
        primaryAction: {text: 'Primary action', onClick: () => alert('PrimaryAction')},
        secondaryAction: {text: '', onClick: () => {}},
    }
}
export const BannerTwoButton = (args) =>( <Banner {...args}/>)

BannerTwoButton.argType={
    title:{control: 'text'},
    buttons:{control: {
        primaryAction:{
           text:{control: 'text'},
        },
        secondaryAction:{
            text:{control: 'text'},
         }
    }}
}
BannerTwoButton.args={
    title:'This is the title',
    buttons:{
        primaryAction: {text: 'Secondary action', onClick: () => alert('SecondaryAction')},
        secondaryAction: {text: 'Primary action', onClick: () => alert('PrimaryAction')},
    }
}