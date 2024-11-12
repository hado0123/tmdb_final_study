// 메인화면
import '../styles/common.css'
import { Wrap, Main } from '../styles/StyledComponent'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import PosterSlider from '../components/slider/PosterSlider'

function Home() {
   return (
      <Wrap>
         <Menu />
         <Main>
            <Banner />
            <div className="common_margin_tb">
               <div></div>
               <PosterSlider />
            </div>
         </Main>
         <Footer />
      </Wrap>
   )
}

export default Home
