function titleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}

function validateQuery(query, validEntries) {
  if (!query) {
    return {
      isValid: true,
      msg: 'ok'
    }
  }
  
  let keys = Object.keys(query)
  let response;

  keys.forEach(key => {
    let index = validEntries.indexOf(key)
    
    if (index == -1) {
      response = {
        isValid: false,
        msg: `'${key}' is not a valid entry`
      }
    }
  })

  if (response) {
    return response
  }

  return {
    isValid: true,
    msg: 'ok'
  }
}

asyncForEach = async (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}

const queryValidEntries = [
  '_id',
  'row',
  'name',
  'pokedex_number',
  'img_name',
  'generation',
  'evolution_stage',
  'evolved',
  'family_id',
  'cross_gen',
  'type_1',
  'type_2',
  'weather_1',
  'weather_2',
  'stat_total',
  'atk',
  'def',
  'sta',
  'legendary',
  'aquireable',
  'spawns',
  'regional',
  'raidable',
  'hatchable',
  'shiny',
  'nest',
  'new',
  'not_gettable',
  'future_evolve',
  'hundred_cp_40',
  'hundred_cp_39'
]

function paginationMiddleware(model) {
  return async (req, res, next) => {
    const query = req.body.query
    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)

    const startIndex = (page - 1) * limit
    const endIndex = page * limit
    
    const results = {}

    if (endIndex < await model.countDocuments(query).exec()) {
      results.next = {
        page: page + 1,
        limit: limit
      }
    }

    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit
      }
    }

    try {
      
      const validation = validateQuery(query, queryValidEntries)
      if (!validation.isValid) {
          res.status(400).json({
              code: 400,
              msg: validation.msg
          })
          next()
      }

      results.results = await model.find(query).limit(limit).skip(startIndex).exec()
      results.count = await model.countDocuments(query).exec()
      res.paginatedResults = results
      
      next()
      
    } catch (error) {
      res.status(500).json({message: error.message})
    }

  }
}


module.exports = {
  queryValidEntries,
  asyncForEach,
  validateQuery,
  titleCase,
  paginationMiddleware
}