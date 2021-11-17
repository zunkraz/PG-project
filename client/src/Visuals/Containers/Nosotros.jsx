import React from 'react'
import TeamCard from '../Components/Nosotros/TeamCard'
import '../Assets/CustomGS.css'

function Nosotros() {

    const handleRedirects=(e)=>{
        console.log(e.target.name)
        switch (e.target.name) {
            case 'sabrina':
                window.open('https://www.linkedin.com/in/sabrina-n-vettorelo/', '_blank')
                break;
            case 'adriana':
                window.open('https://www.linkedin.com/in/adriana-cejas/', '_blank')
                break;
            case 'agustin':
                window.open('https://www.linkedin.com/in/agustinecker-dev/', '_blank')
                break;
            case 'juanpablo':
                window.open('https://www.linkedin.com/in/juanpa-lozano/', '_blank')
                break;
            case 'antonio':
                window.open('https://www.linkedin.com/in/zunkraz/', '_blank')
                break;
            case 'nohelia':
                window.open('https://www.linkedin.com/in/noheliarincon-dev/', '_blank')
                break;
            case 'mauricio':
                window.open('https://www.linkedin.com/in/maujpok-fullstackdev/', '_blank')
                break;
            case 'gaston':
                window.open('https://www.linkedin.com/in/gaston-scocco/', '_blank')
                break;
            
            default:
                break;
        }
    }


    return (
        <div className='flex flex-col nbg w-full'>
                <div className='flex my-10 justify-around'>
                <TeamCard
                        img='https://avatars.githubusercontent.com/u/69180670?v=4'
                        title={<p className='font-main'>Sabrina Noel Vettorelo</p>}
                        text='Soy Sabri, Reina en memes'
                        name='sabrina'
                        onClick={handleRedirects}
                    />
                <TeamCard
                        img='https://avatars.githubusercontent.com/u/83995401?v=4'
                        title={<p className='font-main'>Adriana Marta Cejas</p>}
                        text='Soy Adri, la jefa del back'
                        name='adriana'
                        onClick={handleRedirects}
                    />
                <TeamCard
                        img='https://avatars.githubusercontent.com/u/86806193?v=4'
                        title={<p className='font-main'>Agustin Ecker</p>}
                        text='Soy Agus, pestaneo y te programo el Schedule'
                        name='agustin'
                        onClick={handleRedirects}
                    />
                <TeamCard
                        img='https://avatars.githubusercontent.com/u/85126037?v=4'
                        title={<p className='font-main'>Juan Pablo Lozano</p>}
                        text='Soy Juan Pablo, Mientras como el postre te acomodo el responsive'
                        name='juanpablo'
                        onClick={handleRedirects}
                    />
            </div>
            <div className='flex my-10 justify-around'>
                <TeamCard
                        img='https://avatars.githubusercontent.com/u/32313172?v=4'
                        title={<p className='font-main'>Antonio Rodríguez</p>}
                        text='Soy Antonio, Te ordeno el Trello mientras pedaleo'
                        name='antonio'
                        onClick={handleRedirects}
                    />
                <TeamCard
                        img='https://avatars.githubusercontent.com/u/82003379?v=4'
                        title={<p className='font-main'>Nohelia Joeliana Rincon</p>}
                        text='Soy Nohelia, mientras se hace la pizza te programo media App'
                        name='nohelia'
                        onClick={handleRedirects}
                    />
                <TeamCard
                        img='https://avatars.githubusercontent.com/u/86378753?v=4'
                        title={<p className='font-main'>Mauricio Portillo</p>}
                        text='Soy Mauri, Sale un fernecito mientras armamos el back?'
                        name='mauricio'
                        onClick={handleRedirects}
                    />
                <TeamCard
                        img='https://avatars.githubusercontent.com/u/49795628?v=4'
                        title={<p className='font-main'>Gaston Scocco</p>}
                        text='Soy Gaston, dealer de memes y stickers'
                        name='gaston'
                        onClick={handleRedirects}
                    />
            </div>
        </div>
    )
}

export default Nosotros