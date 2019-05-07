import React from 'react'

export default function Footer() {
  return (
    <React.Fragment>
        <div id="contact" className="offset">
           <footer>
             <div className="row justify-content-center">
                <div className="col-md-5 text-center">
                  <h3>upiko</h3>
                  <p> the future of decentralized web products
                  </p>
                  <a href="http://github.com/upiko/" target="_blank"><i className="fab fa-github"></i></a>
                  <a href="/" target="_blank"><i className="fab fa-twitter-square"></i></a>
                </div>

                <hr className="socket"/>&copy; upiko.com

             </div>
           </footer>
      </div>
    </React.Fragment>
  )
}
