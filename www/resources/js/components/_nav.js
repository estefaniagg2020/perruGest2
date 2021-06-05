export default [
  {
    _name: "CSidebarNav",
    _children: [
      {
        _name: "CSidebarNavItem",
        name: "Dashboard",
        to: "/home",
        icon: "cil-speedometer"
        // badge: {
        //   color: 'primary',
        //   text: ''
        // }
      },
      // {
      //   _name: 'CSidebarNavItem',
      //   name: 'Usuarios',
      //   to: '/users',
      //   icon: 'cil-user'
      // },
      // {
      //   _name: 'CSidebarNavItem',
      //   name: 'Equipos',
      //   to: '/teams',
      //   icon: 'cil-people'
      // },
      // {
      //   _name: 'CSidebarNavItem',
      //   name: 'Proyectos',
      //   to: '/projects',
      //   icon: 'cil-star'
      // },
      // {
      //   _name: 'CSidebarNavItem',
      //   name: 'Tareas',
      //   to: '/tasks',
      //   icon: 'cil-layers'
      // },
      {
        _name: "CSidebarNavTitle",
        _children: ["Mi equipo"]
      },
      {
        _name: "CSidebarNavItem",
        name: "Presupuestos",
        to: "/budgets",
        icon: "cil-star"
      }
      // {
      //   _name: 'CSidebarNavTitle',
      //   _children: ['Jira Cloud']
      // },
      // {
      //   _name: 'CSidebarNavItem',
      //   name: 'Proyectos',
      //   to: '/jira/projects',
      //   icon: 'cil-star'
      // },
      // {
      //   _name: 'CSidebarNavTitle',
      //   _children: ['Teamwork']
      // },
      // {
      //   _name: 'CSidebarNavItem',
      //   name: 'Proyectos',
      //   to: '/teamwork/projects',
      //   icon: 'cil-star'
      // },
    ]
  }
];
