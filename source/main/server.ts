import { createApp } from './configuration/app'
import { PORT } from './configuration/environment'

const app = createApp()

const port = PORT ?? 8080

app.listen(port)
