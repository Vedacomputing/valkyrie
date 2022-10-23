import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DefaultFooter } from './default-footer';

const Story: ComponentMeta<typeof DefaultFooter> = {
  component: DefaultFooter,
  title: 'DefaultFooter',
};
export default Story;

const Template: ComponentStory<typeof DefaultFooter> = (args) => (
  <DefaultFooter {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
