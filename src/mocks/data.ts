export interface INoteItem {
  id: number;
  date: Date;
  title: string;
  short: string;
  description: string;
}
export const defaultNoteList: INoteItem[] = [
  {
    id: 1,
    title: 'Lorem',
    short: 'Welist',
    date: new Date(Date.now()),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 2,
    title: 'Lorem',
    short: 'Welist',
    date: new Date(Date.now()),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 3,
    title: 'Lorem',
    short: 'Welist',
    date: new Date(Date.now()),
    description: 'Lorem Lorem Lorem',
  },
  {
    id: 4,
    title: 'Lorem',
    short: 'Welist',
    date: new Date(Date.now()),
    description: 'Lorem Lorem Lorem',
  },
  {
    id: 5,
    title: 'Lorem',
    short: 'Welist',
    date: new Date(Date.now()),
    description: 'Lorem Lorem Lorem',
  },
  {
    id: 6,
    title: 'Lorem',
    short: 'Welist',
    date: new Date(Date.now()),
    description: 'Lorem Lorem Lorem',
  },
];
