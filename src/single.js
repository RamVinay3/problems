import React, { Component } from 'react'
import Data from './data.json'
import ReactTable from "react-table";  
 

var array=[],access;
 class single extends Component {

     constructor(props) {
         super(props)
     
         this.state = {
              mean:0,
              median:0,
              mode:0,
              deviation:0,
              data:[]
         }
     }
     func=()=>{
         this.meancalc();
         this.mediancalc();
         this.modecalc();
         this.deviationcalc();
     }
     meancalc=()=>{
          var mean1=0;
          console.log("mean",mean1)
        for(var i=0;i<array.length ;i++){
            mean1+=array[i];
           
            
        }
        this.state.mean=mean1/array.length;
        this.setState({mean:(mean1/array.length).toFixed(6)});
       
        
     }
     mediancalc=()=>{
      array.sort(function(a, b){return a-b});
        for(var i=0;i<array.length;i++){
            console.log(array[i])
        }
            
        
        
         if(array.length%2!=0)
        this.setState({median:array[Math.floor(array.length/2)].toFixed(6)})
        else
        this.setState({median:((array[array.length/2]+array[(array.length/2)-1])/2).toFixed(6)})

     }
     push=()=>{
         array.push(parseInt(access.value));
         access.value=""
         
        //  this.func();

     }
     modecalc=()=>{
        
     var mode1,high=0,count=0,k=array[0];
    for(var i=0;i<array.length;i++){
        if(k==array[i]){
            count++;
         }
         else{
             if(high<count){
                 mode1=k;
                 high=count;
             }
             count=1;
             k=array[i];

         }
    }
    this.setState({mode:mode1.toFixed(6)})
     }
     deviationcalc=()=>{
        var squres=0;
        var k1=this.state.mean;
        console.log();
        for(var i=0;i<array.length ;i++){
            squres+=(array[i]-k1)*(array[i]-k1);
            
        }
        this.setState({deviation:Math.sqrt(squres/array.length).toFixed(6)})

     }
     print=()=>{
        console.log(array[2]);
         for(var i=0;i<array.length ;i++){
             console.log(array[i]);
         }
     }
     getData=()=>{
        Data.data.map((item)=>{
            array.push(item);
           
      })
      }
      componentDidMount(){
          this.getData()
          access=document.getElementById("number");
      }
     
    render() {
       

        return (
            <div>
                <button onClick={this.func}>add</button>
                {/* <button onClick={this.print}>print</button> */}
                <button onClick={this.getData}>load</button>
              <table >
                 <thead>
                 <tr>
                      <th>tile</th>
                      <th>value</th>
                  </tr>
                  <tr>
                      <td>mean</td>
                      <td>{this.state.mean}</td>
                  </tr>
                  <tr>
                      <td>median</td>
                      <td>{this.state.median}</td>
                  </tr>
                  <tr>
                      <td>mode</td>
                      <td>{this.state.mode}</td>
                  </tr>
                  <tr>
                      <td>deviation</td>
                      <td>{this.state.deviation}</td>
                  </tr>
                 </thead>
              </table>
            <input id="number"></input>
            <button id="butt" onClick={this.push}> push it</button>
            </div>
        )
    }
}

export default single
