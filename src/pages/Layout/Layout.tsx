import Top from '@/pages/Header'
import Left from '@/pages/Left'
import Main from '@/pages/Main'
import './layout.scss'
const Layout = () => {
    return (
        <div className='container'>
            <Left></Left>
            <div className='top-main'>
                <Top />
                <Main />
            </div>
        </div>
    )
}
export default Layout