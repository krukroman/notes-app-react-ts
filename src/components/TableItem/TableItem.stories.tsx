import { ComponentStory, ComponentMeta } from '@storybook/react';
import TableItem from './TableItem';

const Stories = {
  title: 'Table Item',
  component: TableItem
};

export default Stories as ComponentMeta<typeof TableItem>;

const Template: ComponentStory<typeof TableItem> = args => (
  <TableItem {...args} />
);

export const SummaryHeader = Template.bind({});

SummaryHeader.args = {
  summaryHeader: true
};

export const SummaryItem = Template.bind({});

SummaryItem.args = {
  summary: {
    category: 'Idea',
    active: 3,
    archived: 1
  }
};
