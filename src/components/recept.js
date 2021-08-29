import '../App.css';
import React, { Component } from 'react';

class Receipt extends Component {
    // constructor(props){
    //     super(props);
    // }
    print = () => {
        var divContents = document.getElementById("print").innerHTML;
        console.log(divContents)
        var a = window.open('', '', 'height=700, width=1000');
            a.document.write('<html>');
            a.document.write('<body > <h1>Rent Receipt</h1>');
            a.document.write(divContents);
            a.document.write('</body></html>');
            a.document.close();
            a.print();
    }
    render(){
        const today = new Date()
        const date= today.getDate() + '/' + (today.getMonth()+1) + '/' + today.getFullYear()
        const Pan = (
            <span>Pan: <b>{this.props.land}</b></span>
        )
        const fdate = new Date(this.props.from)
        const tdate = new Date(this.props.to)
        const from = fdate.getDate() + '/' + (fdate.getMonth()+1) + '/' + fdate.getFullYear()
        const to = tdate.getDate() + '/' + (tdate.getMonth()+1) + '/' + tdate.getFullYear()
        return(
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content" >
                        <div className="modal-header">
                            <h4 className="modal-title" id="staticBackdropLabel">Rent Receipt</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" id="print">
                            <div className="top">
                                <label>Date:</label><label>{date}</label>
                            </div><br></br>
                            <div className="receipt">
                                <p>Received the sum of Rupees <b >{this.props.amount}</b> from Tenant Mr/Mrs. <b className="text-capitalize">{this.props.tenant}</b>  as rent 
                                for the period from <b>{from}</b> to <b>{to}</b> for the rental property
                                 located at <b>{this.props.address}</b>.</p>
                            </div>
                            <div>
                                <span>Landlord: </span><span className="text-capitalize">{this.props.land}</span>
                            </div>
                            <div>
                                {this.props.pan ? Pan : ''}
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" onClick={this.print} className="btn btn-secondary">Print</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default Receipt