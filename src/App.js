import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from './scenes/global/Topbar';

function App() {
  const [themse, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
          <div className="app">
            <main className="contenct">
              <Topbar/>
            </main>
          </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
export default App;
