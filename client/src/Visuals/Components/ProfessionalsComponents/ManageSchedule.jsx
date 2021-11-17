import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SchedulerCont from "../UserDashboard/SchedulerContainer";

export default function ManageSchedule(){

    const userData = useSelector(state => state.sessionReducer.status)   

    return (
        <React.Fragment>
            <div className="wrapper bg-professional-title">
                <div className="wrapper padd-lg bg-color-light-a80">
                    <section>
                        <div className="col-1-1@xl col-1-1@lg col-1-1@md">
                            <div className='font-main font-2x'>
                                
                                <div>
                                    <span className="padd-md-b padd-lg-r text-bold border-bottom-color-main">
                                        {userData.username}
                                    </span>
                                    <div className="mrg-sm-t">
                                        Gestión de turnos
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div>
                <hr />
            </div>
            <div className='schedules-setter'>
                <SchedulerCont userId={userData.id} />
                <Link to={`/miperfil/${userData.username}`}>
                <button className="my-3 w-40 border-radius-sm action action-user-dashboard-cancel">Volver a mi perfil</button>
                </Link>
            </div>
        </React.Fragment>
    )
};