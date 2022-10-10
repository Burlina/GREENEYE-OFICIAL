import express from 'express';
import routes from './src/route/indexRoute.js'
const app = express()

routes(app)
app.use(express.static('public'));

export default app