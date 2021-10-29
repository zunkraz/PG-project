
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
        <div className='WeekTipsDiv'>
            <div className='WeekTipsTitle'>
                <span>Week Tips 2</span>
            </div>
            <div className='WeekTipsCardsContainer'>
                <PaginationBtn pag={tipPage} 
                                pages={numOfPages} 
                                simbol={'<'}
                                workFunction={dwPage} 
                                active={tipPage==1?true:false}/>
                
                {showPage(tipsArray, tipPage)?.map(elem=>{
                    return <WeekTipsCard key={elem.id} text={elem.text}/>
                })}

                <PaginationBtn pag={tipPage} 
                                pages={numOfPages} 
                                simbol={'>'} 
                                workFunction={upPage}
                                active={tipPage===numOfPages?true:false}/>
            </div>
        </div>
    )
}

export default WeekTips
