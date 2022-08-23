import './App.css';
import NavBar from './components/NavBar/NavBar';
import Card from './components/Card/Card';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';




function App() {
  return (
    <div >
      <NavBar/>
    <ItemListContainer greeting="Nuestros Productos" />
    <div className='flex flex-wrap '>
    <Card 
    image="https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/100-100000147BOX_800.jpg"
    name="Micro AMD Ryzen 5 4600G 4.2 Ghz AM4"
    price="$29.879"/>
    <Card
    image="https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/400-HY-CL28-V1_400.jpg"
    name="Cpu Cooler Water Cooler Evga Clc 280 Rgb"
    price="$32.213"/>
    <Card
    image="https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/90-MXBA00-A0UAYZ_800.jpg"
    name="Motherboard Asrock B450 Steel Legend AM4"
    price="$23.055"/>
    <Card
    image="https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/CMG8GX4M1E3200C16_800.jpg"
    name="Memoria Ram Corsair Vengeance RGB RS 8GB 3200 Mhz DDR4"
    price="$8.512"/>
    <Card
    image="https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/GP-GSM2NE3256GNTD_800.jpg"
    name="Disco Solido SSD 256GB Gigabyte M.2 NVMe PCIe x4 3.0"
    price="$6.547"/>
    <Card
    image="https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/EN46621_800.jpg"
    name="Gabinete Xigmatek Gaming X 4 Fan Edition - Fixed RGB (Rainbow)"
    price="$14.550"/>
    <Card
    image="https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/GP-P550B_800.jpg"
    name="Fuente 550W Gigabyte P550B 80 Plus Bronze"
    price="$11.962"/>
    <Card
    image="https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/GV-N3060GAMING-OC-12GD_800.jpg"
    name="Placa de Video Gigabyte Nvidia Geforce RTX 3060 GAMING OC 12GB"
    price="$102.013"/>
    <Card
    image="https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/LC24RG50FZLCZB_800.jpg"
    name="Monitor LED CURVO 24 Samsung Odyssey CRG5 G50 144Hz Freesync"
    price="$71.724"/>
    <Card
    image="https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/910-005794_800.jpg"
    name="Mouse Logitech G203 Lightsync White"
    price="$3.131"/>
      </div>
    </div>
    

  );
}

export default App;
