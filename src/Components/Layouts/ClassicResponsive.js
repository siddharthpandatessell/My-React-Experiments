import Header from '../Sections/Header'
import Footer from "../Sections/Footer";
import Content from "../Sections/Content";
import Sidebar from "../Sections/SideBar";
import Box from '@mui/material/Box'

function ClassicResponsive() {
    return ( 
    <div className = "App">
        <Header content='Shimotakatani-kun'></Header>
        <Box display="flex" flexDirection="row" width="100%" alignItems="center">
        <Sidebar></Sidebar>
        <Content></Content>
        </Box>
        <Footer content='Shimotakatani-kun'></Footer>
        </div>
    );
}

export default ClassicResponsive;