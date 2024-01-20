import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur, at, '
    + 'autem beatae dolore dolorum ducimus hic id, inventore iure laboriosam odio odit '
    + 'pariatur placeat quae sed sit vitae voluptatum?',
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur, at, '
    + 'autem beatae dolore dolorum ducimus hic id, inventore iure laboriosam odio odit '
    + 'pariatur placeat quae sed sit vitae voluptatum?',
};
Dark.decorators = [ThemeDecorator(Theme.Dark)];
