// import Header from '../Sections/Header'
import Footer from "../Sections/Footer";
import Content from "../Sections/Content";
import Sidebar from "../Sections/SideBar";
import Box from '@mui/material/Box'
import Navbar from '../Elements/Navigation/NavigationBar/Classic/';

function ClassicResponsive(props) {
    const {page} = props;
    return ( 
    <div className = "App">
        <Navbar />
        <Box display="flex" flexDirection="row" width="100%" alignItems="center">
        <Sidebar></Sidebar>
        <Content page={page}></Content>
        </Box>
        <Footer content='Shimotakatani-kun'></Footer>
        </div>
    );
}

export default ClassicResponsive;