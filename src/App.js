import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import PunchClockIcon from '@mui/icons-material/PunchClock';

function App() {
  return (
    <Container maxWidth="sm">
        <Button variant="contained">My contained button</Button>
        <PunchClockIcon color="primary"/>
    </Container>
  );
}

export default App;
