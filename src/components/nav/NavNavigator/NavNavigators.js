import { menuBut1 } from '../../data1'

const NavNavigator = () => {
    return (
        menuBut1.map(menuButObj => {
            return (
                <div className='App-nav-menu'> {menuButObj.name} </div>
            )
        })
    )
};
export default NavNavigators;