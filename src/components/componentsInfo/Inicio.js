import '../../assets/styles/Inicio.scss';
import '../../assets/styles/mediaqueries/InicioMediaQueries.scss';
import studentLogo from '../../assets/imgs/studentLogo.png';

const Inicio = (props)=>{
    return(
        <div className='inicio'>
            
            <div className='inicio-title'>
                <div className='inicio-img'>
                    <img src={studentLogo} alt=''/>
                </div>
                <div className='inicio-name'>
                    <h2>jose antonio de los santos</h2>
                    <span className='text-muted'>estudiante de piano</span>
                </div>
            </div>

            <div className='inicio-student-info'>
                <div>
                    <h2>Estudiante</h2>
                </div>
                <div className='inicio-student-info__list'>
                    <ul>
                        <li>Nombre: Bradigson Hernandez</li>
                        <li>Edad: 23</li>
                        <li>Insrumento: Piano</li>
                        <li>Nivel: preparatorio 1</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}


export default Inicio;