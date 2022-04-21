import React, { useState } from 'react';
import Checkbox from '.';

export default {
    title: 'Controls/Checkbox',
    component: Checkbox,
};

export const CheckboxIcon = (args) => <Checkbox {...args}/>;


CheckboxIcon.args = {
    labelText: 'Label text',
    id: 'check-1',
  };
  
  const description = `
  You can customize the content by using \`BannerNavigation\`.
  `;
  
  CheckboxIcon.story = {
    parameters: {
      docs: {
        storyDescription: description,
      },
    },
  };

  export const CheckedInput = (args) => {
    const [isChecked, setChecked] = useState(true);
  
    return (
      <Checkbox
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

  
