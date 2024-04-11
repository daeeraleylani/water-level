import './../css/Container.css'
function Container(prop){
    return(
        <div className="gal_wat">
            <h1 className='title'>Nivel del agua</h1>
            <div className="cal_sec">
                {prop.children}
            </div>
        </div>
    )
}

export default Container;