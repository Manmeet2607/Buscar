import {Stack} from '@mui/material';
import {Link} from 'react-router-dom';
import logoi from '../images/logo.png';
import {SearchBar} from './';

const Navbar = () => (
  <Stack 
    direction="row" 
    alignItems="center" 
    p={2} 
    sx={{ position:  'sticky', background: '#000', top: 0, justifyContent: "space-between" }}
  >
    <Link to="/" style={{ display: 'flex', alignItems: 'center'}}>
      <img src={logoi} alt="logo" height={45} sx={{color:'purple'}} />
    </Link>
    <SearchBar/>
  </Stack>
)

export default Navbar;
