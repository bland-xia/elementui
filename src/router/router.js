export default [
    {
      path: '/',
      redirect: '/gg'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue'),
      meta: {
       requiredAuth: false,   
       title: '无双'			 
      }
    },
    {
      path: '/gg',
      name: 'gg',
      component: () => import('@/views/gg/index.vue'),
      meta: {
       requiredAuth: false,   
       title: '无双'			 
      }
    }
  ]