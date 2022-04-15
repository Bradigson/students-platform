import '../../assets/styles/Calificacion.scss';
import '../../assets/styles/mediaqueries/CalificacionMediaQueries.scss';

const Calificaciones = (props)=>{
    return(
       <div className="calificacion">
            <div className="calificacion__header pb-1">
                <h2>Calificacion</h2>
                <span className='text-muted'>Bradigson Hernandez</span>
            </div>



            <div className='calificacion__score'>
                <div className='calificacion-score__point'>
                    <h2>20</h2>
                </div>
                <div className='calificacion-score__comment mt-4'>
                    <h3>Excelente</h3>
                </div>

            </div>
       </div>
    )
}


export default Calificaciones;