import Image from 'next/image'
import Head from 'next/head';


export default function Home() {
  return (
    <>
    <Head>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous" />
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
      <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
    </Head>
    <body>
        <header className="sticky top-0 backdrop-blur-xl bg-white/20 z-50 flex items-center justify-between w-full 
        px-3 py-2 border-b-[1px] border-gray-300/50 bg-white/50 shadow-md">
            <img src="https://ik.imagekit.io/d3kzbpbila/thejashari_varCimS-p"
            alt="" className="w-[150px] h-[50px] "/>   
            <div className="flex items-center gap-7 pr-3">
                <a href="#home" className="text-black hover:text-sky-500" >Home</a>
                <a href="#home" className="text-black hover:text-sky-500" >About us</a>
                <a href="#home" className="text-black hover:text-sky-500" >Redeem</a>
                <a href="/login" className="text-black hover:text-sky-500">Sign in</a>
            </div>
        </header>
        
        
        <div id="hero" className="h-[100vh]">
            <div className="bg-image">
                <div className="card rounded-md bg-white mt-10 p-1" style={{width: "20rem", height: "25rem"}}>
                    <img src="https://ik.imagekit.io/d3kzbpbila/thejashari_ikjx3UOmf" className="w-full rounded-t-md " alt="..."/>
                    <div className="card-body p-2">
                        <h5 className="card-title text-2xl">E-Gazilion</h5>
                        <p className="card-text text-lg">"Empowering a sustainable future, one discarded device at a time."</p>
                        <button className="btn btn-primary bg-blue-600 mt-4 rounded-md text-white px-4 py-3">Know More</button>
                    </div>
                </div>
            </div>
        </div>

        <div id="mvv" className="h-[100vh] bg-gray-100 w-full">
          

        </div>

      </body> 
    </>
  )
}
