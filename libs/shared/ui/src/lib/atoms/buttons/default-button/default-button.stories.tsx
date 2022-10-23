import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DefaultButton } from './default-button';

const Story: ComponentMeta<typeof DefaultButton> = {
  component: DefaultButton,
  title: 'DefaultButton',
};
export default Story;

const Template: ComponentStory<typeof DefaultButton> = (args) => (
  <DefaultButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
