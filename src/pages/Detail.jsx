// 영화 상세 정보 페이지
import '../styles/common.css'
import { Wrap, Main } from '../styles/StyledComponent'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import MovieDetail from '../components/MovieDetail'

function Detail() {
   return (
      <Wrap>
         <Menu />
         <Main $padding="30px 0">
            <MovieDetail />
         </Main>
         <Footer />
      </Wrap>
   )
}

export default Detail
