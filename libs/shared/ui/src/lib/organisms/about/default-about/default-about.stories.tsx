import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DefaultAbout } from './default-about';

const Story: ComponentMeta<typeof DefaultAbout> = {
  component: DefaultAbout,
  title: 'DefaultAbout',
};
export default Story;

const Template: ComponentStory<typeof DefaultAbout> = (args) => (
  <DefaultAbout {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
