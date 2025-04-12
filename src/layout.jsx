import Footer from "./components/Footer"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #1e3c72;
`

const Main = styled.main`
  flex: 1;
`

export default function Layout({ children }) {
  return (
    <Wrapper>
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  )
}