const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()
const port = process.env.PORT || 3000
<<<<<<< HEAD
=======

>>>>>>> 264f51147873eb57e3cb47a975c01401f57c4e72

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
<<<<<<< HEAD
        name: 'Jes Zepeda'
=======
        name: 'Jes Z'
>>>>>>> 264f51147873eb57e3cb47a975c01401f57c4e72
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
<<<<<<< HEAD
        name: 'Jes Zepeda'
=======
        name: 'Jes Z'
>>>>>>> 264f51147873eb57e3cb47a975c01401f57c4e72
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        title: 'Help',
<<<<<<< HEAD
        name: 'Jes Zepeda'
=======
        name: 'Jes Z'
>>>>>>> 264f51147873eb57e3cb47a975c01401f57c4e72
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error })
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }

    console.log(req.query.search)
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
<<<<<<< HEAD
        name: 'Jes Zepeda',
=======
        name: 'J Zep',
>>>>>>> 264f51147873eb57e3cb47a975c01401f57c4e72
        errorMessage: 'Help article not found.'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
<<<<<<< HEAD
        name: 'Jes Zepeda',
=======
        name: 'J Zep',
>>>>>>> 264f51147873eb57e3cb47a975c01401f57c4e72
        errorMessage: 'Page not found.'
    })
})

<<<<<<< HEAD
=======
// app.listen(3000, () => {
//     console.log('Server is up on port 3000.')
// })
>>>>>>> 264f51147873eb57e3cb47a975c01401f57c4e72
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})