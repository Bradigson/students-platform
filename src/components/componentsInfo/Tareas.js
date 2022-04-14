import '../../assets/styles/Tareas.scss';
const Tareas = (props)=>{
    return(
        <div className='tareas'>
            <div className='tareas-header'>
                <h2>Asignaciones de la Semana</h2>
                <span className="text-muted">Bradigson Hernandez</span>
            </div>

            <div className='card-tarea'>
                <div className='card'>
                    <div className='card-header'>
                        <h2>Tarea de la semana</h2>
                        <span className='text-muted'>14//4/2022</span>
                    </div>
                    <div className='card-body'>
                        <p className='text-center'>
                            Tarea aca
                        </p>

                    </div>
                    <div className='card-footer'>
                            <button className='btn btn-success'>Practique</button>
                            <button className='btn btn-danger'>No Practique</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Tareas;