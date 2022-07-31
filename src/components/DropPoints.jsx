import React from 'react';
import { Container, Button} from 'react-bootstrap';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import cities from './address.json';
import {useNavigate } from 'react-router-dom'




const DropPoints = () => {
  const navigate = useNavigate()
  return (
    <section id='dropPoints' className='dp-wrapper'>
    <Container className='px-5 text-center's>
      <h1 className='title-section text-center text-green pb-5'>Drop Points</h1>
      <p className='text-center'> Here you can find the addresses of our drop points where you can drop or send the shoes waste</p>
      
      

          <MapContainer center={[-6.968780, 110.123734]} zoom={7} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {cities.map(city =>(
                <Marker
                key={city.id} 
                position={[city.latitude, city.longitude]}>
                <Popup position={[city.latitude, city.longitude]}>
                  <div>
                    <h4>{city.city}</h4>
                    <p>{city.address}</p>
                  </div>
                </Popup>
                </Marker>

            ))}
           
          </MapContainer>
      <p className='mt-4 text-center'>Click the pointer on the map to see the address or see the list of drop points here</p>
      <Button className='dp-button' onClick={() => navigate('/addresslist')}>Address List</Button>
        

            

       
        



            
    </Container>
    </section>
  )
}

export default DropPoints