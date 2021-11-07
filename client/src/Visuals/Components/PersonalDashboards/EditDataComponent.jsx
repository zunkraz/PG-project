import React from 'react'
import EditInputComponent from './EditInputComponent'

function EditDataComponent(props) {


    const divClass = 'bg-pink-300'
    const labelClass = 'bg-blue-200'
    const inputClass = 'bg-yellow-200'
    
    
    return (
        <div className='flex'>
            <div className='flex flex-col items-center justify-between h-80 w-96'>
                {props.infoType?
                    <div>
                        <EditInputComponent
                                    label='Nombre'
                                    divClass={divClass}
                                    labelClass={labelClass}
                                    inputClass={inputClass}
                            />
                        <EditInputComponent
                                    label='Apellido'
                                    divClass={divClass}
                                    labelClass={labelClass}
                                    inputClass={inputClass}
                            />
                        <EditInputComponent
                                    label='Nombre'
                                    divClass={divClass}
                                    labelClass={labelClass}
                                    inputClass={inputClass}
                            />
                        <EditInputComponent
                                    label='Nombre'
                                    divClass={divClass}
                                    labelClass={labelClass}
                                    inputClass={inputClass}
                            />
                    </div>
                        :
                    <div>
                        <EditInputComponent
                                    label='Nombre'
                                    divClass={divClass}
                                    labelClass={labelClass}
                                    inputClass={inputClass}
                            />
                        <EditInputComponent
                                    label='Nombre'
                                    divClass={divClass}
                                    labelClass={labelClass}
                                    inputClass={inputClass}
                            />
                        <EditInputComponent
                                    label='Nombre'
                                    divClass={divClass}
                                    labelClass={labelClass}
                                    inputClass={inputClass}
                            />
                        <EditInputComponent
                                    label='Nombre'
                                    divClass={divClass}
                                    labelClass={labelClass}
                                    inputClass={inputClass}
                            />
                    </div>
                }
                <div className='flex justify-around'>
                    <button className='w-48 border-r-2 border-white 
                                        bg-white rounded-2xl duration-700
                                        hover:bg-green-500'
                        ><span className='text-green-500 font-medium tracking-widest
                                        duration-700 hover:text-white'
                            >Confirmar</span></button>
                    <button className='w-48 border-l-2 border-white 
                                        bg-white rounded-2xl duration-700
                                        hover:bg-red-500'
                        ><span className='text-red-500 font-medium tracking-widest
                                        duration-700 hover:text-white'
                                onClick={props.onCancel}
                            >Cancelar</span></button>
                </div>
            </div>
        </div>
    )
}

export default EditDataComponent

/*
//PERSONAL INFO CONTAINER
<div className='flex flex-col items-center'>
                                {
                                    Object.keys(userNormalInfo)?.map((elem, index)=>{
                                        let data=userNormalInfo[elem]
                                        return (
                                            <div key={index+1} className='flex'>
                                                <ShowData   key={index} title={elem} 
                                                                data={data}
                                                                divClass={showDataDiv}
                                                                spanClass={showDataSpan} 
                                                                pClass={showDataP}
                                                        />
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            <PersonalEditComponent  trigger={popState}
                                        principalDiv={popClass}
                                        children={<EditDataComponent 
                                                        onCancel={editData}
                                                    />}
                        />
*/