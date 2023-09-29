"use client"
import Header from '../../components/Header'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';

export default function Home(params) {
    
    return (
        <main className="w-full min-h-[100vh] bg-gray-100">
             <Header />
            
            
            <div className="ecommerce-bg bg-light">
                <div>
                    <h1 className="ecommerce-heading">E-Gazilions</h1>
                    <p>Convert your waste into products</p>
                </div>
                <div>
                    <img src=""/>
                    <button className="btn btn-primary">Shop Now</button>
                </div>
            </div>
                

        </main>

    
    )

}