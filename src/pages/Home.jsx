// 메인화면
import '../styles/common.css'
import { Wrap, Main } from '../styles/StyledComponent'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

function Home() {
   return (
      <Wrap>
         <Menu />
         <Main>home</Main>
         <Footer />
      </Wrap>
   )
}

export default Home
