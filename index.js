import express from "express";
import cors from "cors"
import { getAllPlants, add plant } from './src/plants.js'
const PORT = 3005
const app = express()
app.use (express.json())
app.use(cors())
app.get(/"plants", get all plants)
app.post("/plants/,"getAllPlants)
app.post ("plants ")
// app.delete('/plqntss/:plantId", delete plant)





app.listen(PORT, () => [
console.log('listening on http://localhost${port}...`})