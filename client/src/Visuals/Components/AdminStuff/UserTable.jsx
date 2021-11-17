import UserRow from "./UserRow";
import React, {useState} from "react";

function UserTable({usersAdmin, token}){
  const [usersSearch,setUsersSearch] = useState([]);
  const [search,searchHappened] = useState(false);

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
              placeholder="Buscar usuarios por: nombre, apellidos o correo."
            />
          </div>
        </div>
        </form>
        {
          ((usersSearch.length === 0) && search) ?
          <div className="col-1-1@xl col-1-1@lg col-1-1@md padd-lg">
            <div className="bg-color-extra4-a20 border-radius-sm height-25vh font-lg text-bold text-red-600 flex-center">
              Ningún usuario coincide con el concepto de búsqueda.
            </div>            
          </div>
          : 
          <div className="col-1-1@xl col-1-1@lg padd-md"data-uk-height-match=".normalize">
              {
                usersSearch.length>0? usersSearch.slice(0,12).map(u=> <UserRow key={u._id} user={u} token={token}/>):
                usersAdmin.slice(0,12).map(u=> <UserRow key={u._id} user={u} token={token}/>)
              }
              {/*</table>*/}
          </div>
        }
        </React.Fragment>
  )
}
export default UserTable;