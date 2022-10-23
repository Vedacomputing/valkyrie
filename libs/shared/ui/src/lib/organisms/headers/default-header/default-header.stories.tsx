import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DefaultHeader } from './default-header';

const Story: ComponentMeta<typeof DefaultHeader> = {
  component: DefaultHeader,
  title: 'DefaultHeader',
};
export default Story;

const Template: ComponentStory<typeof DefaultHeader> = (args) => (
  <DefaultHeader {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
