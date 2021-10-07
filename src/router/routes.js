import NotesPage from '../pages/NotesPage/NotesPage';
import OverviewPage from '../pages/OverviewPage/OverviewPage';
import TodosPage from '../pages/TodosPage/TodosPage';

export const publicRoutes = [
  { path: '/overview', component: OverviewPage, exact: true, link: 'Overview' },
  { path: '/notes', component: NotesPage, exact: true, link: 'Notes' },
  { path: '/todos', component: TodosPage, exact: true, link: 'Todos' },
];
