import { CssBaseline, ThemeProvider } from '@mui/material'
import { ProSidebarProvider } from 'react-pro-sidebar'
import './App.css'
import { ColorModeContext , useMode } from './theme'
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar'

import { Routes,Route } from 'react-router-dom'
function App() {
  const[theme,colorMode]=useMode();
  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
            <div className="app">
              <Sidebar/>
              <main className='content'>
                <Topbar/>
                <Routes>
                  {/* <Route path="/" element={<Dashboard/>}/> */}           
                </Routes>
                </main>
            </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  )
}

export default App
