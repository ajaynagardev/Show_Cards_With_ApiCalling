import React,{Component} from "react";
import { Link } from "react-router-dom";
class Page extends Component{
    constructor(props){
        super(props)
        this.state = {
            cardItem:[],
          };
    }
        componentDidMount() {
            const fetchData = async () => {
                var url = window.location.href;
                var res1 = url.split("/");
                var pos = res1.indexOf('nextPage');
                var result = res1[pos+1];
               const response = await fetch(`https://dummyjson.com/products`)
               const jsonResponse = await response.json()
               const res = await jsonResponse.products[result]
               this.setState({ cardItem: res })         
               return res
            }
            fetchData()
            console.log(fetchData())
        }
    render(){
        return(
            <>
            <div className="cards pageCard" id="allcards">
       
                       <div className=" page-container">
                       <img
                         src={this.state.cardItem?.thumbnail}
                         alt="not found" 
                       />
                       <div className="card-content">
                         <p className="description">   
                         {this.state.cardItem?.description}   
                         </p>
                         <p className="title">{this.state.cardItem?.title}</p>
   
                         <p className="title">Avilable stock {this.state.cardItem?.stock}</p>
                         <p className="price">$ {this.state.cardItem?.price} <span class="discount"> {this.state.cardItem?.discountPercentage}%</span></p>
                         <p className="rating">
                           <span class="fa fa-star checked"></span>
                           <span class="fa fa-star checked"></span>
                           <span class="fa fa-star checked"></span>
                           <span class="fa fa-star"></span>
                           <span class="fa fa-star"></span> {   this.state.cardItem?.rating}
                         </p>
                         <button className="btn" ><Link to='/' id="link">Back</Link></button>
                       </div>
                     </div>
                     </div>
            </>
        )
    }
}
export default Page;