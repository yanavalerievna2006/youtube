import { menuBut } from '../../data'

const NavButton = () => {
    return (
        menuBut.map(menuButObj => {
            return (
                <div className='App-nav-menu'> {menuButObj.name} </div>
            )
        })
    )
};
export default NavButton;