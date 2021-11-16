import React from 'react'
import TeamCard from '../Components/Nosotros/TeamCard'
import '../Assets/CustomGS.css'

function Nosotros() {

    const handleRedirects=(e)=>{
        console.log(e.target.name)
        switch (e.target.name) {
            case 'sabrina':
                window.open('https://th.bing.com/th/id/OIP.XAJS7EiA-P3JOubQZ7-8EwHaFY?pid=ImgDet&rs=1', '_blank')
                window.open('https://www.linkedin.com/in/sabrina-n-vettorelo/', '_blank')
                window.open('https://github.com/svettorelo', '_blank')
                break;
        
            case 'nohelia':
                window.open('https://th.bing.com/th/id/R.2ed23f84ebc8a1d7bc65bd53731c9fa9?rik=GA3wC1HomL6T7A&riu=http%3a%2f%2fstatic.t13.cl%2fimages%2fsizes%2f1200x675%2f1473948114-perroenojado.jpg&ehk=bTEufy8WCNkKg4u%2fLIqdrWIfssUxDrwW2QrL5H5HSBA%3d&risl=&pid=ImgRaw&r=0', '_blank')
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
                        title='Adriana Marta Cejas'
                        text='Soy Adri, la jefa del back'
                        name='adriana'
                        onClick={handleRedirects}
                    />
                <TeamCard
                        img='https://avatars.githubusercontent.com/u/86806193?v=4'
                        title='Agustin Ecker'
                        text='Soy Agus, pestaneo y te programo el Schedule'
                        name='agustin'
                        onClick={handleRedirects}
                    />
                <TeamCard
                        img='https://avatars.githubusercontent.com/u/85126037?v=4'
                        title='Juan Pablo Lozano'
                        text='Soy Juan Pablo, Mientras como el postre te acomodo el responsive'
                        name='juanpablo'
                        onClick={handleRedirects}
                    />
            </div>
            <div className='flex my-10 justify-around'>
                <TeamCard
                        img='https://avatars.githubusercontent.com/u/32313172?v=4'
                        title='Antonio Rodríguez'
                        text='Soy Antonio, Te ordeno el Trello mientras pedaleo'
                        name='antonio'
                        onClick={handleRedirects}
                    />
                <TeamCard
                        img='https://avatars.githubusercontent.com/u/82003379?v=4'
                        title='Nohelia Joeliana Rincon'
                        text='Soy Nohelia, mientras se hace la pizza te programo media App'
                        name='nohelia'
                        onClick={handleRedirects}
                    />
                <TeamCard
                        img='https://avatars.githubusercontent.com/u/86378753?v=4'
                        title='Mauricio Portillo'
                        text='Soy Mauri, Sale un fernecito mientras armamos el back?'
                        name='mauricio'
                        onClick={handleRedirects}
                    />
                <TeamCard
                        img='https://avatars.githubusercontent.com/u/49795628?v=4'
                        title='Gaston Scocco'
                        text='Soy Gaston, dealer de memes y stickers'
                        name='gaston'
                        onClick={handleRedirects}
                    />
            </div>
        </div>
    )
}

export default Nosotros