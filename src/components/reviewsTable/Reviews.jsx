import React from 'react';
import ReviewsTableRow from './ReviewsTableRow'
import ReviewsTableHead from './ReviewsTableHead';
import axios from 'axios';
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';


function Reviews(props){

    const {id} =  useParams();
   

    const [reviews, setReviews] = useState([]);
    const getInfoReviews =  async () => {
        const json = await axios("http://localhost:3001/api/products");//pego a mi api
          
        setReviews(json.data.products);
        }
     
        const reviewsInfo = reviews.find(e => e.id === id)

        useEffect(() => {
            getInfoReviews();
         
        }, [setReviews]);
			

    return (
     
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                <div className="col-12">
							<h2>Reviews de Juguete: {reviews.name} </h2>
						</div>
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                           <ReviewsTableHead/>
                        </thead>
                        
                        <tbody>
                             {
                                    

                            reviewsInfo.reviews.map( ( e , i) => {
                                let row = {
                                    Id: e.id,
                                    User: e.userr_fk_id,
                                    Rating: e.rating,
                                    Title: e.review_title,
                                    Review: e.review                                  
                                }
                               
                                return <ReviewsTableRow {
                                    ...row} key={i}/>
                            })
                            }
                            
                        </tbody>

                        <tfoot>
                            <ReviewsTableHead/>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>

    )

   
}

export default Reviews;