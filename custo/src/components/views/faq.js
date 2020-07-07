import React, { Component } from 'react';


export default class Faq extends Component {
    render(){
        return(
            <div className="text-center">
                <div className="row fa py-5">
                    <div className="col-sm-12 faq">
                        <h2>Frequently Asked Questions</h2>
                    </div>
                    <div className="col-sm-12 my-3 search">
                        <form className="form">
                            <div className="form-group text-center">
                                <input type="text" className="form-control" placeholder="Search for a question"/>
                            </div>
                            <button type="submit" className="btn btn-outline-secondary question px-5">Search</button>
                        </form>
                    </div>
               </div>
               <div className="row text-justify">
            <div className="col-sm-12 py-3 mx-auto">
              <div id="termsOfService" className="accordion accordion-alternate arrow-right">
                <div className="card">
                  <div id="heading1" className="card-header">
                    <h5 className="mb-0">
                      <a href="#" data-toggle="collapse" data-target="#collapse1" aria-expanded="false" aria-controls="collapse1" className="collapsed px-5">What is Custo?</a>
                    </h5>
                  </div> 
                      <div id="collapse1" aria-labelledby="heading1" data-parent="#termsOfService" className="collapse">
                        <div class="card-body px-5 py-2">
                          <p>Docufix.io (the "Site") and its services are maintained by HNG Tech and offered to you, the user ("You"), conditioned upon Your acceptance of the terms, conditions, and notices contained herein without modification (the "User Agreement"). <br/>By clicking the "I Agree to the above Terms &amp; Conditions" box below You: 
                          </p><ol>
                              <li>Represent that You have read and understand, and have the capacity and authority to enter into, this User Agreement; and </li>
                              <li>Agree to be bound by all of its terms and conditions.</li>
                          </ol>
                      <p></p>
                      <p><b>You should review this User Agreement carefully. If You breach the User Agreement, Your authorization to use the Site may automatically be terminated.</b></p>        
                  </div>
                      </div>
                    </div> 
                    <div className="card">
                      <div id="heading2" className="card-header">
                        <h5 className="mb-0">
                          <a href="#" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapse2" className="collapsed px-5">Why should I use myCustomer?</a>
                        </h5>
                      </div> 
                      <div id="collapse2" aria-labelledby="heading2" data-parent="#termsOfService" className="collapse">
                        <div className="card-body px-5 py-2">
                          <p>The Site offers certain document checking, plagiarism detection services (the "Services") which allows You to check Your papers for possible textual matches against Internet-available resources, HNG Tech own proprietary database, and databases licensed from other third parties. The Site is owned and operated by HNG TECH. The Site and Services are protected by Nigeria and international copyright and trademark laws.</p>     
                        </div>
                      </div>
                    </div> 
                    <div className="card">
                      <div id="heading3" className="card-header">
                        <h5 class="mb-0">
                          <a href="#" data-toggle="collapse" data-target="#collapse3" aria-expanded="false" aria-controls="collapse3" className="collapsed px-5 ">How can I download the app?</a>
                        </h5>
                      </div> 
                      <div id="collapse3" aria-labelledby="heading3" data-parent="#termsOfService" className="collapse">
                        <div className="card-body px-5 py-2">
                          <p>HNG Tech may, in its sole discretion, suspend or terminate Your access to the Site and Services to </p>
                          <ol className="list-unstyled">
                              <li>(i) prevent damages to, or degradation of, the Services;</li>
                              <li>(ii) comply with any law, regulation, court order, or other governmental requests;</li>
                              <li>(iii) otherwise protect HNG TECH from potential legal liability; or (iv) address a breach of this User Agreement.</li>
                          </ol> </div>
                      </div>
                    </div> 
                    <div className="card">
                      <div id="heading4" className="card-header">
                        <h5 className="mb-0">
                          <a href="#" data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse4" className="collapsed px-5">Will I need data to make use of the app?</a>
                        </h5>
                      </div> 
                      <div id="collapse4" aria-labelledby="heading4" data-parent="#termsOfService" className="collapse">
                        <div className="card-body px-5 py-2"> 
                          <p>By entering this User Agreement, You further represent that You have read and understand the Privacy Policy (set forth at: "http://www.docufix.io/privacy") and agree to its terms</p>
                        </div>
                      </div>
                    </div> 
                   
                   
                     
                        
                               
           
          </div></div></div>
              
            </div>
        )
    }
}