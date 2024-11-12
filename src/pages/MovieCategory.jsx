// 인기영화, 현재 상영중 영화, 개봉 예정 영화 결과를 보여주는 페이지
import '../styles/common.css'
import { Wrap, Main } from '../styles/StyledComponent'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

function MovieCategory({ category }) {
   return (
      <Wrap>
         <Menu />
         <Main $padding="30px 0">movieCategory: {category}</Main>
         <Footer />
      </Wrap>
   )
}

export default MovieCategory
