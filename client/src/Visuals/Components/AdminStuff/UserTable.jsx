import UserRow from "./UserRow";
import React, {useState} from "react";
//import * as FaIcons from 'react-icons/fa';

function UserTable({usersAdmin, isAdmin, token}){
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
    if(e.target.name==='username') setUsersSearch(usersAdmin.filter(u=>u.username.includes(e.target.value)));
    if(e.target.name==='email') setUsersSearch(usersAdmin.filter(u=>u.email.includes(e.target.value)));
  }

  return (
    <div className="flex flex-row">
<div className="flex flex-col ">
  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-3">
    <div className="py-2 align-middle inline-block min-w-min sm:px-6 lg:px-8">
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
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
              Borrar
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Reset password
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Cambiar rol
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Editar
            </th>
          </tr>
          </thead>
          {usersSearch.length? usersSearch.map(u=> <UserRow key={u._id} user={u} isAdmin={isAdmin} token={token}/>):
            usersAdmin.map(u=> <UserRow key={u._id} user={u} isAdmin={isAdmin} token={token}/>)}
        </table>
        {/*<div className="flex-bar position-absolute">{buttonLeft()} {page} {buttonRight()}</div>*/}
      </div></div></div></div>
      <form className="" onSubmit={event => handleSearch(event)} >
        <input type="text" name="username" defaultValue="" onChange={event => handleSearch(event)} className="border rounded-b mrg-lg-t width-70" autoComplete="off"/><br/>
        <input type="submit" className="border rounded-b width-70 text-xs font-medium text-gray-400 uppercase tracking-wide" value="Buscar por username"/>

        <input type="text" name="email" defaultValue="" onChange={event => handleSearch(event)} className="border rounded-b mrg-lg-t width-70" autoComplete="off"/><br/>
        <input type="submit" className="border rounded-b width-70 text-xs font-medium text-gray-400 uppercase tracking-wide" value="Buscar por correo"/>

        {((usersSearch.length===0)&&search)?<div className="width-70 uk-margin-top text-xs font-medium text-red-600">No hay resultados</div>:' '}
      </form>
    </div>
  )
}
export default UserTable;