import Frame from '@containers/frame';
import NotFound from '@containers/404';
import HomePage from '@components/homePage'
import Blog from './Blog';

export default {
    path: '/',

    component: Frame,

    indexRoute: {
        component: HomePage
    },

    childRoutes: [
        Blog,
        {path: '*', component: NotFound}
    ]
}