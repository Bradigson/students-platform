import '../../assets/styles/Practica.scss';
import '../../assets/styles/mediaqueries/PracticaMediaQueries.scss';

const Practicas = (props)=>{
    return(
        <div className="practica">
            <div className="practica__header">
                <h1>Practicas</h1>
                <span className='text-muted'>Bradigson Hernandez</span>
            </div>

            <div className='practicas__descripcion'>
                <div className="alert alert-primary d-flex align-items-center" role="alert">
                    <div className='practicas-descripcion__title'>
                        Intervalos
                    </div>
                    <div>
                        <i className='bx bx-check'></i>

                        <a href='#'><i className='bx bx-chevron-right'></i></a>
                    </div>
                    
                </div>

                <div className="alert alert-success d-flex align-items-center" role="alert">
                    <div className='practicas-descripcion__title'>
                        Escalas
                    </div>
                    <div>
                        <i className='bx bx-check'></i>

                        <a href='#'><i className='bx bx-chevron-right'></i></a>
                    </div>
                    
                </div>


                <div className="alert alert-warning d-flex align-items-center" role="alert">
                    <div className='practicas-descripcion__title'>
                        Acordes
                    </div>
                    <div>
                        <i className='bx bx-check'></i>

                        <a href='#'><i className='bx bx-chevron-right'></i></a>
                    </div>
                    
                </div>


                <div className="alert alert-danger d-flex align-items-center" role="alert">
                    <div className='practicas-descripcion__title'>
                        Nostas
                    </div>
                    <div>
                        <i className='bx bx-check'></i>

                        <a href='#'><i className='bx bx-chevron-right'></i></a>
                    </div>
                    
                </div>


                <div className="alert alert-primary d-flex align-items-center" role="alert">
                    <div className='practicas-descripcion__title'>
                        Sostenidos
                    </div>
                    <div>
                        <i className='bx bx-check'></i>

                        <a href='#'><i className='bx bx-chevron-right'></i></a>
                    </div>
                    
                </div>


                <div className="alert alert-success d-flex align-items-center" role="alert">
                    <div className='practicas-descripcion__title'>
                        Bemoles
                    </div>
                    <div>
                        <i className='bx bx-check'></i>

                        <a href='#'><i className='bx bx-chevron-right'></i></a>
                    </div>
                    
                </div>


                <div className="alert alert-warning d-flex align-items-center" role="alert">
                    <div className='practicas-descripcion__title'>
                         Teorico
                    </div>
                    <div>
                        <i className='bx bx-check'></i>

                        <a href='#'><i className='bx bx-chevron-right'></i></a>
                    </div>
                    
                </div>

                
            </div>
        </div>
    )
}


export default Practicas;