import { Component } from 'react'

export class ManageResponse extends Component {
    constructor (props) {
        super(props)
        this.HTTP_CODE_INTERNAL_SERVER_ERROR = 500
        this.HTTP_CODE_OK = 200
    }

    static checkStatusCode (res) {
        if (this.isServerError(res)) return 0
        if (this.successResponse(res)) {
            return res.json()
        }
    }

    static successResponse (res) {
        const HTTP_CODE_INTERNAL_SERVER_ERROR = 500
        const HTTP_CODE_OK = 200
        return res.status >= HTTP_CODE_OK && res.status < HTTP_CODE_INTERNAL_SERVER_ERROR
    }

    static isServerError (res) {
        const HTTP_CODE_INTERNAL_SERVER_ERROR = 500
        return res.status >= HTTP_CODE_INTERNAL_SERVER_ERROR
    }
}
export default ManageResponse
