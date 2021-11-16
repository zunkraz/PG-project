import React, {useEffect} from 'react';
import ComponentHeader from './../Components/ComponentHeader';

const componentHeaderData = {
    title: "Preguntas Frecuentes",
    subtitle: "Quisque eget mauris eget nisi consectetur lobortis at eu massa.",
    bg: null,// Si esta propiedad se envia null, se asigna un fondo aleatorio.
}

const containerItems = [
    {
        question: "¿Puedo cancelar o cambiar la fecha de una asesoría?",
        answer: "Nullam cursus tincidunt interdum. Aenean elementum aliquam enim ac molestie. Nulla non auctor dui. Phasellus volutpat vel augue non fermentum.",
    },
    {
        question: "¿Se puede pedir un reembolso después de pagar una asesoría?",
        answer: "Maecenas a tempus sem. Integer posuere lacus ac neque laoreet, at accumsan tellus ultrices. Etiam sit amet tempus tellus, ac auctor nulla. Nam at ligula quis magna sodales semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        question: "¿Si no estoy satisfecho con el servicio que recibo, puedo presentar una queja o reclamo al profesional contratado directamente?",
        answer: "Sed ac lorem neque. Suspendisse potenti. Nullam lorem metus, lacinia eget condimentum gravida, placerat vel dolor. Nullam vitae diam dictum, aliquet magna ac, pulvinar sem. Ut elementum quam nec tortor rhoncus, vitae fringilla turpis venenatis. Suspendisse tincidunt risus at mollis condimentum.",
    },
    {
        question: "¿Cuáles son los métodos de pago aceptados en LATAM EXPONENTIAL?",
        answer: "Praesent molestie neque id massa lacinia lacinia. Donec enim odio, varius ut porta id, dapibus vitae tortor. Praesent scelerisque odio a risus euismod pretium.",
    },
    {
        question: "¿Como puedo ofrecer mis servicios en LATAM EXPONENTIAL?",
        answer: "Ut elementum quam nec tortor rhoncus, vitae fringilla turpis venenatis. Suspendisse tincidunt risus at mollis condimentum. Sed sed consectetur diam. In sit amet consectetur risus. Sed ac consectetur orci. Vivamus id ex maximus, bibendum libero non, venenatis felis. Donec semper scelerisque turpis at suscipit. Praesent auctor volutpat ipsum.",
    },
    {
        question: "¿Puedo si tengo más de una profesión puedo ofrecer múltiples servicios con un mismo perfil?",
        answer: "Quisque id tortor molestie, tempus ex ac, interdum ante. Aenean sed felis justo. Nunc porta tempus eros sit amet feugiat. Etiam id metus massa. Donec accumsan neque eu metus sodales tincidunt. Nulla facilisi. Nulla imperdiet libero vitae condimentum fringilla.",
    },
    {
        question: "¿Es requisito obligatorio tener una tarjeta o certificado profesional para ofrecer mis servicios en LATAM EXPONENTIAL?",
        answer: "Aenean euismod massa sed sodales semper. In eget tincidunt orci. Aliquam maximus mauris at ligula auctor facilisis. Duis vitae ante vel sem vulputate varius ut id erat. Morbi nec neque at dolor pretium lacinia nec id purus. Duis ut convallis dolor, posuere imperdiet diam. Proin quis tristique libero.",
    },
    {
        question: "¿Con que frecuencia puedo retirar mis utilidades en LATAM EXPONENTIAL?",
        answer: "Cras feugiat ante sit amet augue consectetur vulputate. Curabitur vel egestas urna. Nulla facilisi. Vestibulum finibus, dui non tempus pulvinar, augue ipsum condimentum diam, nec tristique leo mauris in ipsum. Vestibulum sed hendrerit turpis. Nulla facilisi. Morbi vitae ex aliquam, blandit erat et, mollis metus. Aenean euismod massa sed sodales semper. In eget tincidunt orci. Aliquam maximus mauris at ligula auctor facilisis. Duis vitae ante vel sem vulputate varius ut id erat.",
    },
    {
        question: "¿Puedo ofrecer mis servicios en un horario autónomo o el horario es estipulado por LATAM EXPONENTIAL?",
        answer: "Nullam cursus tincidunt interdum. Aenean elementum aliquam enim ac molestie. Nulla non auctor dui. Phasellus volutpat vel augue non fermentum.",
    },
    {
        question: "¿Como puedo dar de baja mi perfil profesional en LATAM EXPONENTIAL?",
        answer: "Nullam cursus tincidunt interdum. Aenean elementum aliquam enim ac molestie. Nulla non auctor dui. Phasellus volutpat vel augue non fermentum.",
    },
]

function Faq() {
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])

    return (
        <React.Fragment>
            <ComponentHeader data={componentHeaderData} />
            <div className="wrapper">
                <div className="wrapper padd-lg">
                    <section>
                        <div className="col-1-1@xl col-1-1@lg col-1-1@md col-1-1@sm col-1-1@xs padd-xl-b">
                            <ul data-uk-accordion>
                            {
                                containerItems.map((elem, index)=>{
                                    return  <li key={index} className="mrg-lg-t">
                                                <a className="uk-accordion-title padd-lg border-radius-sm bg-t1" href="#">
                                                    {elem.question}
                                                </a>
                                                <div className="uk-accordion-content padd-xl border-radius-sm border-color-extra4-a60 bg-color-extra4-a20">
                                                    {elem.answer}
                                                </div>
                                            </li>
                                })
                            }
                            </ul>                           
                        </div>
                    </section>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Faq