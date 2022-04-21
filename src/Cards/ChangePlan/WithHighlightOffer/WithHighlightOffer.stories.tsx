import React from 'react';
import WithHighlightOffer from './WithHighlightOffer';

export default {
    title: 'Cards/ChangePlan/WithHighlightOffer',
    component: WithHighlightOffer,
};

export const WithHighlightOfferContainer = (args: { children: React.ReactNode }) => <WithHighlightOffer {...args} />;

WithHighlightOfferContainer.args = {
    children: <div>My Super Children</ div >,
};
