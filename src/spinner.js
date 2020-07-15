import React, { Component } from 'react';
import * as Spinner from 'react-spinners';
import { componentWillAppendToBody } from 'react-append-to-body';
import './index.css';

class RgReactSpinner extends Component {
    constructor(params) {
        super(params);
        this.DEFAULT_SPINNER = 'ClipLoader';
    }

    wrapperItems({ children }) {
        return <div>{children}</div>;
    }

    render() {
        const { context } = this.props;
        let params = {};
        params.color = this.props.color ? this.props.color : '#0277bd';
        if (this.props.size) {
            params.size = this.props.size;
        }
        if (this.props.margin) {
            params.margin = this.props.margin;
        }
        if (this.props.width) {
            params.width = this.props.width;
        }
        if (this.props.height) {
            params.height = this.props.height;
        }
        if (this.props.radius) {
            params.radius = this.props.radius;
        }
        let loading = false;
        if (!!context && !!context.loading || !!this.props.loading) {
            loading = true;
        }
        const AppendedWrapperItems = componentWillAppendToBody(this.wrapperItems);
        return (
            !!this.props.inline
                ?
                <div>
                    {
                        !!loading &&
                        React.createElement(
                            Spinner[this.props.component ? this.props.component : this.DEFAULT_SPINNER],
                            params
                        )
                    }
                </div>
                :
                <AppendedWrapperItems>
                    {
                        !!loading &&
                        <div className="spinner-wrap">
                            <div className="spinner-line">
                                {
                                    React.createElement(
                                        Spinner[this.props.component ? this.props.component : this.DEFAULT_SPINNER],
                                        params
                                    )
                                }
                            </div>
                        </div>
                    }
                </AppendedWrapperItems>
        );
    }
}

export default RgReactSpinner;