import React from 'react';
import ContentRowCenter from './ContentRowCenter';
import ContentRowDataCards from './ContentRowDataCards';
import Chart from './Chart';
import axios from 'axios';
import {useEffect, useState} from 'react';

function ContentRowTop(){
	const [juguetes, setJuguetes] = useState([]);
    const [users, setUsers] = useState([]);
    const [orders, setOrders] = useState([]);

    const products =  async () => {
        const json = await axios("http://localhost:3001/api/products");//pego a mi api
            {/* console.log(json) */}
        setJuguetes(json.data.products);};
    
    const usuarios =  async () => {
        const json = await axios("http://localhost:3001/api/users");//pego a mi api
        
        setUsers(json.data.users);}

    const ventas = async () => {
              const json = await axios("http://localhost:3001/api/orders");//pego a mi api
                setOrders(json.data);
                console.log(json.data)
        }

    useEffect(() => {
            products();
            usuarios();
            ventas();
            
        }, [setJuguetes, setUsers, setOrders]);
		let salesInDB = {
			title: 'Total de Ventas',
			color: 'primary', 
			cuantity: `${orders.totalSales}$`,
			icon: 'fa-clipboard-list'
		}
		
		/* <!-- Total awards --> */
		
		let productsInDB = {
			title:'Productos en Data Base', 
			color:'success', 
			cuantity: `${juguetes.length}`,
			icon:'fa-award'
		}
		
		/* <!-- Actors quantity --> */
		
		let usersInDB = {
			title:'Usuarios en Data Base' ,
			color:'warning',
			cuantity:`${users.length}`,
			icon:'fa-user-check'
		}
		
	
    



    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<ContentRowDataCards
					datacardprops = {[salesInDB, productsInDB, usersInDB]}
					 />
					<ContentRowCenter />
					<Chart />
	
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;