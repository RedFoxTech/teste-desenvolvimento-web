import callServer, {isError} from './callServer'

export const handleError = (response, callback) => {
  if (isError(response)) {
    alert('Ocorreu um erro ao comunicar com o servidor.')
    console.log(response)
    callback(response)
    return true
  }
}

export const generateResourceApi = name => {
  const self = {
    getList(options) {
      return new Promise((onSuccess, onError) => {
        callServer('get' + name + 'List', options || {})
          .then(response => {
            if (!handleError(response, onError)) onSuccess(response)
          })
          .catch(error => {
            handleError(error, onError)
          })
      })
    },

    get(id, options) {
      return new Promise((onSuccess, onError) => {
        callServer('get' + name, {urlParams: {id}, ...(options || {})})
          .then(response => {
            if (!handleError(response, onError)) onSuccess(response)
          })
          .catch(error => {
            handleError(error, onError)
          })
      })
    },

    create(data, options) {
      var options = options || {}
      return new Promise((onSuccess, onError) => {
        callServer('create' + name, {body: {...data}, ...options})
          .then(response => {
            if (!handleError(response, onError)) onSuccess(response)
          })
          .catch(error => {
            handleError(error, onError)
          })
      })
    },

    update(data) {
      return new Promise((onSuccess, onError) => {
        callServer('update' + name, {urlParams: {id: data.id}, body: {...data}})
          .then(response => {
            if (!handleError(response, onError)) onSuccess(response)
          })
          .catch(error => {
            handleError(error, onError)
          })
      })
    },

    save(data) {
      return !!data.id ? self.update(data) : self.create(data)
    },

    delete(id) {
      return new Promise((onSuccess, onError) => {
        callServer('delete' + name, {urlParams: {id}})
          .then(response => {
            if (!handleError(response, onError)) onSuccess(response)
          })
          .catch(error => {
            handleError(error, onError)
          })
      })
    },
  }

  return self
}
