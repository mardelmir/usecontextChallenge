import dashboard from '../assets/dashboard.png'
import backend from '../assets/backend.png'
import challenge from '../assets/challenge.png'
const jobs = [
  {
    id: 1,
    name: 'Project Break: dashboard',
    image: dashboard,
    description: 'Dashboard con fondos, reloj con frases, alarmas, links favoritos, genereador de contraseñas y previsión meteorológica',
    url: 'https://github.com/mardelmir/project-break-dashboard',
  },
  {
    id: 2,
    name: 'Project Break: backend',
    image: backend,
    description: 'Tienda de ropa con login para user y admin, rutas protegidas, filtrado de productos por categoría y gestión de productos en base de datos',
    url: 'https://github.com/mardelmir/backend-project-break',
  },
  {
    id: 3,
    name: 'Challenge: useContext',
    image: challenge,
    description: 'React useContext',
    url: 'https://github.com/mardelmir/usecontextChallenge',
  },
];

export default jobs;