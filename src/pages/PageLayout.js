/**
 * На этой странице собраны и описаны элементы дизайна специфичные для всех проектов DS
 */
import React from 'react';
import {Link} from 'react-router-dom';
import Select from 'react-select';
import Popup from "../_ds/components/Popup";
import Grid from "../_ds/components/Grid";
import Block from "../_ds/components/Block";

class PageLayout extends React.Component {
    state = {
        options:[
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' }
        ],
        options_multi:[
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' }
        ],
        value: null,
        value_multi: null,
        popup_1_field_1: '',
        popup_1_field_2: '',
        popup_1_field_3: true,
    };
    render() {
        return <div className="container">
            <h1>Базовые элементы DS</h1>
            <div className="page-layout__row">

                <Select
                    className="select m_mr10"
                    classNamePrefix="select"
                    placeholder="React-select"
                    onChange={(opt) => {this.setState({value: opt})}}
                    value={this.state.value}
                    options={this.state.options}
                />
                <Select
                    className="select"
                    classNamePrefix="select"
                    placeholder="Multi"
                    onChange={(opt) => {this.setState({value_multi: opt})}}
                    isMulti={true}
                    value={this.state.value_multi}
                    options={this.state.options_multi}
                />
                <input className="input m_ml10 m_mr20" type="text" placeholder=".input" />
                <textarea className="textarea" rows={3} placeholder={".textarea"} />
            </div>
            <h1>Block and Buttons</h1>
            <Block
                className="m_mt20"
                header={"Block props.header"}
                hideable={true}
            >
                <div className="page-layout__row">
                    <button className="btn">Button</button>
                </div>
                <div className="page-layout__row">
                    <button className="btn btn-green m_mr20">Button</button>
                    <button className="btn btn-blue m_mr20">Button</button>
                    <button className="btn btn-red m_mr20">Button</button>
                </div>
                <div className="page-layout__row">
                    <button className="btn btn-green btn-medium">Button</button>
                    <button className="btn btn-blue btn-medium m_ml10">Button</button>
                    <button className="btn btn-red btn-medium m_ml10">Button</button>
                </div>
                <div className="page-layout__row">
                    <button className="btn btn-green btn-big">Button</button>
                    <button className="btn btn-blue btn-big m_ml10">Button</button>
                    <button className="btn btn-red btn-big m_ml10">Button</button>
                </div>
            </Block>

            <div className="page-layout__row">
                <a className="btn btn-green btn-medium m_mr10">simple link as button</a>
                <a className="m_mr10">Simple link</a>
                <a className="btn-small-gray m_mr10">gray link</a>
                <a className="btn-small-green m_mr10">green link</a>
                <a className="btn-small-red m_mr10">red link</a>
            </div>
            <div className="page-layout__row">
                <a className="btn-link m_mr5">NICK</a>
                <a className="btn-link m_mr5">NICK</a>
                <a className="btn-link m_mr5">NICK</a>
            </div>
            <h2>Popups</h2>
            <div className="page-layout__row">
                <Popup
                    contentLabel={'PAGE_LAYOUT_POPUP_1'}
                headerText={'New committee'}
                buttonText={'Save'}
                startFocusName={'name'}
                fields={[
                {
                    name:'text_field',
                    label:'Text field',
                    type:'text',
                    value:this.state.popup_1_field_1,
                },
                {
                    name:'text_field',
                    label:'Text field 2',
                    type: 'text',
                    value: this.state.popup_1_field_1,
                }]}
                    wrapperTag={'div'}
                    save={(fields_obj, callback, callback_err) => {
                        callback_err('test err');
                    }}
                >
                    <button className="btn btn-green btn-medium m_mr20">popup with err</button>
                </Popup>
                <Popup
                    contentLabel={'PAGE_LAYOUT_POPUP_1'}
                headerText={'New committee'}
                buttonText={'Save'}
                startFocusName={'name'}
                fields={[
                {
                    name:'text_field',
                    label:'Text field',
                    type:'text',
                    value:this.state.popup_1_field_1,
                },
                {
                    name:'text_field',
                    label:'Text field 2',
                    type: 'text',
                    value: this.state.popup_1_field_1,
                }]}
                    wrapperTag={'div'}
                    save={(fields_obj, callback, callback_err) => {
                        callback();
                        console.log('fields_obj', fields_obj)
                    }}
                >
                    <button className="btn btn-blue btn-medium m_mr20">popup without err</button>
                </Popup>
            </div>
            <h2>Grid</h2>
            <Grid grid_name={"LAYOUT_GRID"} columns={[
                {
                    label: "Id",
                    key: 'id',
                    value: row => row.id,
                },
                {
                    label: "Name",
                    key: 'name',
                    value: row => row.name,
                    sortable: true,
                },
            ]} data={[
                {id: 1, name: "row one"},
                {id: 2, name: "row two"},
            ]}
            sortField={{column: "id", direction: "asc"}}
            />
        </div>
    }
}

export default PageLayout;
