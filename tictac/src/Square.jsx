import React from "react";
export function Square(props){
        return (
            <button 
            className="square" 
            onClick={props.onClick}>
                {this.props.value}
            </button>
        )
}