import { Consumer } from 'sqs-consumer'
import { ProductService } from './service/ProductService'
import { ENV } from './env'

const app = Consumer.create({
    queueUrl: ENV.QUEUE_URL,
    handleMessage: async (message) => {
        ProductService.processProductMessage(message)
    },
})

app.on('error', (err) => {
    console.error(err.message)
})

app.on('processing_error', (err) => {
    console.error(err.message)
})

app.start()

console.log(`Listening for messages on: ${ENV.QUEUE_URL}`)
