import React, { Component } from 'react'


export default class SelectInput extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
        this.mammt = null;
      }
    
      componentWillMount(){
     
        this.setCategories()
      }

      componentWillReceiveProps(nextProps) {
        this.setState(nextProps)
      }

      handleChange(e) {
        const dataQuery = e.target.value.toLowerCase();

        const categories = Object.assign( [], this.props.categories)

        const reduce = categories.filter( ({name}) => {
            //console.log(name+' '+dataQuery+' '+name.indexOf(dataQuery))
            return name.toLowerCase().indexOf(dataQuery) != -1
        })

        this.setState({categories:reduce})
      }

      setCategories(dataQuery){
        const categoriesOrigin = this.state.categories;
    
        if( categoriesOrigin != null ){
          //const dataQuery = document.getElementById('ulCategories').value;
    
          if( dataQuery != null){
            const categories = Object.assign( [], categoriesOrigin)

            const reduce = categories.filter( ({name}) => {
                console.log(name+' '+dataQuery+' '+name.indexOf(dataQuery))
                return name.indexOf(dataQuery) != -1
            }).map( ({name,id}) => {
                return <li key={id}>{name}</li>
              })

              console.log('reduce: ',reduce)
              this.mammt = reduce
              console.log('nuovo mammt: ',this.mammt)
              /*.reduce( (html,val) => {
                console.log('val: ',val)
                  return html.concat(val)
                }, '')
              console.log(reduce)
              document.getElementById('ulCategories').innerHTML = reduce*/
          }
          
             return categoriesOrigin.map( ({name,id}) => {
            return <li key={id}>{name}</li>
          })


    
        }
        
      }


    render(){
this.mammt = this.setCategories();
        return(
            <div style={{width:'100%'}}>
                <input  id={this.props.name} onKeyUp={this.handleChange} 
                    name={this.props.name}  placeholder={this.props.placeHolder}
                    type="text" className="form--input form--input--select" />
                <div className="form--dropdownContent">
                  <ul id="ulCategories">
                   {this.mammt}

                  </ul>
                </div>
                <span className="form--span__arrow">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16">
                  <path fill="#444444" d="M13 4v2l-5 5-5-5v-2l5 5z"></path>
                </svg>
   
                </span>
            </div>    
        )
    }
}