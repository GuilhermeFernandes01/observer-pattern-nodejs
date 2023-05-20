export class Payment {
  constructor(paymentSubject) {
    this.paymentSubject = paymentSubject
  }

  creditCard({ id, userName }) {
    console.info(`\na payment ocurred from ${userName}`)
    this.paymentSubject.notify({ id, userName })
  }
}
