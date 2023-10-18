import express from "express";
import cors from "cors"
import { getAllPlants, addPlant } from './src/plants.js'
const PORT = 3005
const app = express()
app.use (express.json())
app.use(cors())
app.get("/plants", getAllPlants)
app.post("/plants/", getPlant)
app.post ("plants ")
// app.delete('/plqntss/:plantId", delete plant)





app.listen(PORT,()=>{
    console.log(`server listening on http://localhost:${PORT}`)
})