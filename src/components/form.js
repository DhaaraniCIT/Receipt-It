import '../App.css';
import React, { Component } from 'react';
// import Receipt from './recept';
import Receipt from '../components/recept'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
          tenant: '',
          amount: null,
          land:'',
          address:'',
          from:'',
          to:'',
          ispan:false,
          pan:null,
          errors: {
            isErrort:'',
            isErrora:'',
            isErrorl:'',
            isErrorad:'',
            isErrorf:'',
            isErrorto:'',
            isErrorp:'',
         },
         formc:false,
         count:0,
         isfilled:false,
        };
    }
    myChangeHandler = (event) => {
        event.preventDefault();
        this.setState({formc: true});
        let nam = event.target.name;
        let value = event.target.value;
        let errors = this.state.errors;
        this.setState({[nam]: value});
        console.log(value)
        if(nam === 'amount'){
            var totla = value*12
            if(String(value))
            if(totla > 150000){
                this.setState({ispan: true});
            }
            else
                this.setState({ispan:false});
        }
        var temp = "^"+String(event.target.pattern)+"$"
        switch (nam) {
            case 'tenant':
                errors.isErrort =
                Boolean(value.match(temp)) && value.length !==0
                ?'' : 'Name should contain only Alphabets and Name is required'
            break;
            case 'land':
                errors.isErrorl =
                Boolean(value.match(temp)) && value.length !==0
                ?'' : 'Name should contain only Alphabets and Name is required'
            break;
            case 'amount': 
                errors.isErrora = 
                Boolean(value.match(temp))
                ?'' : 'Amount should not start with 0';
            break;
            case 'address': 
                errors.isErrorad = 
                value.length < 10
                ? 'Address must be atleast 10 characters long!': '';
            break;
            case 'from': 
                errors.isErrorf = 
                Boolean(value)
                ? '': 'Date is required!';
            break;
            case 'to':
                errors.isErrorto =
                Boolean(value)
                ?'' : 'Date is required!'
            break;
            case 'pan':
                errors.isErrorp = 
                Boolean(value.match(temp)) && value.length === 10
                ?'' : 'Pan number should be in this pattern ABCDE1234E and Pan Number is required ' ;
                break; 
            default:
              break;
          }
      
          this.setState({errors, [nam]: value});

    }
    printAll = () => {
        console.log(this.state.tenant)
    }
    counter = (event) => {
        console.log(this.state.count)
        var c = this.state.count+1;
        console.log(c>=6)
        var errors = this.state.errors
        this.setState({count:c})
        if(c>=6){
            this.setState({isfilled:true})
        }
        if(event.target.name ==='from'){
            errors.isErrorf = 
                Boolean(event.target.value)
                ? '': 'Date is required!';
        }
        if(event.target.name ==='to'){
            errors.isErrorto = 
                Boolean(event.target.value)
                ? '': 'Date is required!';
        }
        if(event.target.name ==='address'){
            errors.isErrorad = 
                Boolean(event.target.value)
                ? '': 'Address is required!';
        }
        if(event.target.name ==='tenant'){
            errors.isErrort = 
                Boolean(event.target.value)
                ? '': 'Name is required!';
        }
        if(event.target.name ==='land'){
            errors.isErrorl = 
                Boolean(event.target.value)
                ? '': 'Name is required!';
        }
        if(event.target.name ==='amount'){
            errors.isErrora = 
                Boolean(event.target.value)
                ? '': 'Amount is required!';
        }
        if(event.target.name ==='pan'){
            errors.isErrorp = 
                Boolean(event.target.value)
                ? '': 'Pan is required!';
        }
        this.setState({errors, [event.target.name]: event.target.value});

    }
    render() {
        const Pan = (
            <div className="row ml-0 mr-0 form-group mt-3">
                <div className="col-sm-4 align-self-center"><h4>Pan Number</h4><span className="span text-danger">*</span></div>
                <div className="col-sm-8">
                    <input type="text" maxLength="10" className="form-control" name="pan" id="pan" required pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}" onChange={this.myChangeHandler}/>
                    <span className='text-danger'>{this.state.errors.isErrorp}</span>
                </div>
            </div>
        )
        const disable = (
            <button type="button" disabled className="btn btn-dark" ><b>Receipt It</b></button>
        )
        const button = (
            <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><b>Receipt It</b></button>
        )
        return (
            <div className="Rform sans pt-5 pb-5" id="form">
                <div className="container">
                    <div className="heading text-center">
                        <h1>Generate Receipt</h1>
                        <p>Enter the follow details to generate your receipt</p>
                    </div>
                    <div className="row ml-0 mr-0">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-8">
                            <form>
                                <div className="row ml-0 mr-0 form-group mt-3">
                                    <div className="col-sm-4 align-self-center"><span className="text-danger span">*</span><h4>Tenant</h4></div>
                                    <div className="col-sm-8">
                                        <input type="text" minLength="3" className="form-control" name="tenant" id="tenant" required pattern="[A-Za-z]*" onChange={this.myChangeHandler} onClick={this.counter}/>
                                        <span className='text-danger'>{this.state.errors.isErrort}</span>
                                    </div>
                                </div>
                                <div className="row ml-0 mr-0 form-group mt-3">
                                    <div className="col-sm-4 align-self-center"><span className="text-danger span">*</span><h4>Date</h4></div>
                                    <div className="col-sm-4">
                                        <input type="date" placeholder="From" name="from" className="form-control" id="from" required onChange={this.myChangeHandler} onClick={this.counter}/>
                                        <span className='text-danger'>{this.state.errors.isErrorf}</span>
                                    </div>
                                    <div className="col-sm-4 align-self-center">
                                        <input type="date" className="form-control" name="to" id="to" required onChange={this.myChangeHandler} onClick={this.counter}/>
                                        <span className='text-danger'>{this.state.errors.isErrorto}</span>
                                    </div>
                                </div>
                                <div className="row ml-0 mr-0 form-group mt-3">
                                    <div className="col-sm-4 align-self-center"><span className="text-danger span">*</span><h4>Rent Amount</h4></div>
                                    <div className="col-sm-8">
                                        <input type="number" className="form-control" name="amount" id="amount" required pattern="[1-9][0-9]*" onChange={this.myChangeHandler} onClick={this.counter}/>
                                        <span className='text-danger'>{this.state.errors.isErrora}</span>
                                    </div>
                                </div>
                                <div className="row ml-0 mr-0 form-group mt-3">
                                    <div className="col-sm-4 align-self-center"><span className="text-danger span">*</span><h4>Address</h4></div>
                                    <div className="col-sm-8">
                                        <textarea className="form-control" minLength="10" rows="5" name="address" id="comment" required pattern="[A-Za-z]*" onChange={this.myChangeHandler} onClick={this.counter}></textarea>
                                        <span className='text-danger'>{this.state.errors.isErrorad}</span>
                                    </div>
                                </div>
                                <div className="row ml-0 mr-0 form-group mt-3">
                                    <div className="col-sm-4 align-self-center"><span className="text-danger span">*</span><h4>Landlord</h4></div>
                                    <div className="col-sm-8">
                                        <input type="text" minLength="3" className="form-control" name="land" id="land" required pattern="[A-Za-z]*" onChange={this.myChangeHandler} onClick={this.counter}/>
                                        <span className='text-danger'>{this.state.errors.isErrorl}</span>
                                    </div>
                                </div>
                                {this.state.ispan ? Pan : ''}
                                <div className="text-center">
                                    {this.state.errors.isErrort==='' && this.state.errors.isErrorad==='' && this.state.errors.isErrorf==='' && this.state.errors.isErrora==='' && this.state.errors.isErrorl==='' && this.state.errors.isErrorto==='' && this.state.errors.isErrorp===''
                                    && this.state.formc && this.state.count >=6 ? button : disable}
                                    {/* {this.state.count >=6 ? button : disable} */}
                                </div>
                            </form>
                        </div>
                        <div className="col-sm-2"></div>
                        <Receipt tenant={this.state.tenant} land={this.state.land} amount={this.state.amount}
                        from={this.state.from} to={this.state.to} address={this.state.address}/>
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default Form