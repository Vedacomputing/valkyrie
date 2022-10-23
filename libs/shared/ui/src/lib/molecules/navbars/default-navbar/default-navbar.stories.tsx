import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DefaultNavbar } from './default-navbar';

const Story: ComponentMeta<typeof DefaultNavbar> = {
  component: DefaultNavbar,
  title: 'DefaultNavbar',
};
export default Story;

const Template: ComponentStory<typeof DefaultNavbar> = (args) => (
  <DefaultNavbar {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
