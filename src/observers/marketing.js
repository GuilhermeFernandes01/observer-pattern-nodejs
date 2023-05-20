/*
  The function update is responsible of handling its errors/exceptions
  The subject won't have any await there (or something that might block any execution)
  The subject is the engine to send data to all observers
*/
export class Marketing {
  update({ id, userName }) {
    console.info(`[${id}]: [marketing] will send an welcome email to [${userName}]`)
  }
}
