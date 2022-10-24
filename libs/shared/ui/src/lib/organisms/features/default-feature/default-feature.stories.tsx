import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DefaultFeature } from './default-feature';

const Story: ComponentMeta<typeof DefaultFeature> = {
  component: DefaultFeature,
  title: 'DefaultFeature',
};
export default Story;

const Template: ComponentStory<typeof DefaultFeature> = (args) => (
  <DefaultFeature {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
