import React from 'react'
import EditInputComponent from './EditInputComponent'
import '../../Assets/css/editData.custom.css'





function EditDataComponent(props) {


    const divClass = 'border-b-2'
    const labelClass = 'text-lg  tracking-widest font-medium'
    const inputClass = 'bg-gray-100'
    
    
    return (
        <div className='flex'>
            <div className='flex flex-col items-center justify-between h-80 w-96'>
                {props.userInfo==='personalInfo'&&
                    <div className='flex flex-col h-64 justify-around w-96 max-h-72'>
                        <EditInputComponent
                                    label='Nombre'
                                    inputName='name'
                                    divClass={divClass}
                                    labelClass={labelClass}
                                    inputClass={inputClass}
                                    onChange={props.onChange}
                            />
                        <EditInputComponent
                                    label='Apellido'
                                    inputName='lastname'
                                    divClass={divClass}
                                    labelClass={labelClass}
                                    inputClass={inputClass}
                                    onChange={props.onChange}
                            />
                        <EditInputComponent
                                    label='Cumpleaños'
                                    inputName='birthdate'
                                    divClass={divClass}
                                    labelClass={labelClass}
                                    inputClass={inputClass}
                                    onChange={props.onChange}
                            />
                        <EditInputComponent
                                    label='Contraseña'
                                    inputName='password'
                                    divClass={divClass}
                                    labelClass={labelClass}
                                    inputClass={inputClass}
                                    onChange={props.onChange}
                            />
                    </div>
                }
                {props.userInfo==='professionalInfo' &&
                    <div className='editProfData'>
                        <EditInputComponent
                                    label='Imagen de Perfil'
                                    inputName='img'
                                    divClass={divClass}
                                    labelClass={labelClass}
                                    inputClass={inputClass}
                                    onChange={props.onChange}
                            />
                        <EditInputComponent
                                    label='Titulo'
                                    inputName='title'
                                    divClass={divClass}
                                    labelClass={labelClass}
                                    inputClass={inputClass}
                                    onChange={props.onChange}
                            />
                            <EditInputComponent
                                    label='Universidad'
                                    inputName='intitute'
                                    divClass={divClass}
                                    labelClass={labelClass}
                                    inputClass={inputClass}
                                    onChange={props.onChange}
                            />
                        <EditInputComponent
                                    label='Cuenta Bancaria'
                                    inputName='bankAccount'
                                    divClass={divClass}
                                    labelClass={labelClass}
                                    inputClass={inputClass}
                                    onChange={props.onChange}
                            />
                        <EditInputComponent
                                    label='Estado'
                                    inputName='state'
                                    divClass={divClass}
                                    labelClass={labelClass}
                                    inputClass={inputClass}
                                    onChange={props.onChange}
                            />
                        <EditInputComponent
                                    label='Ciudad'
                                    inputName='city'
                                    divClass={divClass}
                                    labelClass={labelClass}
                                    inputClass={inputClass}
                                    onChange={props.onChange}
                            /> 
                    </div>
                }

                <div className='flex justify-around'>
                    <button className='w-48 h-10 mr-4 bg-white rounded-xl duration-700
                                        hover:bg-green-500 ring-white bg-opacity-5
                                        ring-4 ring-offset-1 ring-offset-green-500'
                            onClick={props.onSuccess}
                        ><span  className='text-green-500 font-medium tracking-widest 
                                        duration-700 hover:text-white'
                            >Confirmar</span></button>
                    <button className='w-48 ml-4 bg-white bg-opacity-5
                                        hover:bg-red-500 rounded-xl duration-700
                                        ring-white ring-4 ring-offset-1 ring-offset-red-500'
                            onClick={props.onCancel}
                        ><span  className='text-red-500 font-medium tracking-widest
                                        duration-700 hover:text-white'
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