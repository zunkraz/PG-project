
import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import PaginationBtn from '../PaginationBtn';
import WeekTipsCard from './WeekTipsCard'

function WeekTips() {

    let [tipPage, settipPage] = useState(1)




    //llamado a get/tips 
    // [{  id: NUMBER
    //     text: TEXT
    // },{...},{...}]

    const tipsArray = 
    [
        {"id": "1",
        "text": "Las visitas al psicólogo aumentan un 98% con respecto a 2019"},

        {"id": "2",
        "text": "La mente durante la pandemia ha generado que muchas personas valoren más su vida pero también ha ocasionado lo contrario; personas a las que esta situación les ha pasado factura a nivel mental y emocional"},
        
        {"id": "3",
        "text": "Para ayudar a una persona que está afrontando un problema de salud mental, es importante escuchar, comprender y , sobre todo, estar al lado"},
        
        {"id": "4",
        "text": "Esta alianza entre las nuevas tecnologías y la asistencia sanitaria es indispensable para hacer frente a un reto como el de la salud mental"},
        
        {"id": "5",
        "text": "Tener un contador en tu vida siempre genera utilidades"},
        
        {"id": "6",
        "text": "Una buena gestión de tu contabilidad te permitirá tomar nuevas decisiones que hagan crecer tu negocio"}
    ]
    
    const numOfPages = Math.ceil(tipsArray.length/3)

    const showPage = (tipsArray, tipPage)=>{
        const init = (tipPage-1)*3
        const end = tipPage*3
        return tipsArray.slice(init, end)
    }

    const dwPage = ()=>{
        (tipPage>0&&tipPage!==tipsArray.length) && settipPage(tipPage--)
    }
    const upPage = ()=>{
        (tipPage>0 && tipPage!==tipsArray.length) && settipPage(tipPage++)
    }

    

    return (
        <div className="wrapper bg-component-week-tips cursor-pointer">
            <div className="wrapper bg-color-alt-a40">
                {/*
                <div className="wrapper">
                    <section>
                        <div className="text-center text-bold font-main font-color-light font-2x">
                            Tips de la Semana
                        </div>
                    </section>
                </div>
                */}
                <div 
                    data-uk-slideshow="autoplay:true; animation:slide; ratio:5:1"
                    className="wrapper position-relative"
                    tabindex="-1"
                >
                    <ul className="uk-slideshow-items">
                        {
                            tipsArray && tipsArray.map(element => {
                                return <WeekTipsCard key={element.id} text={element.text} />
                            })
                        }             
                    </ul>
                    {/*
                    <a className="uk-position-center-left uk-position-small uk-hidden-hover bg-t1" href="#" data-uk-slidenav-previous data-uk-slideshow-item="previous"></a>
                    <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-next data-uk-slideshow-item="next"></a>
                    */}
                </div>
            </div>
        </div>
    )
}

export default WeekTips
