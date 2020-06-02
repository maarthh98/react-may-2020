import React, { Component } from 'react';

import './DropDown.scss';

export class DropDown extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    // done: здесь должно быть открывание/закрывание дропдауна с помощью this.setState
    //  сделать так же как в компоненте components/panel/PanelFromLecture в методе onClick
    this.setState({isOpen: !this.setState.isOpen})
  };

  onOptionSelect = (event) => {
    // done:
    //  достать из this.props функцию onSelect
    const{onSelect} = this.props;


    // done:
    //  объявить переменную value, записать в нее  event.target.getAttribute('data-value');
    //  вывести console.log(value) и убедиться что в консоли показывается текст выбранной опции
    const value = event.target.getAttribute('data-value');
    console.log(value);

    // done: вызвать функцию из onSelect с аргументом value
    onSelect(value);

    // done: закрыть дропдаун, вызвав this.setState({ isOpen: false })
    this.setState({ isOpen: false })
  };

  render() {
    // done:
    //  достать из this.props массив опций options
    //  он должен быть по умолчанию пуст, т.е. = [] (дефолтный параметр при деструктуризации) и
    //  достать также в пропсах selectedOption (выбранная в данный момент опция)

    const {options=[].selectOptions} = this.props;

    // done:
    //  достать isOpen из this.state

    const {isOpen} = this.state;

    return (
      <div className="may-drop-down dropdown">
        {/* done: показать в строке 45 выбранную опцию selectedOption  и передать в onClick this.toggle
             (нажатие на этот тег должно открывать/закрывать дропдаун)
        */}
        <div className="dropdown-toggle" onClick={this.toggle}>{selectedOption}</div>

        {
          // done:
          //  если значение isOpen в this.state = true показываем этот блок ниже (использовать &&)
          isOpen && <div className="may-drop-down-options-wrapper dropdown-menu show">
            {/*
          done:
            //  рендерим список опций с помощью options.map(option => ....
            //  опция должна быть тегом div и иметь такие пропсы:
            //  должен быть className = "may-drop-down-options-wrapper-option dropdown-item"
            //  key = значению option
            //  атрибут data-value =  значению option
            //  в event listener onClick положить значение this.onOptionSelect
            //  внутри тега показать {option} (как children)
          */}
            {
              options.map(option =>{
                return(
                    <div className='may-drop-down-options-wrapper-option dropdown-item'
                    key={option}
                    data-value={option}
                    onClick={this.onOptionSelect}>

                    </div>
                )
              })
            }
          </div>
        }
      </div>
    );
  }
}