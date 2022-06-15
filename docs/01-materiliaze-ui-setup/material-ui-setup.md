# How to setup materialize UI for a react project

### Update npx create-react-app command if needed
npm uninstall -g create-react-app
npm install -g create-react-app
https://github.com/facebook/create-react-app/issues/11816

### Create react project
npx create-react-app my-material-ui-project

### Install material UI dependencies
npm install @mui/material @emotion/react @emotion/styled

### Typography - Have to add font style
npm install @fontsource/roboto

Add to your entry-point (App.js):

import '@fontsource/roboto/300.css';  
import '@fontsource/roboto/400.css';   
import '@fontsource/roboto/500.css';  
import '@fontsource/roboto/700.css';  


### Material UI icons:
npm install --save  @mui/icons-material


### Start application 
npm start

### Verify material UI installation
Open App.js and add replace existing content with this to test that Materilized UI components shows as expected.
```
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
```


https://fonts.google.com/icons?selected=Material+Icons
