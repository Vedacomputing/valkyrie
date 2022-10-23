import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DefaultSidebar } from './default-sidebar';

const Story: ComponentMeta<typeof DefaultSidebar> = {
  component: DefaultSidebar,
  title: 'DefaultSidebar',
};
export default Story;

const Template: ComponentStory<typeof DefaultSidebar> = (args) => (
  <DefaultSidebar {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
