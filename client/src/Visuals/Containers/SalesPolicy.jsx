import React from 'react'

const pageData = {
    title: "Politica de Ventas",
    subtitle: "Fecha de entrada en vigor: 11 de Noviembre 2021",
    content: ""
}

function Terms() {
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
                                Qué se trata en estos términos.
                            </p>
                            <p className="mrg-xl-t font-lg">                
                                LATAM EXPONENTIAL, en su interés de ofrecer el mejor servicio y una atención oportuna durante todo el proceso comercial, informa las políticas de ventas, las cuales establecen las condiciones para garantizar y fortalecer la relación comercial con nuestros clientes. Al realizar sus compras usted está aceptando las Políticas establecidas por nuestra organización las cuales se detallan a continuación:
                            </p>
                            <p className="mrg-xl-t">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare iaculis dictum. Curabitur libero sapien, lacinia in dolor ac, pellentesque laoreet tellus. Pellentesque ultrices velit non dui eleifend, a suscipit velit porttitor. Sed sit amet feugiat risus. Morbi ullamcorper consectetur turpis et gravida. Aliquam dignissim, ipsum pharetra tempus vulputate, mi quam suscipit sem, quis gravida lectus sem a velit. Proin sed condimentum dui. Suspendisse in iaculis sem. Donec congue lacus sed augue aliquet, dictum eleifend erat vestibulum. Maecenas ac consequat eros, nec pellentesque quam. Ut tempor ipsum in dolor cursus, vitae bibendum tortor consequat. Nam id maximus risus. Suspendisse ornare diam tellus, non laoreet dui vestibulum nec. Integer in luctus ipsum, sagittis pretium lorem.
                            </p>
                            <ol className="mrg-xl-t">
                                <li>1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li>2. Phasellus volutpat tellus nec vestibulum imperdiet.</li>
                                <li>3. Quisque et tellus eu nisi rutrum malesuada eu quis orci.</li>
                                <li>4. Mauris viverra ligula id pretium aliquam.</li>
                                <li>5. Nam blandit orci vel ex fermentum egestas.</li>
                                <li>6. Sed nec odio ac lorem faucibus pharetra.</li>
                            </ol>
                            <p className="mrg-xl-t">
                                Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed vulputate felis nec commodo fermentum. Vivamus purus ipsum, euismod a aliquam ac, vulputate ut odio. Fusce ornare, dolor rhoncus imperdiet semper, massa lorem malesuada elit, et semper velit est vitae turpis. Aenean ultricies rutrum ex eu rutrum. Praesent eget mi gravida, varius massa sit amet, congue lorem. Curabitur consectetur malesuada sollicitudin. Mauris neque nisl, tristique id magna id, mollis fringilla dui. Mauris ut massa luctus, congue velit at, gravida diam. Aliquam facilisis, dolor eu suscipit fringilla, magna lacus pharetra arcu, eu dignissim orci enim dignissim lectus. Aliquam erat volutpat. Donec nibh tellus, varius in libero quis, aliquam lacinia sem. Phasellus ac orci nec dui rhoncus venenatis sed vitae tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                            </p> 
                            <p className="mrg-xl-t">
                                Praesent fermentum, augue sit amet ullamcorper rhoncus, purus nunc feugiat metus, at volutpat nulla diam eu tellus. Fusce id nunc metus. Quisque ut urna eleifend, pulvinar metus id, tempor neque. Nam quis suscipit mi. In volutpat ante sem, sit amet vulputate erat tincidunt vitae.
                            </p> 
                        </div>
                    </section>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Terms