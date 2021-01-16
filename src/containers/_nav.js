export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavItem',
        name: 'Dashboard',
        to: '/dashboard',
        icon: 'cil-speedometer'
      },


      {
        _name: 'CSidebarNavTitle',
        _children: ['Pelayanan']
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Resepsionis',
        to: '/resepsionis',
        icon: 'cil-laptop',
        badge: {
          color: 'warning',
          text: '10'
        }
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Rawat Jalan',
        route: '/master/inventori',
        icon: 'cil-laptop',
        items: [
          {
            name: 'Asesmen',
            to: '/master/inventori/gudang'
          },
          {
            name: 'Riwayat',
            to: '/master/inventori/kategori'
          }
        ]
      },


      {
        _name: 'CSidebarNavTitle',
        _children: ['Master']
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Inventori',
        route: '/master/inventori',
        icon: 'cil-laptop',
        items: [
          {
            name: 'Gudang',
            to: '/master/inventori/gudang'
          },
          {
            name: 'Kategori',
            to: '/master/inventori/kategori'
          },
          {
            name: 'Satuan',
            to: '/master/inventori/satuan'
          },
          {
            name: 'Item',
            to: '/master/inventori/item'
          }
        ]
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Instalasi',
        route: '/master/inventori',
        icon: 'cil-laptop',
        items: [
          {
            name: 'Poli',
            to: '/master/poli'
          },
          {
            name: 'Tindakan',
            to: '/master/tindakan'
          },
          {
            name: 'Laboratorium',
            to: '/master/laboratorium'
          },
          {
            name: 'Radiologi',
            to: '/master/radiologi'
          }
        ]
      }
    ]
  }
]