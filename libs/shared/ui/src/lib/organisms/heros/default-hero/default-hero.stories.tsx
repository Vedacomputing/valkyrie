import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DefaultHero } from './default-hero';

const Story: ComponentMeta<typeof DefaultHero> = {
  component: DefaultHero,
  title: 'DefaultHero',
};
export default Story;

const Template: ComponentStory<typeof DefaultHero> = (args) => (
  <DefaultHero {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
