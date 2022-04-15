import '../../assets/styles/ProgresoSemanal.scss';
import '../../assets/styles/mediaqueries/ProgresoSemanalMediaQueries.scss';

const ProgresoSemanal = (props)=>{
    return(
        <div className="progreso">
            
            <div className="propgreso__title">
                <h2>Progreso Semanal</h2>
                <span className='text-muted'>Bradigson Hernandez</span>
            </div>
            <div>
                <table className='table'>
                    <thead className='thead'>
                        <tr>
                            <th>Fecha</th>
                            <th>P. Tarea</th>
                            <th>P. Practicas</th>
                            <th>Total</th>
                            <th>Realizado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='text-center'>
                            <td>1/2/22</td>
                            <td>2/5</td>
                            <td>5/5</td>
                            <td>7/10</td>
                            <td><i className='bx bxs-check-circle text-success'></i></td>
                        </tr>
                       

                    </tbody>
                </table>
            </div>
        </div>
    )
}


export default ProgresoSemanal;