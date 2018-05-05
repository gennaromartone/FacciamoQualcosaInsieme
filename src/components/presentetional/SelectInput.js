import React, { Component } from 'react'


export default class SelectInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropDown:false
        };
        this.handleChange = this.handleChange.bind(this);
        this.mammt = null;
        this.handleDropDown = this.handleDropDown.bind(this);
        this.handleClick = this.handleClick.bind(this);
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

      setCategories(){
        const categoriesOrigin = this.state.categories;
        const handleClick = this.handleClick;
        if( categoriesOrigin != null ){
          //const dataQuery = document.getElementById('ulCategories').value;
    
             return categoriesOrigin.map( ({name,id}) => {
            return <li value={name} onClick={handleClick} id={id} key={id}>{name}</li>
            /*return <Li 
                onClick={handleClick}
                name={name}
                key={id}
            />*/
          })
        }  
      }

      handleClick(e){
        //console.log('CLICK: ',e.target)

        this.setState({
            dropDown:!this.state.dropDown
          })

        document.getElementById(this.props.name).value = e.target.attributes.value.value;
        document.getElementById(`select-${this.props.name}`).value = e.target.attributes.id.value;
      }

      handleDropDown(){
          this.setState({
            dropDown:!this.state.dropDown
          })
      }

    render(){
this.mammt = this.setCategories();
const dropDown = this.state.dropDown;
const nameSelectHidden = `select-${this.props.name}`;

        return(
            <div style={{width:'100%'}}>
                <input type="hidden" id={nameSelectHidden} value=""/>
                <input  id={this.props.name} onKeyUp={this.handleChange} 
                    onClick={this.handleDropDown} name={this.props.name}  placeholder={this.props.placeHolder}
                    type="text" className="form--input form--input--select" />
                {dropDown && <div className="form--dropdownContent">
                  <ul id="ulCategories">
                   {this.mammt}

                  </ul>
                </div>}
                <span  className="form--span__arrow">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16">
                  <path fill="#444444" d="M13 4v2l-5 5-5-5v-2l5 5z"></path>
                </svg>
   
                </span>
            </div>    
        )
    }
}

var Li = ({name,key,onClick})=>{

    return(
        <li onClick={onClick} key={key}>{name}</li>
    )
}