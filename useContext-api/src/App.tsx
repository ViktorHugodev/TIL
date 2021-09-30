import { Content } from './components/Content';
import { SideBar } from './components/SideBar';
import { MoviesProvider } from './Hooks/useMovies';
import './styles/content.scss';
import './styles/global.scss';
import './styles/sidebar.scss';

export function App() {

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <MoviesProvider>
        <SideBar/>
        <Content/>
        
      </MoviesProvider>
      
    </div>
  )
}