import React from 'react'
import {Tab, Grid} from "semantic-ui-react"

export default class ImportPane extends React.Component {
    state = {
        loading: false
    }

    render () {
		return (
			<Tab.Pane loading={this.loading}>
				<h2>Import</h2>
			</Tab.Pane>
		);
    }
}