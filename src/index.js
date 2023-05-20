import { Payment } from './events/payment.js'
import { Marketing } from './observers/marketing.js'
import { Shipment } from './observers/shipment.js'
import { PaymentSubject } from './subjects/paymentSubject.js'

const paymentSubject = new PaymentSubject()

const marketing = new Marketing()
paymentSubject.subscribe(marketing)

const shipment = new Shipment()
paymentSubject.subscribe(shipment)

const payment = new Payment(paymentSubject)
payment.creditCard({ id: 1, userName: 'Guilherme' })

paymentSubject.unsubscribe(marketing)

// This will notify only shipment area
payment.creditCard({ id: 2, userName: 'Guilherme' })
