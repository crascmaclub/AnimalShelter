import '../styles/globals.css'
import Layout from '../src/components/layout/layout'
import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider
} from "@mui/material/styles";
const theme = createTheme();

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StyledEngineProvider>
    </ThemeProvider>
  )
}

export default MyApp
