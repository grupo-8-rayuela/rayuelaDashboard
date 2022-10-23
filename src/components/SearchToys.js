import React from 'react';
//import noPoster from '../assets/images/no-poster.jpg';
import {useState, useEffect} from 'react';
import axios from 'axios';

function SearchToys(){
	
	let [results, setResults] = useState([]);
    let [keyword, setKeyword]= useState('')
	

	
const handelInputChange = (e)=>{
	e.preventDefault();
	setKeyword(e.target.value)
}

	const handelSubmit = (e)=>{
		e.preventDefault();
		
	};

	const products =  async () => {
		const json = await axios("http://localhost:3001/api/products")
		let resultados = json.data.products.filter(element => {
										return element.name.toLowerCase().includes(`${keyword}`)})
			setResults(resultados)
				console.log(keyword)
				console.log(resultados)
				
		}

			
	


	useEffect(() => {
	products();
	
	 }, 
	 [setResults, keyword]);
	

	return(
		<div className="container-fluid">
			{
				<>
					<div className="row my-4">
						<div className="col-12 col-md-6">
							{/* Buscador */}
							<form method="GET">
								<div className="form-group">
									<label htmlFor="">Buscar por Juguete:</label>
									<input type="text" className="form-control" onChange={(e) => handelInputChange(e)}/>
								</div>
								<button className="btn btn-info"  onClick={(e) => handelSubmit(e)}>Search</button>
							</form>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<h2>Juguetes para la palabra: {keyword}</h2>
						</div>
						{/* Listado de películas */}
						{
							results && keyword && results?.map((toy, i) => {
								return (
									<div className="col-sm-6 col-md-3 my-4" key={i}>
										<div className="card shadow mb-4">
											<div className="card-header py-3">
												<h5 className="m-0 font-weight-bold text-gray-800">{toy.name}</h5>
											</div>
											<div className="card-body">
												<div className="text-center">
													<img 
														className="img-fluid px-3 px-sm-1 mt-3 mb-4" 
														src={toy.img}
														alt={toy.name} 
														style={{ width: '100%', height: '150px', objectFit: 'cover' }} 
													/>
												</div>
												<p className="text-center">Id: {toy.id}</p>
											</div>
										</div>
									</div>
								)
							})
						}
					</div>
					{
					keyword && results && !results.length ? <div className="alert alert-warning text-center">No se encontraron juguetes</div> : <div></div>}
				</>
					

				
			}
		</div>
	)
}

export default SearchToys;
