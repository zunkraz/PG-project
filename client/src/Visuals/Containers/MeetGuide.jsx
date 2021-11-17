import React from 'react'

const pageData = {
    title: "Como crear tu link de meet",
    subtitle: "Latam Exponential",
    content: ""
}

function MeetGuide() {
    return (
        <React.Fragment>
            <div className="wrapper bg-professional-title">
                <div className="wrapper padd-lg bg-color-light-a80">
                    <section>
                        <div className="col-1-1@xl col-1-1@lg col-1-1@md col-1-1@sm col-1-1@xs">
                            <div className='font-main'>
                                <span className="padd-md-b padd-lg-r text-bold font-2x border-bottom-color-main">
                                    {pageData.title}
                                </span>
                                <div className="mrg-sm-t font-lg">
                                    {pageData.subtitle}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className="wrapper">
                <div className="wrapper padd-lg">
                    <section>
                        <div className="col-1-1@xl col-1-1@lg col-1-1@md padd-xl-b">
                            <p className="mrg-xl-t font-lg">
                                Guía paso a paso
                            </p>
                            <p className="mrg-xl-t font-lg">
                                Sabemos que es dificil la primera vez, así que te queremos acompañar
                            </p>
                            <p className="mrg-xl-t">
                                Antes de comenzar, recuerda estar logueado con tu cuenta de Google en <a href ="https://meet.google.com/" 
                                target="_blank" rel="noreferrer">Meet</a>
                            </p>
                            <p className="mrg-xl-t">
                                Ahora sigue las siguientes imagenes paso a paso!
                            </p> 
                            <ol className="mrg-xl-t">
                                <li><img src='' alt='paso uno'/></li>
                                <li><img src='' alt='paso dos'/></li>
                                <li><img src='' alt='paso tres'/></li>
                                <li><img src='' alt='paso cuatro'/></li>
                                <li><img src='' alt='paso cinco'/></li>
                                <li><img src='' alt='paso seis'/></li>
                            </ol>
                            <p className="mrg-xl-t">
                                Esperamos que no resultara muy tedioso
                            </p> 
                        </div>
                    </section>
                </div>
            </div>
        </React.Fragment>
    )
}
export default MeetGuide