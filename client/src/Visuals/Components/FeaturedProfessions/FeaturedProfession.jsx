import React from 'react';
import * as FaIcons from 'react-icons/fa';
import ImageComponent from "../ImageComponent";

function FeaturedProfession({profession}){

  let icons = {
    "617c2d73d7582578fdc7d121":<FaIcons.FaLaptopCode/>,  // Espionaje web
    "617aa0cdcd1fa1ebd069ff21":<FaIcons.FaBalanceScale/>, //Abogacia
    "617aac19eb91de09883ede8e":<FaIcons.FaFileInvoiceDollar/>, // Contaduria
    "617aad194a37a360e5d05b20":<FaIcons.FaPaw/>, // Veterinaria
    "617c262ad7582578fdc7d0fa":<FaIcons.FaDraftingCompass/>, // Arquitectura
    "617c2669d7582578fdc7d0fc":<FaIcons.FaMicrophone/>, // Profesor de canto
    "617c2696d7582578fdc7d101":<FaIcons.FaGuitar/>, // Profesor de guitarra
    "617c2792d7582578fdc7d105":<FaIcons.FaMusic/>, // Profesor de piano
    "617c27b2d7582578fdc7d107":<FaIcons.FaHandHoldingHeart/>, // Psicologia
    "617c2c05d7582578fdc7d11c":<FaIcons.FaPalette/>, // Diseño web
    "617c2ce5d7582578fdc7d11f":<FaIcons.FaChartBar/> // Administracion
  };

return (
  <div className="col-1-4@xl col-1-4@lg col-1-4@md padd-lg">
    <ImageComponent key={profession._id} img={profession.img} ratio={"ratio-3-2"}/>
    <div className="padd-xl-t padd-lg-lr padd-lg-b border-top-color-main border-4x position-relative bg-color-light">
      <div className="position-middle-parent">
        <div className="icon-xl bg-color-main flex-center"><span>{icons[profession._id]}</span></div>
      </div>
      <div className="font-lg font-main width-100 text-center">{profession.name}</div>
    </div>
  </div>
);
}
export default FeaturedProfession;