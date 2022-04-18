import { Mpesa } from 'mpesa-api'

const credentials = {
  clientKey: '0SKHgBn66azzyz5Y22ZufBhP6m5JwmQT',
  clientSecret: 'GUm27XVgi697SUfE',
  initiatorPassword: 'Safaricom987!',
  securityCredential: 'Safaricom987!',
  certificatePath: 'null',
}

const mpesa = new Mpesa(credentials, 'sandbox')

export const stkPush = async (phoneNumber: string, amount: number, ref) => {
  mpesa
    .lipaNaMpesaOnline({
      BusinessShortCode: 174379,
      Amount: amount /* 1000 is an example amount */,
      PartyA: phoneNumber,
      PartyB: '174379',
      PhoneNumber: phoneNumber,
      CallBackURL: 'https://enwwiwbdbtbtp.x.pipedream.net',
      AccountReference: `Pendo Refugee Camp: ${ref}`,
      passKey:
        'bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919',
      TransactionType: 'CustomerPayBillOnline' /* OPTIONAL */,
      TransactionDesc:
        'Transfer of funds from camp admin to section' /* OPTIONAL */,
    })
    .then((response) => {
      //Do something with the response
      //eg
      console.log(response)
    })
    .catch((error) => {
      //Do something with the error;
      //eg
      console.error(error)
    })
}
