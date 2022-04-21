import React, { useState } from 'react';
import CheckboxBlue from '.';

export default {
    title: 'Controls/CheckboxBlue',
    component: CheckboxBlue,
};

export const CheckboxBlueIcon = (args) => <CheckboxBlue {...args}/>;


CheckboxBlueIcon.args = {
    labelText: 'Label text',
    id: 'check-1',
  };
  
  const description = `
  You can customize the content by using \`BannerNavigation\`.
  `;
  
  CheckboxBlueIcon.story = {
    parameters: {
      docs: {
        storyDescription: description,
      },
    },
  };

  export const CheckedInput = (args) => {
    const [isChecked, setChecked] = useState(true);
  
    return (
      <CheckboxBlue
        {...args}
        onChange={() => setChecked(!isChecked)}
        checked={isChecked}
      />
    );
  };
  
  CheckedInput.args = {
    labelText: 'Checked Input',
    id: 'check-2',
  };
  
  const check = `Specify whether the underlying input should be checked.`;
  
  CheckedInput.story = {
    parameters: {
      docs: {
        storyDescription: check,
      },
    },
  };

  
