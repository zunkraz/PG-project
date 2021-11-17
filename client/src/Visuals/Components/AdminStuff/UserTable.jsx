import UserRow from "./UserRow";
import React, {useState} from "react";
//import * as FaIcons from 'react-icons/fa';

function UserTable({usersAdmin, token}){
  // const maxPage = Math.floor(usersAdmin.length/8) +1;
  // const [page,setPage] = useState(1);
  const [usersSearch,setUsersSearch] = useState([]);
  const [search,searchHappened] = useState(false);
  // function nextPage() {
  //   setPage(page < maxPage ? page + 1 : page);
  // }
  // function previousPage() {
  //   setPage(page > 1 ? page - 1 : page)
  // }
  // function buttonLeft() {
  //   return page === 1 ? ' ' : <button className="" onClick={previousPage}><FaIcons.FaAngleLeft/></button>
  // }
  // function buttonRight() {
  //   return page === maxPage ? ' ' : <button className="" onClick={nextPage}> <FaIcons.FaAngleRight/></button>
  // }
  // let usersToShow = usersAdmin.slice(page === 1 ? 0 : page * 8-8, page*8);

  function handleSearch(e){
    e.preventDefault();
    searchHappened(true);
    let searchValue = e.target.value;
    setUsersSearch(usersAdmin.filter(u=> {
      return (
        u.email.includes(searchValue)
        || u.username.toLowerCase().includes(searchValue.toLowerCase())
        || u.name.toLowerCase().includes(searchValue.toLowerCase())
        || u.lastname.toLowerCase().includes(searchValue.toLowerCase())
      );
    }));
  }

  return (
    <React.Fragment>  
      <form onSubmit={event => handleSearch(event)}>
        <div className="col-1-1@xl col-1-1@lg col-1-1@md padd-md flex-center-xl-lg-md">
          <div className="col-1-8@xl col-1-5@lg col-1-1@xs padd-md">
            <div className="font-lg font-main text-bold">
              <span>Buscar Usuarios:</span>
            </div>
          </div>
          <div className="col-7-8@xl col-4-5@lg col-1-1@xs padd-md">
            <input
              type="text"
              name="username"
              defaultValue=""
              onChange={event => handleSearch(event)}
              className="uk-input font-sm border-radius-sm"
              autoComplete="off"
              placeholder="Buscar usuarios por: nombre, apellidos, correo, numero de identificación"
            />
          </div>
          {/*
          <input
            type="submit"
            className="border rounded-b width-80 text-xs font-medium text-gray-400 uppercase tracking-wide"
            value="username/email"
          />
          */}
          </div>
        </form>
        {
          ((usersSearch.length === 0) && search) ?
          <div className="col-1-1@xl col-1-1@lg col-1-1@md padd-lg">
            <div className="bg-color-extra4-a20 border-radius-sm height-25vh font-lg text-bold text-red-600 flex-center">
              Ningun usuario coincide con el concepto de busqueda.
            </div>            
          </div>
          : 
          <div className="col-1-1@xl col-1-1@lg padd-md"data-uk-height-match=".normalize">
            {/*
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <div className="flex flex-row mr-4 "> Nombre de usuario </div>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <div className="flex flex-row mr-4 "> Correo electrónico </div>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <div className="flex flex-row mr-4 "> Rol </div>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <div className="flex flex-row mr-4 "> Tipo de usuario </div>
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Profesional Verificado
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Reset password
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Cambiar rol
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    borrar cuenta
                  </th>
                </tr>
              </thead>
              */}
              {
                usersSearch.length>0? usersSearch.slice(0,12).map(u=> <UserRow key={u._id} user={u} token={token}/>):
                usersAdmin.slice(0,12).map(u=> <UserRow key={u._id} user={u} token={token}/>)
              }
              {/*</table>*/}
            {/*<div className="flex-bar position-absolute">{buttonLeft()} {page} {buttonRight()}</div>*/}
          </div>
        }
        </React.Fragment>
  )
}
export default UserTable;