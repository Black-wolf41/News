import React from 'react';

class MakeNews extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            dataNews: this.props.dataNews,
        }
    }
    render(){
        const styles = {
            color: "red",
        }
        const elems = this.state.dataNews.map( (item, index) => {
            return(
                <div>
                    <input name="death" id={"inll"+ index} type={item.type}/><label style={item.bol ? styles: {}} id={"lab"+index} htmlFor={"inll" + index} >{item.text}</label>
                    <span id ={"red" + index} >&#9998; </span>
                    <span id ={"del" + index} >&#10005; </span>
                    <span id ={"imp" + index} >&#10082; </span>
                    <br/></div>
                    
            )
        });
        return(
            <div id="News">
                <h1>Todo</h1>
                {elems}
            </div>
        );

    }
}
export default MakeNews;