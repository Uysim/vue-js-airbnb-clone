import pages from '../pages'

const routes = [
  { path: '/', name: 'HomePage', component: pages.HomePage },
  { path: '/other-page', name: 'OtherPage', component: pages.OtherPage },
  {
    path: '/login',
    meta: { layout: 'blank' },
    name: 'LoginPage',
    component: pages.LoginPage
  }
]

export default routes;
