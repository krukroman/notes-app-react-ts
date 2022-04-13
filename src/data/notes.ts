import INote from '../interfaces/Note.interface';

const NOTES: INote[] = [
  {
    id: '1',
    name: 'Lorem ipsum dolor sit amet.',
    created: new Date().toISOString(),
    category: 'Idea',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit 05-19-2022. Cum quisquam nesciunt animi ab eos nihil',
    archived: false
  },
  {
    id: '2',
    name: 'Lorem ipsum',
    created: new Date().toISOString(),
    category: 'Idea',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum quisquam nesciunt animi ab eos nihil',
    archived: false
  },
  {
    id: '3',
    name: 'Lorem ipsum dolor',
    created: new Date().toISOString(),
    category: 'Quote',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum quisquam nesciunt animi ab eos nihil',
    archived: false
  },
  {
    id: '4',
    name: 'Lorem ipsum dolor sit',
    created: new Date().toISOString(),
    category: 'Random Thought',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum quisquam nesciunt animi ab eos nihil',
    archived: false
  },
  {
    id: '5',
    name: 'Cum quisquam nesciunt',
    created: new Date().toISOString(),
    category: 'Task',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit 04/09/22. Cum quisquam nesciunt animi ab eos nihil 04/18/22',
    archived: false
  },
  {
    id: '6',
    name: ' Cum quisquam nesciunt animi ab eos',
    created: new Date().toISOString(),
    category: 'Task',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum quisquam nesciunt animi ab eos nihil',
    archived: false
  },
  {
    id: '7',
    name: 'Cum quisquam nesciunt animi ab eos nihil',
    created: new Date().toISOString(),
    category: 'Random Thought',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum quisquam nesciunt animi ab eos nihil',
    archived: false
  }
];

export default NOTES;
