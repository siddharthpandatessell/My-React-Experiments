import Navbar from '../../Elements/Navigation/NavigationBar/Classic';
import './grid.css';

function index() {
    return ( 
    <div className = "App">
        <Navbar />
<aside>
  Sidebar
</aside>
<main>
  Main
</main>
<footer>
  Footer
</footer>
        </div>
    );
}

export default index;