// JSX = JavaScript XML
// TSX = TypeScript XML
import nlwUnitedIcon from '../assets/nlw-unite-icon.svg'
import { NavLink } from './nav-link'
export function Header() {
    return (
        <div className='flex items-center gap-5 py-2'>
            <img src={nlwUnitedIcon} />

            <nav className='flex gap-5 items-center'>
                <NavLink href="/eventos">Eventos</NavLink>
                <NavLink href="/participantes">Participantes</NavLink>
                <NavLink href="/equipw">Equipe</NavLink>
            </nav>
        </div>
    )
}