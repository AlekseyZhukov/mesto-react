import React from "react";
class PopupWithForm extends React.Component {
    constructor(props) {
      super(props);
    }
    render () {
      
        return (
<div className = {`popup popup_type_${this.props.name} ${this.props.isOpen && 'popup_opened'}`}>
        <div className="popup__container">
            <button className="popup__close popup__close_edit" type="button" onClick={this.props.onClose}></button>
                    <form className="form" name={this.props.name}>
                        <h2 className="form__title">{this.props.text}</h2>
                        {this.props.children}
                    <button className="form__save-button" type="submit">{this.props.btnText}</button>   
                    </form>
                </div>
            </div>
    
       
    
        );
    }

}
export default PopupWithForm;


